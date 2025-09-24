import React from 'react';
import { StyleSheet, View, FlatList, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import images from '../assets/index';

const stories = [
  {
    id: '1',
    name: 'Amina B.',
    image: images.ginhoSong,
    story: 'Après son diplôme, Amina a lancé une startup sociale à succès qui aide les jeunes en difficulté.',
    video: 'https://www.youtube.com/watch?v=Ke90Tje7VS0',
  },
  {
    id: '2',
    name: 'Samir D.',
    image: images.ginhoSong,
    story: 'Grâce à un mentorat et une formation, Samir a décroché un poste chez Google.',
    video: 'https://www.youtube.com/watch?v=VO5LaEZpA4Y',
  },
  {
    id: '3',
    name: 'Lina R.',
    image: images.ginhoSong,
    story: 'Lina a transformé sa passion pour le design en carrière grâce à un coaching personnalisé.',
    video: 'file://C:/Users/johns/Downloads/Video/C\'est quoi JWT.mp4',
  },
];

export default function App() {
  const renderItem = ({ item }) => {
    return (
      <Card style={styles.card}>
        <Image source={item.image } style={styles.image} />
        <Card.Content>
          <Title>{item.name}</Title>
          <Paragraph>{item.story}</Paragraph>
        </Card.Content>
        <Card.Actions style={styles.actions}>
          <Button onPress={() => Linking.openURL(item.video)}>🎥 Voir la vidéo</Button>
        </Card.Actions>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🎉 Success Stories Inspirantes</Text>
      <FlatList
        data={stories}
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
    paddingHorizontal: 16,
  },
  list: {
    paddingHorizontal: 16,
  },
  card: {
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    height: 200,
    width: '100%',
  },
  actions: {
    justifyContent: 'flex-end',
    paddingHorizontal: 8,
  },
});
