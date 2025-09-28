import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function SuccessStoriesDetails({ route }) {
  const { story } = route.params;

  const openVideo = () => {
    if (story.video) {
      Linking.openURL(story.video);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={story.image} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.name}>{story.name}</Text>
        <Text style={styles.description}>{story.story}</Text>

        {/* Nouveaux attributs */}
        <View style={styles.metaSection}>
          <Text style={styles.meta}><Text style={styles.metaLabel}>Date :</Text> {story.date || 'N/A'}</Text>
          <Text style={styles.meta}><Text style={styles.metaLabel}>Lieu :</Text> {story.lieu || 'Non précisé'}</Text>
          <Text style={styles.meta}><Text style={styles.metaLabel}>Domaine :</Text> {story.domaine || 'Général'}</Text>
          <Text style={styles.meta}><Text style={styles.metaLabel}>Impact :</Text> {story.impact || 'Inspiration personnelle'}</Text>
        </View>

        {/* Bouton vidéo */}
        {story.video && (
          <TouchableOpacity style={styles.videoButton} onPress={openVideo}>
            <FontAwesome name="video-camera" size={20} color="#fff" />
            <Text style={styles.videoButtonText}>Voir la vidéo</Text>
          </TouchableOpacity>
        )}

        {/* Actions */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton} onPress={() => alert('Liked')}>
            <Text>👍 Like</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => alert('Comment')}>
            <Text>💬 Commentaire</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => alert('Partagé')}>
            <Text>🤝 Partager</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 240,
  },
  content: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 16,
  },
  metaSection: {
    marginBottom: 20,
  },
  meta: {
    fontSize: 14,
    marginBottom: 4,
  },
  metaLabel: {
    fontWeight: 'bold',
  },
  videoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  videoButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  actionButton: {
    alignItems: 'center',
  },
});
