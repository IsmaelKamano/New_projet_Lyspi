import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { Card } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import images from '../assets/index';
import Header from '../components/Header';

const staticFormations = [
  {
    id: 1,
    titre: 'Formation React Native',
    fichier: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    entreprise: {
      nom_entreprise: 'CodeFactory',
      secteur_geographique_nom: 'Paris, France',
      logo_url: images.profilFemme,
      domaine_intervention: 'Développement mobile',
      type_entreprise_nom: 'Startup',
      site_web: 'https://codefactory.io',
    },
    description: "Apprenez à développer des applications mobiles avec React Native.",
    localisation: 'En ligne',
    date_debut: '01/10/2025',
    date_fin: '01/12/2025',
    prerequis: 'Connaissance de base en JavaScript',
    email_contact: 'formation@codefactory.io',
  },
  {
    id: 2,
    titre: 'UI/UX Design Fundamentals',
    fichier: images.ginhoSong,
    entreprise: {
      nom_entreprise: 'Designify',
      secteur_geographique_nom: 'Lyon, France',
      logo_url: images.profilHomme,
      domaine_intervention: 'Design numérique',
      type_entreprise_nom: 'Agence',
      site_web: 'https://designify.fr',
    },
    description: "Maîtrisez les bases du design d’interface et de l’expérience utilisateur.",
    localisation: 'Lyon',
    date_debut: '10/10/2025',
    date_fin: '10/12/2025',
    prerequis: 'Aucun',
    email_contact: 'contact@designify.fr',
  },
];

const FormationList = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    const isPdf = typeof item.fichier === 'string' && item.fichier.toLowerCase().endsWith('.pdf');

    return (
      <Card style={styles.card}>
        <TouchableOpacity
          onPress={() => navigation.navigate('FormationDetails', { formation: item })}
          activeOpacity={0.7}
        >
          <View style={styles.header}>
            <Image
              source={typeof item.entreprise.logo_url === 'number' ? item.entreprise.logo_url : { uri: item.entreprise.logo_url }}
              style={styles.logo}
              resizeMode="contain"
            />
            <View style={styles.headerText}>
              <Text style={styles.title}>{item.entreprise.nom_entreprise}</Text>
              <Text style={styles.location}>{item.entreprise.secteur_geographique_nom}</Text>
              <Text style={styles.company}>{item.titre}</Text>
            </View>
          </View>

          {/* Affichage PDF ou image */}
          {item.fichier && isPdf ? (
            <View style={styles.pdfContainer}>
              <FontAwesome name="file-pdf-o" size={40} color="#d32f2f" />
              <TouchableOpacity onPress={() => Linking.openURL(item.fichier)}>
                <Text style={styles.pdfText}>Ouvrir le fichier PDF</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <Card.Cover
              source={
                typeof item.fichier === 'number' ? item.fichier : { uri: item.fichier }
              }
              style={{ marginBottom: 10, borderRadius: 8 }}
            />
          )}

          {/* Infos principales */}
          <View style={styles.infoSection}>
            <Text style={styles.infoText}>
              <Text style={styles.label}>Début :</Text> {item.date_debut}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.label}>Fin :</Text> {item.date_fin}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.label}>Pré-requis :</Text> {item.prerequis}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.label}>Contact :</Text> {item.email_contact}
            </Text>
          </View>
        </TouchableOpacity>

        {/* Actions (optionnel) */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton} onPress={() => alert('Like!')}>
            <FontAwesome name="heart" size={24} color="#ccc" />
            <Text style={styles.actionText}>Like</Text>
            <Text style={styles.countText}>12 likes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={() => alert('Commenter!')}>
            <FontAwesome name="comment" size={20} color="#007AFF" />
            <Text style={styles.actionText}>Commenter</Text>
            <Text style={styles.countText}>3 commentaires</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={() => alert('S’inscrire!')}>
            <FontAwesome name="paper-plane" size={20} color="blue" />
            <Text style={styles.actionText}>S’inscrire</Text>
          </TouchableOpacity>
        </View>
      </Card>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, marginVertical: 30 }}>
      <Header utiliserBoutonCreer={false} />
      <FlatList
        data={staticFormations}
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
  infoSection: {
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

export default FormationList;
