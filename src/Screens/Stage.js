import React from 'react';
import {
  View, Text, Image, FlatList, StyleSheet, SafeAreaView, TouchableOpacity, Linking,
} from 'react-native';
import { Card } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';

// Fonctions pour détecter si le fichier est une image ou un PDF
const isImage = (url) => {
  if (!url) return false;
  return /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(url) ||
    url.includes('unsplash.com') ||
    url.includes('images.');
};

const isPDF = (url) => {
  if (!url) return false;
  return /\.pdf$/i.test(url) || url.toLowerCase().includes('.pdf');
};

const staticOffers = [
  {
    id: 1,
    poste: 'Développeur React Native',
    fichier_url: 'https://example.com/mon-fichier.pdf',
    entreprise: {
      nom_entreprise: 'TechCorp',
      secteur_geographique: 'Paris, France',
      logo_url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    },
    competences: 'React Native, API REST, Git',
    date_debut: '01/10/2025',
    date_limite: '30/10/2025',
    contact: 'contact@techcorp.com',
    tags: 'Mobile, Stage',
    type_offre: 'Stage',
    description: "Développement d'applications mobiles avec React Native pour une startup innovante.",
  },
  {
    id: 2,
    poste: 'UX/UI Designer',
    fichier_url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    entreprise: {
      nom_entreprise: 'Designify',
      secteur_geographique: 'Lyon, France',
      logo_url: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    },
    competences: 'Figma, Adobe XD',
    date_debut: '15/10/2025',
    date_limite: '15/11/2025',
    contact: 'hello@designify.io',
    tags: 'Design, Créatif',
    type_offre: 'Alternance',
    description: "Création de maquettes UI et amélioration de l'expérience utilisateur pour nos produits digitaux.",
  },
];

const OffreList = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    const imageMode = isImage(item.fichier_url);
    const pdfMode = isPDF(item.fichier_url);

    return (
      <Card style={styles.card}>
        {/* Zone cliquable pour aller aux détails */}
        <TouchableOpacity onPress={() => navigation.navigate('DetailsStage', { offre: item })}>
          <View style={styles.header}>
            <Image source={{ uri: item.entreprise.logo_url }} style={styles.logo} resizeMode="contain" />
            <View style={styles.headerText}>
              <Text style={styles.title}>{item.entreprise.nom_entreprise}</Text>
              <Text style={styles.location}>{item.entreprise.secteur_geographique}</Text>
              <Text style={styles.company}>{item.poste}</Text>
            </View>
          </View>

          {imageMode ? (
            <Card.Cover
              source={{ uri: item.fichier_url }}
              style={{ marginBottom: 10, borderRadius: 8 }}
            />
          ) : pdfMode ? (
            <View style={styles.pdfContainer}>
              <FontAwesome name="file-pdf-o" size={40} color="#d32f2f" />
              <TouchableOpacity onPress={() => Linking.openURL(item.fichier_url)}>
                <Text style={styles.pdfText}>Ouvrir le fichier PDF</Text>
              </TouchableOpacity>
            </View>
          ) : null}

          <View style={styles.details}>
            <Text style={styles.infoText}>
              <Text style={styles.label}>Type d'offre :</Text> {item.type_offre || 'Non précisé'}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.label}>Description :</Text> {item.description}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.label}>Compétences :</Text> {item.competences}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.label}>Date de début :</Text> {item.date_debut}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.label}>Date limite :</Text> {item.date_limite}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.label}>Contact :</Text> {item.contact}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.label}>Tags :</Text> {item.tags}
            </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton} onPress={() => console.log('Like')}>
            <FontAwesome name="heart" size={24} color="#ccc" />
            <Text style={styles.actionText}>Like</Text>
            <Text style={styles.countText}>12 likes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={() => console.log('Commenter')}>
            <FontAwesome name="comment" size={20} color="#007AFF" />
            <Text style={styles.actionText}>Commenter</Text>
            <Text style={styles.countText}>3 commentaires</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={() => console.log('Postuler')}>
            <FontAwesome name="paper-plane" size={20} color="blue" />
            <Text style={styles.actionText}>Postuler</Text>
          </TouchableOpacity>
        </View>
      </Card>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, marginVertical: 30 }}>
      <Header utiliserBoutonCreer={false} />
      <FlatList
        data={staticOffers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerText: {
    flex: 1,
    marginLeft: 10,
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
  details: {
    marginVertical: 10,
    paddingHorizontal: 5,
  },
  infoText: {
    fontSize: 14,
    marginBottom: 4,
  },
  label: {
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  countText: {
    fontSize: 12,
    color: '#666',
  },
  pdfContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  pdfText: {
    marginTop: 8,
    color: '#d32f2f',
    fontWeight: 'bold',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default OffreList;
