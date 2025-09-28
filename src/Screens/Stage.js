import React from 'react';
import {
  View, Text, Image, FlatList, StyleSheet, SafeAreaView, TouchableOpacity,
} from 'react-native';
import { Card } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import images from '../assets/index';
import Header from '../components/Header';

const staticOffers = [
  {
    id: 1,
    poste: 'Développeur React Native',
    fichier_url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
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
  },
];

// ✅ Détection améliorée des images même sans extension
const isImage = (url) => {
  if (!url) return false;
  return (
    /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(url) ||
    url.includes('unsplash.com') ||
    url.includes('images.')
  );
};

const OffreList = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Details', { offre: item })}>
        <Card style={styles.card}>
          <View style={styles.header}>
            <Image source={{ uri: item.entreprise.logo_url }} style={styles.logo} resizeMode="contain" />
            <View style={styles.headerText}>
              <Text style={styles.title}>{item.entreprise.nom_entreprise}</Text>
              <Text style={styles.location}>{item.entreprise.secteur_geographique}</Text>
              <Text style={styles.company}>{item.poste}</Text>
            </View>
          </View>

          {/* ✅ Affichage du flyer si image détectée */}
          {isImage(item.fichier_url) && (
            <Card.Cover
              source={{ uri: item.fichier_url }}
              style={{ marginBottom: 10, borderRadius: 8 }}
            />
          )}

          <View style={styles.actions}>
            <View style={styles.actionButton}>
              <FontAwesome name="heart" size={24} color="#ccc" />
              <Text style={styles.actionText}>Like</Text>
              <Text style={styles.countText}>12 likes</Text>
            </View>

            <View style={styles.actionButton}>
              <FontAwesome name="comment" size={20} color="#007AFF" />
              <Text style={styles.actionText}>Commenter</Text>
              <Text style={styles.countText}>3 commentaires</Text>
            </View>

            <View style={styles.actionButton}>
              <FontAwesome name="paper-plane" size={20} color="blue" />
              <Text style={styles.actionText}>Postuler</Text>
            </View>
          </View>
        </Card>
      </TouchableOpacity>
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
});

export default OffreList;
