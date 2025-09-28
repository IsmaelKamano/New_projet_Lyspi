import React from 'react';
import { StyleSheet, View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import images from '../assets/index';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

const stories = [
  {
    id: '1',
    name: 'Amina B.',
    image: images.ginhoSong,
    story: 'Après son diplôme, Amina a lancé une startup sociale à succès...',
    video: 'https://www.youtube.com/watch?v=Ke90Tje7VS0',
    date: '12 Juin 2024',
    lieu: 'Dakar',
    domaine: 'Éducation sociale',
    impact: 'A aidé plus de 500 jeunes',
  },
  {
    id: '2',
    name: 'Samir D.',
    image: images.ginhoSong,
    story: 'Grâce à un mentorat, Samir a décroché un poste chez Google.',
    video: 'https://www.youtube.com/watch?v=VO5LaEZpA4Y',
    date: '5 Avril 2023',
    lieu: 'Casablanca',
    domaine: 'Technologie',
    impact: 'Embauché dans une multinationale',
  },
  {
    id: '3',
    name: 'Lina R.',
    image: images.ginhoSong,
    story: 'Lina a transformé sa passion pour le design en carrière...',
    video: 'file://C:/Users/johns/Downloads/Video/C\'est quoi JWT.mp4',
    date: '28 Janvier 2022',
    lieu: 'Abidjan',
    domaine: 'Design graphique',
    impact: 'A lancé son propre studio',
  },
];

export default function SuccessStories() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('SuccessStoriesDetails', { story: item })}>
        <Card style={styles.card}>
          {/* En-tête de la publication */}
          <View style={styles.headers}>
            <Image style={{ width: 40, height: 40, borderRadius: 40 }} source={images.ginhoSong} />
            <View style={styles.headerText}>
              <Text style={styles.nom}>Nom</Text>
              <Text style={styles.date}>12h 30</Text>
            </View>
          </View>

          <Image source={item.image} style={styles.image} />
          <Card.Content>
            <Title>{item.name}</Title>
            <Paragraph>{item.story}</Paragraph>
          </Card.Content>

          <View style={styles.actionse}>
            <TouchableOpacity style={styles.actionButton} onPress={() => alert('Vous avez cliqué sur Like')}>
              <Text style={styles.actionText}>👍 Like</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={() => alert('Vous avez cliqué sur Commentaire')}>
              <Text style={styles.actionText}>💬 Commentaire</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton} onPress={() => alert('Vous avez cliqué sur Partager')}>
              <Text style={styles.actionText}>🤝 Partager</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
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
    paddingTop: 30,
    padding: 7
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
  actionse: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: "#eee",
    borderTopWidth: 2,
    marginTop: 7
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#444",
  },
  headers: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  headerText: {
    marginLeft: 10,
  },
});
