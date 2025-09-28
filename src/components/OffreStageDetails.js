import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const isImage = (url) => {
  if (!url) return false;
  return /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(url) ||
    url.includes('unsplash.com') ||
    url.includes('images.');
};

const isPDF = (url) => {
  if (!url) return false;
  return /\.pdf$/i.test(url) || url.toLowerCase().includes('.pdf');
};

const OffreStageDetails = ({ route }) => {
  const { offre } = route.params;

  if (!offre) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Aucune information disponible.</Text>
      </View>
    );
  }

  const handleApplyPress = () => {
    if (offre.contact) {
      Linking.openURL(`mailto:${offre.contact}`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: offre.entreprise.logo_url }} style={styles.logo} resizeMode="contain" />
        <View style={styles.headerText}>
          <Text style={styles.companyName}>{offre.entreprise.nom_entreprise}</Text>
          <Text style={styles.location}>{offre.entreprise.secteur_geographique}</Text>
          <Text style={styles.poste}>{offre.poste}</Text>
        </View>
      </View>

      {isImage(offre.fichier_url) ? (
        <Image source={{ uri: offre.fichier_url }} style={styles.image} resizeMode="cover" />
      ) : isPDF(offre.fichier_url) ? (
        <View style={styles.pdfContainer}>
          <FontAwesome name="file-pdf-o" size={50} color="#d32f2f" />
          <TouchableOpacity onPress={() => Linking.openURL(offre.fichier_url)}>
            <Text style={styles.pdfText}>Ouvrir le PDF</Text>
          </TouchableOpacity>
        </View>
      ) : null}

      <View style={styles.details}>
        <Text style={styles.label}>Type d'offre :</Text>
        <Text style={styles.value}>{offre.type_offre || 'Non précisé'}</Text>

        <Text style={styles.label}>Description :</Text>
        <Text style={styles.value}>{offre.description || 'Non fournie'}</Text>

        <Text style={styles.label}>Compétences requises :</Text>
        <Text style={styles.value}>{offre.competences}</Text>

        <Text style={styles.label}>Date de début :</Text>
        <Text style={styles.value}>{offre.date_debut}</Text>

        <Text style={styles.label}>Date limite :</Text>
        <Text style={styles.value}>{offre.date_limite}</Text>

        <Text style={styles.label}>Tags :</Text>
        <Text style={styles.value}>{offre.tags}</Text>

        <Text style={styles.label}>Contact :</Text>
        <Text style={styles.value}>{offre.contact}</Text>
      </View>

      <TouchableOpacity style={styles.applyButton} onPress={handleApplyPress}>
        <Text style={styles.applyButtonText}>Postuler</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  headerText: {
    marginLeft: 15,
    flex: 1,
  },
  companyName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  location: {
    color: 'gray',
    marginVertical: 3,
  },
  poste: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 15,
  },
  pdfContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  pdfText: {
    marginTop: 10,
    fontSize: 16,
    color: '#d32f2f',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  details: {
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    marginTop: 3,
  },
  applyButton: {
    backgroundColor: '#6200ee',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OffreStageDetails;
