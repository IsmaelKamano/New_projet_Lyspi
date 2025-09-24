import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator, Alert, Modal, Button, Linking, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system';
import * as IntentLauncher from 'expo-intent-launcher';
import { shareAsync } from 'expo-sharing';

const Formation = () => {
  const [formations, setFormations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [idEtudiant, setIdEtudiant] = useState(null);
  const [participations, setParticipations] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedFormation, setSelectedFormation] = useState(null);
  const [likedFormations, setLikedFormations] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchFormations();
    fetchIdEtudiant();
  }, []);

  const fetchFormations = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/get_formations');
      const data = await response.json();
      setFormations(data);
    } catch (error) {
      console.error("Erreur chargement formations :", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchIdEtudiant = async () => {
    try {
      const studentId = await AsyncStorage.getItem('id_etudiant');
      if (!studentId) throw new Error('ID étudiant non trouvé');
      setIdEtudiant(studentId);
      fetchParticipations(studentId);
      fetchLikedFormations(studentId);
    } catch (error) {
      console.error('Erreur récupération ID étudiant :', error);
    }
  };

  const fetchParticipations = async (etudiantId) => {
    if (!etudiantId) {
      console.warn('ID étudiant manquant pour la récupération des participations');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/api/etat_participation/${etudiantId}`);

      if (!response.ok) {
        throw new Error(`Erreur serveur : ${response.status}`);
      }

      const data = await response.json();

      if (Array.isArray(data.participations)) {
        setParticipations(data.participations.map((participation) => participation.id_formation));
      } else {
        setParticipations([]);
      }
    } catch (error) {
      console.error('Erreur récupération participations :', error.message || error);
      setParticipations([]);
    }
  };

  const fetchLikedFormations = async (etudiantId) => {
    try {
      const response = await fetch('http://localhost:3000/api/aimer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_etudiant: etudiantId,
          mode: 'get',
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setLikedFormations(data.aimer.map((item) => item.id_formation));
      } else {
        console.error('Erreur récupération des formations aimées:', data.message);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des formations aimées:', error);
    }
  };

  const handleParticiper = async (idFormation) => {
    if (!idEtudiant) {
      Alert.alert('Erreur', 'ID étudiant non disponible');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/participation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id_etudiant: idEtudiant,
          id_formation: idFormation
        })
      });

      const result = await response.json();

      if (response.ok) {
        Alert.alert('Succès', 'Participation enregistrée !');
        fetchParticipations(idEtudiant);
      } else {
        Alert.alert('Erreur', result.message || 'Erreur lors de la participation');
      }
    } catch (error) {
      console.error('Erreur participation :', error);
      Alert.alert('Erreur', 'Impossible de participer à la formation');
    }
  };

  const handleLike = async (idFormation) => {
    try {
      const response = await fetch('http://localhost:3000/api/aimer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_etudiant: idEtudiant,
          id_formation: idFormation,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.action === 'liked') {
          Alert.alert('Succès', 'Formation ajoutée aux favoris !');
        } else {
          Alert.alert('Succès', 'Formation retirée des favoris !');
        }
        fetchLikedFormations(idEtudiant);
      } else {
        Alert.alert('Erreur', data.message || 'Impossible de modifier les favoris');
      }
    } catch (error) {
      console.error('Erreur lors de la modification des favoris:', error);
      Alert.alert('Erreur', 'Une erreur est survenue');
    }
  };

  const handleDownload = async (fileUrl, fileName) => {
    if (!fileUrl) {
      Alert.alert('Erreur', 'Aucun fichier disponible pour cette formation');
      return;
    }

    if (Platform.OS === 'web') {
      // Pour le web, on ouvre simplement le lien dans un nouvel onglet
      window.open(fileUrl, '_blank');
      return;
    }

    try {
      // Télécharger le fichier
      const downloadResumable = FileSystem.createDownloadResumable(
        fileUrl,
        FileSystem.documentDirectory + fileName,
        {}
      );

      Alert.alert('Téléchargement', 'Le fichier est en cours de téléchargement...');

      const { uri } = await downloadResumable.downloadAsync();

      // Ouvrir le fichier
      if (Platform.OS === 'android') {
        const contentUri = await FileSystem.getContentUriAsync(uri);
        await IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
          data: contentUri,
          flags: 1, // FLAG_GRANT_READ_URI_PERMISSION
        });
      } else {
        await shareAsync(uri);
      }

      Alert.alert('Succès', 'Fichier téléchargé et ouvert avec succès !');
    } catch (error) {
      console.error('Erreur lors du téléchargement:', error);
      Alert.alert('Erreur', 'Impossible de télécharger ou d\'ouvrir le fichier');
    }
  };

  const confirmParticipation = (idFormation) => {
    setSelectedFormation(idFormation);
    setShowConfirmation(true);
  };

  const handleConfirmParticipation = () => {
    if (selectedFormation) {
      handleParticiper(selectedFormation);
    }
    setShowConfirmation(false);
    setSelectedFormation(null);
  };

  const handleCancelParticipation = () => {
    setShowConfirmation(false);
    setSelectedFormation(null);
  };

  const isParticipating = (idFormation) => {
    return participations.includes(idFormation);
  };

  const renderWorkshop = ({ item, index }) => (
    <Card style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.index}>Formation #{index + 1}</Text>
        <TouchableOpacity onPress={() => handleLike(item.formation.id)}>
          <FontAwesome
            name={likedFormations.includes(item.formation.id) ? 'heart' : 'heart-o'}
            size={24}
            color={likedFormations.includes(item.formation.id) ? '#FF5A5F' : '#ccc'}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('FormationDetails', {
          formation: item.formation,
          entreprise: item.entreprise
        })}
      >
        <View style={styles.header}>
          {item.entreprise.logo_url && (
            <Image source={{ uri: item.entreprise.logo_url }} style={styles.logo} />
          )}
          <View style={styles.headerText}>
            <Text style={styles.title}>{item.formation.titre}</Text>
            <Text style={styles.company}>{item.entreprise.nom_entreprise}</Text>
          </View>
        </View>

        <Text style={styles.description} numberOfLines={3} ellipsizeMode="tail">
          {item.formation.description}
        </Text>

        {item.formation.image_url && (
          <Image source={{ uri: item.formation.image_url }} style={styles.image} resizeMode="cover" />
        )}
      </TouchableOpacity>

      <View style={styles.actionBar}>
        {item.formation.fichier_url && (
          <TouchableOpacity
            style={[styles.actionButton, styles.downloadButton]}
            onPress={() => handleDownload(item.formation.fichier_url, item.formation.titre + '.pdf')}
          >
            <MaterialIcons name="cloud-download" size={20} color="white" />
            <Text style={styles.actionButtonText}>Télécharger</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[
            styles.actionButton,
            isParticipating(item.formation.id) ? styles.participatingButton : styles.participateButton
          ]}
          onPress={() => confirmParticipation(item.formation.id)}
          disabled={isParticipating(item.formation.id)}
        >
          <FontAwesome 
            name={isParticipating(item.formation.id) ? 'check-circle' : 'handshake-o'} 
            size={20} 
            color="white" 
          />
          <Text style={styles.actionButtonText}>
            {isParticipating(item.formation.id) ? 'Inscrit' : 'Participer'}
          </Text>
        </TouchableOpacity>
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#4e9af1" />
          <Text style={styles.loadingText}>Chargement des formations...</Text>
        </View>
      ) : (
        <FlatList
          data={formations}
          renderItem={renderWorkshop}
          keyExtractor={(item) => item.formation.id.toString()}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Aucune formation disponible pour le moment</Text>
            </View>
          }
        />
      )}

      <Modal
        visible={showConfirmation}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCancelParticipation}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Confirmation</Text>
            <Text style={styles.modalText}>Voulez-vous vraiment participer à cette formation ?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={handleCancelParticipation}
              >
                <Text style={styles.modalButtonText}>Annuler</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.confirmButton]}
                onPress={handleConfirmParticipation}
              >
                <Text style={styles.modalButtonText}>Confirmer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  index: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  headerText: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  company: {
    fontSize: 14,
    color: '#6b7280',
  },
  description: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 12,
    lineHeight: 20,
  },
  image: {
    width: '100%',
    height: 350,
    borderRadius: 8,
    marginBottom: 10,
  },
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 4,
  },
  downloadButton: {
    backgroundColor: '#3b82f6',
  },
  participateButton: {
    backgroundColor: '#10b981',
  },
  participatingButton: {
    backgroundColor: '#6b7280',
  },
  actionButtonText: {
    color: 'white',
    fontWeight: '500',
    marginLeft: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    color: '#6b7280',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emptyText: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#1f2937',
  },
  modalText: {
    fontSize: 16,
    color: '#4b5563',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
  },
  modalButtons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  modalButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    minWidth: '45%',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#ef4444',
  },
  confirmButton: {
    backgroundColor: '#10b981',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default Formation;