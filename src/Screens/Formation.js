import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';
import images from '../assets/index';

const formations = [
  {
    id: '1',
    poste: 'Développeur React Native',
    fichier_url: images.ginhoSong,
    entreprise: {
      nom_entreprise: 'TechCorp',
      secteur_geographique: 'Paris, France',
      logo_url: images.ginhoSong,
    },
    competences: 'React Native, API REST, Git',
    date_debut: '01/10/2025',
    date_limite: '30/10/2025',
    contact: 'contact@techcorp.com',
    tags: 'Mobile, Stage',
  },
  {
    id: '2',
    poste: 'UX/UI Designer',
    fichier_url: images.ginhoSong,
    entreprise: {
      nom_entreprise: 'Designify',
      secteur_geographique: 'Lyon, France',
      logo_url: images.ginhoSong,
    },
    competences: 'Figma, Adobe XD',
    date_debut: '15/10/2025',
    date_limite: '15/11/2025',
    contact: 'hello@designify.io',
    tags: 'Design, Créatif',
  },
];

export default function FormationList() {
  const navigation = useNavigation();

  const handleLike = (poste) => {
    Alert.alert('Merci!', `Vous avez aimé la formation: ${poste}`);
  };

  const handleComment = (poste) => {
    Alert.alert('Commentaire', `Fonctionnalité de commentaire pour: ${poste}`);
  };

  const handleInscrire = (item) => {
    navigation.navigate('FormationDetails', { formation: item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handleInscrire(item)}
      activeOpacity={0.85}
    >
      {/* Header avec logo et infos */}
      <View style={styles.header}>
        {item.entreprise.logo_url && (
          <Image source={item.entreprise.logo_url} style={styles.logo} />
        )}
        <View style={styles.headerText}>
          <Text style={styles.title}>{item.poste}</Text>
          <Text style={styles.company}>{item.entreprise.nom_entreprise}</Text>
          <Text style={styles.location}>{item.entreprise.secteur_geographique}</Text>
        </View>
      </View>

      {/* Image / flyer */}
      <Image source={item.fichier_url} style={styles.flyerImage} />

      {/* Barre d'actions */}
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={(e) => {
            e.stopPropagation(); // éviter de déclencher la navigation
            handleLike(item.poste);
          }}
        >
          <FontAwesome name="heart-o" size={24} color="#e74c3c" />
          <Text style={styles.actionText}>Aimer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={(e) => {
            e.stopPropagation();
            handleComment(item.poste);
          }}
        >
          <MaterialIcons name="comment" size={24} color="#3498db" />
          <Text style={styles.actionText}>Commenter</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={(e) => {
            e.stopPropagation();
            handleInscrire(item);
          }}
        >
          <Entypo name="login" size={24} color="#2ecc71" />
          <Text style={styles.actionText}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={formations}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f7f9fc',
  },
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 3, // Android
    shadowColor: '#000', // iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
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
  flyerImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginTop: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
    marginTop: 10,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionText: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
});
