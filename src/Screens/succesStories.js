import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
  Platform,
} from 'react-native';
import { Card, Paragraph, Button, Avatar } from 'react-native-paper';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

const initialStories = [
  {
    id: '1',
    name: 'Amina B.',
    specialty: 'Éducation sociale',
    description: 'Après son diplôme, Amina a lancé une startup sociale à succès...',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    videoId: 'Ke90Tje7VS0',
    date: '12 Juin 2024',
    lieu: 'Dakar',
    impact: 'A aidé plus de 500 jeunes',
  },
  {
    id: '2',
    name: 'Samir D.',
    specialty: 'Technologie',
    description: 'Grâce à un mentorat, Samir a décroché un poste chez Google.',
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
    image: 'https://images.unsplash.com/photo-1516321310764-4d2517c112dd',
    date: '5 Avril 2023',
    lieu: 'Casablanca',
    impact: 'Embauché dans une multinationale',
  },
  {
    id: '3',
    name: 'Lina R.',
    specialty: 'Design graphique',
    description: 'Lina a transformé sa passion pour le design en carrière...',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    videoId: 'nT-rU1rS5Tc',
    date: '28 Janvier 2022',
    lieu: 'Abidjan',
    impact: 'A lancé son propre studio',
  },
];

export default function SuccessStories() {
  const navigation = useNavigation();
  const [stories, setStories] = useState(initialStories);
  const [modalVisible, setModalVisible] = useState(false);
  const [newStory, setNewStory] = useState({
    name: '',
    specialty: '',
    description: '',
    avatar: 'https://randomuser.me/api/portraits/lego/1.jpg',
    videoUrl: '',
    image: '',
    lieu: '',
    impact: '',
  });
  const [isVideoContent, setIsVideoContent] = useState(true);

  // ✅ Création d'une nouvelle histoire
  const handleCreateStory = () => {
    if (!newStory.name || !newStory.specialty || !newStory.description || !newStory.lieu || !newStory.impact) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs obligatoires.');
      return;
    }

    const videoIdMatch = newStory.videoUrl.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    const newId = (stories.length + 1).toString();
    const date = new Date().toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });

    const story = {
      id: newId,
      name: newStory.name,
      specialty: newStory.specialty,
      description: newStory.description,
      avatar: newStory.avatar || 'https://randomuser.me/api/portraits/lego/1.jpg',
      date,
      lieu: newStory.lieu,
      impact: newStory.impact,
      ...(isVideoContent && videoIdMatch ? { videoId: videoIdMatch[1] } : { image: newStory.image }),
    };

    setStories([story, ...stories]);
    setNewStory({
      name: '',
      specialty: '',
      description: '',
      avatar: 'https://randomuser.me/api/portraits/lego/1.jpg',
      videoUrl: '',
      image: '',
      lieu: '',
      impact: '',
    });
    setModalVisible(false);
  };

  // ✅ Affichage d’une carte d’histoire
  const renderItem = ({ item }) => {
    const thumbnailUrl = item.videoId ? `https://img.youtube.com/vi/${item.videoId}/0.jpg` : item.image;
    const isVideo = !!item.videoId;
    const videoUrl = isVideo ? `https://www.youtube.com/watch?v=${item.videoId}` : null;

    return (
      <Card style={styles.card}>
        <Card.Title
          title={item.name}
          subtitle={item.specialty}
          left={(props) => <Avatar.Image {...props} source={{ uri: item.avatar }} />}
        />
        <Card.Content>
          <Paragraph>{item.description}</Paragraph>
          <Text style={styles.metaText}>📍 {item.lieu} | 📅 {item.date}</Text>
          <Text style={styles.metaText}>🌟 Impact: {item.impact}</Text>

          {thumbnailUrl && (
            <TouchableOpacity
              onPress={() => isVideo && Linking.openURL(videoUrl)}
              style={styles.mediaContainer}
            >
              <Image source={{ uri: thumbnailUrl }} style={styles.mediaThumbnail} />
              {isVideo && <Text style={styles.videoText}>▶ Voir la vidéo</Text>}
            </TouchableOpacity>
          )}
        </Card.Content>
        <Card.Actions style={styles.actions}>
          <Button onPress={() => Alert.alert("Like 👍")}>👍 Like</Button>
          <Button onPress={() => Alert.alert("Commentaire 💬")}>💬 Commenter</Button>
          <Button onPress={() => Alert.alert("Partage 🤝")}>🤝 Partager</Button>
        </Card.Actions>
      </Card>
    );
  };

  // ✅ Rendu final avec détection plateforme
  return (
    <View style={styles.container}>
      <Header utiliserBoutonCreer={true} onCreatePress={() => setModalVisible(true)} />
      <Text style={styles.header}>Histoires de Réussite</Text>

      {/* Modal d'ajout */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Créer une nouvelle histoire</Text>
            <TextInput
              style={styles.input}
              placeholder="Nom de l'auteur"
              value={newStory.name}
              onChangeText={(text) => setNewStory({ ...newStory, name: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Titre de l'histoire (spécialité)"
              value={newStory.specialty}
              onChangeText={(text) => setNewStory({ ...newStory, specialty: text })}
            />
            <TextInput
              style={[styles.input, { height: 100 }]}
              placeholder="Description"
              value={newStory.description}
              onChangeText={(text) => setNewStory({ ...newStory, description: text })}
              multiline
            />
            <TextInput
              style={styles.input}
              placeholder="Lieu"
              value={newStory.lieu}
              onChangeText={(text) => setNewStory({ ...newStory, lieu: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Impact"
              value={newStory.impact}
              onChangeText={(text) => setNewStory({ ...newStory, impact: text })}
            />
            <View style={styles.toggleContainer}>
              <Button
                onPress={() => setIsVideoContent(true)}
                mode={isVideoContent ? 'contained' : 'outlined'}
              >
                Vidéo
              </Button>
              <Button
                onPress={() => setIsVideoContent(false)}
                mode={!isVideoContent ? 'contained' : 'outlined'}
              >
                Image
              </Button>
            </View>
            {isVideoContent ? (
              <TextInput
                style={styles.input}
                placeholder="URL YouTube"
                value={newStory.videoUrl}
                onChangeText={(text) => setNewStory({ ...newStory, videoUrl: text })}
              />
            ) : (
              <TextInput
                style={styles.input}
                placeholder="URL de l'image"
                value={newStory.image}
                onChangeText={(text) => setNewStory({ ...newStory, image: text })}
              />
            )}
            <View style={styles.modalActions}>
              <Button mode="contained" onPress={handleCreateStory}>
                Publier
              </Button>
              <Button mode="outlined" onPress={() => setModalVisible(false)}>
                Annuler
              </Button>
            </View>
          </View>
        </View>
      </Modal>

      {/* Liste des histoires */}
      <FlatList
        data={stories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4f7', paddingTop: 40 },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  list: { paddingHorizontal: 16 },
  card: { marginBottom: 24, borderRadius: 8 },
  actions: { justifyContent: 'space-between', paddingHorizontal: 5 },
  mediaContainer: { marginTop: 12, position: 'relative', borderRadius: 8, overflow: 'hidden' },
  mediaThumbnail: { width: '100%', height: 200, borderRadius: 8 },
  videoText: {
    position: 'absolute', bottom: 10, right: 10,
    backgroundColor: 'rgba(0,0,0,0.6)', color: '#fff',
    paddingHorizontal: 10, paddingVertical: 4, borderRadius: 4, fontSize: 14,
  },
  metaText: { fontSize: 14, color: '#666', marginTop: 4 },
  modalContainer: { flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContent: { backgroundColor: '#fff', marginHorizontal: 20, padding: 20, borderRadius: 8 },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 10 },
  toggleContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  modalActions: { flexDirection: 'row', justifyContent: 'space-between' },
});
