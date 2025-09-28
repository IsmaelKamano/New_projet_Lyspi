import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const isImage = (url) => {
  if (!url) return false;
  return /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(url) ||
    (typeof url === 'string' && (url.includes('unsplash.com') || url.includes('images.')));
};

const FormationDetails = ({ route }) => {
  const { formation } = route.params;

  if (!formation) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Aucune formation sélectionnée.</Text>
      </View>
    );
  }

  const handleInscription = () => {
    if (formation.email_contact) {
      Linking.openURL(`mailto:${formation.email_contact}`);
    }
  };

  const renderLogo = () => {
    const logoSource = formation.entreprise?.logo_url;
    if (!logoSource) return null;

    // Si logo local (number), sinon url
    return (
      <Image
        source={typeof logoSource === 'number' ? logoSource : { uri: logoSource }}
        style={styles.logo}
        resizeMode="contain"
      />
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{formation.titre}</Text>

      <View style={styles.entrepriseSection}>
        {renderLogo()}
        <View style={styles.entrepriseInfo}>
          <Text style={styles.entrepriseName}>{formation.entreprise?.nom_entreprise}</Text>
          <Text style={styles.secteur}>{formation.entreprise?.secteur_geographique_nom}</Text>
        </View>
      </View>

      <View style={styles.flyerContainer}>
        {formation.fichier && isImage(formation.fichier) ? (
          <Image
            source={typeof formation.fichier === 'number' ? formation.fichier : { uri: formation.fichier }}
            style={styles.flyer}
            resizeMode="cover"
          />
        ) : formation.fichier ? (
          <View style={styles.pdfPlaceholder}>
            <MaterialIcons name="picture-as-pdf" size={60} color="#e74c3c" />
            <TouchableOpacity onPress={() => Linking.openURL(formation.fichier)}>
              <Text style={{ marginTop: 8, color: '#e74c3c', textDecorationLine: 'underline' }}>
                Ouvrir le fichier PDF
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>

      <View style={styles.details}>
        <Text style={styles.label}>Description :</Text>
        <Text style={styles.value}>{formation.description}</Text>

        <Text style={styles.label}>Localisation :</Text>
        <Text style={styles.value}>{formation.localisation}</Text>

        <Text style={styles.label}>Date de début :</Text>
        <Text style={styles.value}>{formation.date_debut}</Text>

        <Text style={styles.label}>Date de fin :</Text>
        <Text style={styles.value}>{formation.date_fin}</Text>

        <Text style={styles.label}>Pré-requis :</Text>
        <Text style={styles.value}>{formation.prerequis}</Text>

        <Text style={styles.label}>Contact :</Text>
        <Text style={styles.value}>{formation.email_contact}</Text>

        <Text style={styles.label}>Domaine d’intervention :</Text>
        <Text style={styles.value}>{formation.entreprise?.domaine_intervention}</Text>

        <Text style={styles.label}>Type d'entreprise :</Text>
        <Text style={styles.value}>{formation.entreprise?.type_entreprise_nom}</Text>

        <Text style={styles.label}>Site web :</Text>
        <Text
          style={[styles.value, { color: '#3498db' }]}
          onPress={() => {
            const url = formation.entreprise?.site_web;
            if (url) Linking.openURL(url);
          }}
        >
          {formation.entreprise?.site_web}
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleInscription}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 30,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  entrepriseSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  entrepriseInfo: {
    marginLeft: 12,
    flexShrink: 1,
  },
  entrepriseName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  secteur: {
    color: '#888',
  },
  flyerContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  flyer: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  pdfPlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fafafa',
  },
  details: {
    marginBottom: 30,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 2,
  },
  value: {
    fontSize: 15,
    color: '#333',
  },
  button: {
    backgroundColor: '#2ecc71',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default FormationDetails;
