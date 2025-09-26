import React from 'react';
import { StyleSheet, View, FlatList, Text, Image, Linking, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, Button, Avatar } from 'react-native-paper';

const mentors = [
  {
    id: '1',
    name: 'Sarah Ben Ali',
    specialty: 'Développement Web',
    description: 'Mentor spécialisée en React, Node.js et projets full-stack.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    videoId: 'Ke90Tje7VS0', // ID de vidéo YouTube
  },
  {
    id: '2',
    name: 'Youssef El Amrani',
    specialty: 'Entrepreneuriat & Startups',
    description: 'Coach pour les jeunes entrepreneurs. Ex-CEO d’une startup tech.',
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
    videoId: 'VO5LaEZpA4Y',
  },
  {
    id: '3',
    name: 'Nadia Kacem',
    specialty: 'Marketing Digital',
    description: 'Spécialiste en stratégie digitale et personal branding.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    videoId: 'nT-rU1rS5Tc',
  },
];

export default function App() {
  const renderItem = ({ item }) => {
    const thumbnailUrl = `https://img.youtube.com/vi/${item.videoId}/0.jpg`;
    const videoUrl = `https://www.youtube.com/watch?v=${item.videoId}`;

    return (
      <Card style={styles.card}>
        <Card.Title
          title={item.name}
          subtitle={item.specialty}
          left={(props) => <Avatar.Image {...props} source={{ uri: item.avatar }} />}
        />
        <Card.Content>
          <Paragraph>{item.description}</Paragraph>

          <TouchableOpacity
            onPress={() => Linking.openURL(videoUrl)}
            style={styles.videoContainer}
          >
            <Image source={{ uri: thumbnailUrl }} style={styles.videoThumbnail} />
            <Text style={styles.videoText}>▶ Voir la vidéo</Text>
          </TouchableOpacity>
        </Card.Content>
        <Card.Actions style={styles.actions}>
          <Button onPress={() => console.log(`Contacter ${item.name}`)}>💬 Contacter</Button>
          <Button onPress={() => console.log(`Rendez-vous avec ${item.name}`)}>📅 Rendez-vous</Button>
        </Card.Actions>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Coaching & Mentorat</Text>
      <FlatList
        data={mentors}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    paddingHorizontal: 16,
  },
  card: {
    marginBottom: 24,
  },
  actions: {
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  videoContainer: {
    marginTop: 12,
    position: 'relative',
    borderRadius: 8,
    overflow: 'hidden',
  },
  videoThumbnail: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  videoText: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    fontSize: 14,
  },
});
