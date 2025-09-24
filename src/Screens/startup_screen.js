import React, { useState, useEffect } from 'react';
import {
  View, Text, Image, FlatList, StyleSheet, TouchableOpacity,
  ActivityIndicator, TextInput, Alert, Keyboard, SafeAreaView, Modal
} from 'react-native';
import { Card } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
// adapte le chemin
const offre = () => {
  const [internshipOffers, setInternshipOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedItems, setExpandedItems] = useState({});
  const [comments, setComments] = useState({});
  const [commentInputs, setCommentInputs] = useState({});
  const [activeCommentInput, setActiveCommentInput] = useState(null);
  const [likedOffers, setLikedOffers] = useState({});
  const [selectedImage, setSelectedImage] = useState(null); // État pour l'image sélectionnée
  const [offerComments, setOfferComments] = useState({}); // Ajoute un état pour stocker les commentaires par offre
  const [offerLikes, setOfferLikes] = useState({}); // État pour stocker les likes des offres

  const navigation = useNavigation();
 
  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/get_stages');
        setInternshipOffers(response.data);
      } catch (err) {
        setError('Failed to fetch data');
        console.error('Error fetching internship offers:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchInternships();
  }, []);

  useEffect(() => {
    const fetchLikeStatus = async () => {
      try {
        const userId = await AsyncStorage.getItem('id_etudiant');
        const updatedLikes = {};

        for (const offer of internshipOffers) {
          const response = await axios.get(`http://localhost:3000/api/offres/${offer.offre.id}/like/${userId}`);
          updatedLikes[offer.offre.id] = response.data.statut === 1;
        }

        setLikedOffers(updatedLikes);
      } catch (error) {
        console.error('[ERROR FETCHING LIKE STATUS]', error);
      }
    };

    if (internshipOffers.length > 0) {
      fetchLikeStatus();
    }
  }, [internshipOffers]);

  // Récupère le nombre de commentaires pour chaque offre après le chargement
  useEffect(() => {
    const fetchCommentsForOffers = async () => {
      try {
        const commentsObj = {};
        for (const offer of internshipOffers) {
          const res = await axios.get(`http://localhost:3000/api/offres/${offer.offre.id}/nbcommentaires`);
          commentsObj[offer.offre.id] = res.data.totalCommentaires;
        }
        setOfferComments(commentsObj);
      } catch (error) {
        console.error('Erreur lors de la récupération des commentaires par offre:', error);
      }
    };
    if (internshipOffers.length > 0) {
      fetchCommentsForOffers();
    }
  }, [internshipOffers]);

  useEffect(() => {
    const fetchLikesForOffers = async () => {
      try {
        const likesObj = {};
        for (const offer of internshipOffers) {
          const res = await axios.get(`http://localhost:3000/api/offres/${offer.offre.id}/nblikes`);
          likesObj[offer.offre.id] = res.data.totalLikes;
        }
        setOfferLikes(likesObj);
      } catch (error) {
        console.error('Erreur lors de la récupération des likes par offre:', error);
      }
    };
    if (internshipOffers.length > 0) {
      fetchLikesForOffers();
    }
  }, [internshipOffers]);

  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleApply = (item) => {
    navigation.navigate('ApplyScreen', {
      offer: item.offre,
      offerId: item.offre.id,
    });
  };

  const fetchComments = async (offerId) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/offres/${offerId}/commentaires`);
      setComments((prevComments) => ({
        ...prevComments,
        [offerId]: response.data,
      }));
    } catch (error) {
      console.error('[COMMENTS ERROR]', error);
      Alert.alert('Erreur', 'Impossible de charger les commentaires.');
    }
  };

  const handleLike = async (offerId) => {
    try {
      const userId = await AsyncStorage.getItem('id_etudiant');
      const response = await axios.post(`http://localhost:3000/api/offres/${offerId}/like`, {
        userId: userId,
      });
      const { liked, nbLikes } = response.data;

      setLikedOffers((prev) => ({ ...prev, [offerId]: liked }));
      setOfferLikes((prev) => ({ ...prev, [offerId]: nbLikes })); // Mets à jour le nombre de likes pour cette offre
    } catch (error) {
      console.error('[LIKE ERROR]', error);
      Alert.alert('Erreur', 'Impossible de mettre à jour le like.');
    }
  };

  const handleComment = async (offerId) => {
    const commentaire = commentInputs[offerId]?.trim();
    const userId = await AsyncStorage.getItem('id_etudiant');

    if (!commentaire || !userId) {
      Alert.alert('Erreur', 'Commentaire vide ou utilisateur non connecté.');
      return;
    }

    try {
      await axios.post(`http://localhost:3000/api/offres/${offerId}/commentaires`, {
        userId,
        commentaire,
      });

      fetchComments(offerId);
      Alert.alert('Succès', 'Commentaire envoyé !');
      setCommentInputs((prev) => ({ ...prev, [offerId]: '' }));
      setActiveCommentInput(null);
      Keyboard.dismiss();
    } catch (error) {
      console.error('[COMMENT ERROR]', error);
      Alert.alert('Erreur', 'Impossible d\'envoyer le commentaire.');
    }
  };

  const handleImagePress = (imageUrl) => {
    setSelectedImage(imageUrl); // Définir l'image sélectionnée
  };

  const closeImageModal = () => {
    setSelectedImage(null); // Réinitialiser l'image sélectionnée
  };

  const renderInternshipOffer = ({ item }) => {
    const isExpanded = expandedItems[item.offre.id];
    const isLiked = likedOffers[item.offre.id];
    const nbLikes = offerLikes[item.offre.id] ?? 0;
    const nbCommentaires = offerComments[item.offre.id] ?? 0;

    return (
      <Card style={styles.card}>
     <View style={styles.header}>
  <TouchableOpacity onPress={() => navigation.navigate('StageDetails', { offre: item.offre, entreprise: item.entreprise })}>
    <View style={[styles.header, { flexDirection: 'row', alignItems: 'center' }]}>
      
      {item.entreprise.logo_url ? (
        <Image
          source={{ uri: item.entreprise.logo_url }}
          style={styles.logo}
          resizeMode="cover"
        />
      ) : (
        <View style={[styles.logo, { backgroundColor: '#ccc', justifyContent: 'center', alignItems: 'center' }]}>
          <Text style={{ fontSize: 10, color: '#666' }}>Pas de logo</Text> {/* ✅ Ce texte est dans une balise <Text> */}
        </View>
      )}

      <View style={[styles.headerText, { marginLeft: 10 }]}>
        <Text style={styles.title}>{item.entreprise.nom_entreprise}</Text>
        <Text style={styles.location}>{item.entreprise.secteur_geographique}</Text>
        <Text style={styles.company}>{item.offre.poste}</Text>
      </View>

    </View>
  </TouchableOpacity>
</View>


        {item.offre.fichier_url && (
          <TouchableOpacity onPress={() => handleImagePress(item.offre.fichier_url)}>
            <Image source={{ uri: item.offre.fichier_url }} style={styles.image} resizeMode="cover" />
          </TouchableOpacity>
        )}

        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton} onPress={() => handleLike(item.offre.id)}>
            <FontAwesome name="heart" size={24} color={isLiked ? 'red' : '#ccc'} />
            <Text style={styles.actionText}>Like</Text>
            <Text style={styles.likeCount}>{nbLikes} likes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => {
              if (activeCommentInput === item.offre.id) {
                setActiveCommentInput(null);
              } else {
                setActiveCommentInput(item.offre.id);
                fetchComments(item.offre.id);
              }
            }}
          >
            <FontAwesome name="comment" size={20} color="#007AFF" />
            <Text style={styles.actionText}>Commenter</Text>
            <Text style={{ fontSize: 12, color: '#007AFF' }}>
              {nbCommentaires} commentaires
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.applyButton} onPress={() => handleApply(item)}>
            <FontAwesome name="paper-plane" size={20} color="blue" />
            <Text style={styles.applyText}>Postuler</Text>
          </TouchableOpacity>
        </View>

        {activeCommentInput === item.offre.id && (
          <>
            <View style={styles.commentInputContainer}>
              <TextInput
                placeholder="Votre commentaire..."
                value={commentInputs[item.offre.id] || ''}
                onChangeText={(text) => setCommentInputs((prev) => ({ ...prev, [item.offre.id]: text }))}
                style={styles.commentInput}
              />
              <TouchableOpacity onPress={() => handleComment(item.offre.id)} style={styles.commentButton}>
                <FontAwesome name="paper-plane" size={24} color="blue" />
              </TouchableOpacity>
            </View>

            {comments[item.offre.id] && (
              <View style={styles.commentsList}>
                {comments[item.offre.id].map((comment, index) => (
                  <View key={index} style={styles.commentItem}>
                    <Text style={styles.commentUser}>{comment.nom_utilisateur}</Text>
                    <Text style={styles.commentText}>{comment.commentaire}</Text>
                    <Text style={styles.commentDate}>{comment.date_commentaire}</Text>
                  </View>
                ))}
              </View>
            )}
          </>
        )}
   
      </Card>
    );
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {selectedImage && (
        <Modal visible={true} transparent={true} onRequestClose={closeImageModal}>
          <TouchableOpacity style={styles.modalContainer} onPress={closeImageModal}> {/* Ferme l'image en cliquant dessus */}
            <Image source={{ uri: selectedImage }} style={styles.fullscreenImage} resizeMode="contain" />
          </TouchableOpacity>
        </Modal>
      )}
      <FlatList
        data={internshipOffers}
        renderItem={renderInternshipOffer}
        keyExtractor={(item) => item.offre.id.toString()}
      />
  
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // styles identiques (ajoute ceux pour les commentaires si nécessaires)
  commentInputContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  commentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  commentButton: {
    marginLeft: 10,
  },
  commentsList: {
    paddingHorizontal: 10,
    marginTop: 5,
  },
  commentItem: {
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 5,
  },
  commentUser: {
    fontWeight: 'bold',
  },
  commentText: {
    color: '#333',
  },
  commentDate: {
    fontSize: 12,
    color: 'gray',
  },
  likeCount: {
    fontSize: 12,
    color: '#007AFF',
  },
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,// Add margin to separate logo from text
  },
  headerText: {
    flex: 1, // Allow text to take available space // Add margin to separate text from logo
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 14,
    color: 'gray',
  },
  location: {
    fontSize: 14,
    color: 'gray',
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 350, // Adjusted height to show the full image
    borderRadius: 10,
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  actionButton: {
    alignItems: 'center',
  },
  actionText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  applyButton: {
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  applyText: {
    color: 'black',
    fontWeight: 'bold',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  descriptionBlock: {
    marginBottom: 10,
  },
  descriptionTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 5,
    color: '#333',
  },
  toggleText: {
    color: '#007bff',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'right',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  fullscreenImage: {
    width: '90%',
    height: '90%',
  },
});

export default offre;
