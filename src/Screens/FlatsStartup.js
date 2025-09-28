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

const staticStartups = [
  {
    id: 1,
    nom: 'GreenTech Solutions',
    fichier_url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    imageProfil: images.profilHomme,
    imageStartup: images.ginhoSong,
    description: "Innovations écologiques pour un avenir durable.",
    site_web: 'https://greentech.com',
    date_creation: '2023-01-15',
    problematique: "Réduire les émissions de CO2 dans les villes.",
    solution: "Développement de capteurs et d'applications pour monitorer la pollution.",
    fonctionLike: () => alert('Liked GreenTech'),
    fonctionComment: () => alert('Comment GreenTech'),
    fonctionPartage: () => alert('Shared GreenTech'),
  },
  {
    id: 2,
    nom: 'HealthPlus',
    fichier_url: images.ginhoSong,
    imageProfil: images.profilFemme,
    imageStartup: images.profilFemme,
    description: "Plateforme de santé connectée pour tous.",
    site_web: 'https://healthplus.io',
    date_creation: '2022-05-10',
    problematique: "Manque d’accès aux services de santé personnalisés.",
    solution: "Application mobile pour suivi médical et conseils personnalisés.",
    fonctionLike: () => alert('Liked HealthPlus'),
    fonctionComment: () => alert('Comment HealthPlus'),
    fonctionPartage: () => alert('Shared HealthPlus'),
  },
];

const FlatsStartup = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    const isPdf =
      typeof item.fichier_url === 'string' &&
      item.fichier_url.toLowerCase().endsWith('.pdf');

    return (
      <Card style={styles.card}>
        <TouchableOpacity
          onPress={() => navigation.navigate('StartupDetails', { startup: item })}
          activeOpacity={0.7}
        >
          <View style={styles.header}>
            <Image
              source={
                typeof item.imageProfil === 'number'
                  ? item.imageProfil
                  : { uri: item.imageProfil }
              }
              style={styles.logo}
              resizeMode="contain"
            />
            <View style={styles.headerText}>
              <Text style={styles.title}>{item.nom}</Text>
              <Text style={styles.company}>{item.description}</Text>
            </View>
          </View>

          {/* Affichage PDF ou image */}
          {item.fichier_url && isPdf ? (
            <View style={styles.pdfContainer}>
              <FontAwesome name="file-pdf-o" size={40} color="#d32f2f" />
              <TouchableOpacity onPress={() => Linking.openURL(item.fichier_url)}>
                <Text style={styles.pdfText}>Ouvrir le document PDF</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <Card.Cover
              source={
                typeof item.fichier_url === 'number'
                  ? item.fichier_url
                  : { uri: item.fichier_url }
              }
              style={{ marginBottom: 10, borderRadius: 8 }}
            />
          )}

          {/* Infos principales */}
          <View style={styles.infoSection}>
            <Text style={styles.infoText}>
              <Text style={styles.label}>Créée le :</Text> {item.date_creation}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.label}>Problématique :</Text> {item.problematique}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.label}>Solution :</Text> {item.solution}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.label}>Site web :</Text>{' '}
              <Text
                style={styles.link}
                onPress={() => item.site_web && Linking.openURL(item.site_web)}
              >
                {item.site_web}
              </Text>
            </Text>
          </View>
        </TouchableOpacity>

        {/* Actions */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton} onPress={item.fonctionLike}>
            <FontAwesome name="heart" size={24} color="#ccc" />
            <Text style={styles.actionText}>Like</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={item.fonctionComment}>
            <FontAwesome name="comment" size={20} color="#007AFF" />
            <Text style={styles.actionText}>Commenter</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={item.fonctionPartage}>
            <FontAwesome name="paper-plane" size={20} color="blue" />
            <Text style={styles.actionText}>Partager</Text>
          </TouchableOpacity>
        </View>
      </Card>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, marginVertical: 30 }}>
      <Header utiliserBoutonCreer={false} />

      {/* Bouton "Créer" intégré proprement */}
      <View style={styles.createButtonContainer}>
        <TouchableOpacity
          style={styles.createButton}
          onPress={() => navigation.navigate('CreerStartup')}
        >
          <FontAwesome name="plus" size={16} color="#fff" />
          <Text style={styles.createText}>Créer</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={staticStartups}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
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
  link: {
    color: '#3498db',
    textDecorationLine: 'underline',
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
  createButtonContainer: {
    alignItems: 'flex-end',
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 5,
  },
  createButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  createText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 6,
  },
});

export default FlatsStartup;
