import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

const StartupDetails = ({ route }) => {
  const { startup } = route.params;

  if (!startup) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Aucune startup sélectionnée.</Text>
      </View>
    );
  }

  const renderImage = (image) => {
    if (!image) return null;
    if (typeof image === 'number') return image;
    return { uri: image };
  };

  const handleSiteWeb = () => {
    if (startup.site_web) {
      Linking.openURL(startup.site_web);
    }
  };

  const handleFichier = () => {
    if (startup.fichier_url) {
      Linking.openURL(startup.fichier_url);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{startup.nom}</Text>

      {startup.imageProfil && (
        <Image
          source={renderImage(startup.imageProfil)}
          style={styles.profileImage}
          resizeMode="contain"
        />
      )}

      {startup.imageStartup && (
        <Image
          source={renderImage(startup.imageStartup)}
          style={styles.startupImage}
          resizeMode="contain"
        />
      )}

      <View style={styles.infoSection}>
        <Text style={styles.label}>Date de création :</Text>
        <Text style={styles.value}>{startup.date_creation}</Text>

        <Text style={styles.label}>Description :</Text>
        <Text style={styles.value}>{startup.description}</Text>

        <Text style={styles.label}>Problématique :</Text>
        <Text style={styles.value}>{startup.problematique}</Text>

        <Text style={styles.label}>Solution :</Text>
        <Text style={styles.value}>{startup.solution}</Text>

        <Text style={styles.label}>Site web :</Text>
        <TouchableOpacity onPress={handleSiteWeb}>
          <Text style={[styles.value, styles.link]}>{startup.site_web}</Text>
        </TouchableOpacity>

        {startup.fichier_url && (
          <>
            <Text style={styles.label}>Document :</Text>
            <TouchableOpacity onPress={handleFichier}>
              <Text style={[styles.value, styles.link]}>Voir le document</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default StartupDetails;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    paddingBottom: 30,
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
    marginBottom: 15,
    textAlign: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    alignSelf: 'center',
  },
  startupImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  infoSection: {
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  value: {
    fontSize: 15,
    marginTop: 4,
  },
  link: {
    color: '#3498db',
    textDecorationLine: 'underline',
  },
});
