import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Linking } from 'react-native';
import { Button } from 'react-native-paper';

const domainesMetiersEntreprises = [
  {
    domaine: 'Informatique',
    logo: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=60',
    metiers: [
      'Développeur logiciel',
      'Administrateur réseau',
      'Data scientist',
      'Chef de projet informatique',
    ],
    entreprises: [
      {
        name: 'Google',
        link: 'https://careers.google.com',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      },
      {
        name: 'Microsoft',
        link: 'https://careers.microsoft.com',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      },
      {
        name: 'IBM',
        link: 'https://www.ibm.com/careers',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
      },
    ],
  },
  {
    domaine: 'Marketing',
    logo: 'https://cdn-icons-png.flaticon.com/512/3062/3062634.png',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60',
    metiers: [
      'Chargé de communication',
      'Chef de produit',
      'Community manager',
      'Responsable marketing digital',
    ],
    entreprises: [
      {
        name: 'Publicis Groupe',
        link: 'https://www.publicisgroupe.com/en/careers',
        logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/3/3f/Publicis_Logo.svg/1200px-Publicis_Logo.svg.png',
      },
      {
        name: 'Havas',
        link: 'https://www.havasgroup.com/careers/',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Havas_Group_Logo.svg',
      },
    ],
  },
  {
    domaine: 'Génie Civil',
    logo: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png',
    image:
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=60',
    metiers: [
      'Ingénieur travaux',
      'Conducteur de chantier',
      'Architecte',
      'Technicien bureau d’études',
    ],
    entreprises: [
      {
        name: 'Vinci',
        link: 'https://www.vinci.com/vinci.nsf/en/job_offers.htm',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Vinci_logo.svg',
      },
      {
        name: 'Bouygues Construction',
        link: 'https://www.bouygues-construction.com/en/careers',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Bouygues_Construction_logo.svg',
      },
    ],
  },
];

export default function OrientationMetiersPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>🔍 Orientation métiers et entreprises</Text>

      {domainesMetiersEntreprises.map((item, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.headerCard}>
            <Image source={{ uri: item.logo }} style={styles.logo} />
            <View style={styles.domaineContainer}>
              <Text style={styles.domaine}>{item.domaine}</Text>
              <View style={styles.underline} />
            </View>
          </View>

          <Image source={{ uri: item.image }} style={styles.image} />

          <Text style={styles.subHeader}>Métiers clés :</Text>
          {item.metiers.map((metier, i) => (
            <Text key={i} style={styles.textItem}>• {metier}</Text>
          ))}

          <Text style={[styles.subHeader, { marginTop: 18 }]}>Entreprises :</Text>

          <View style={styles.entreprisesContainer}>
            {item.entreprises.map((entreprise, i) => (
              <Button
                key={i}
                mode="contained-tonal"
                onPress={() => Linking.openURL(entreprise.link)}
                labelStyle={styles.buttonLabel}
                style={styles.button}
                contentStyle={{ flexDirection: 'row', justifyContent: 'flex-start', paddingVertical: 6 }}
              >
                <Image source={{ uri: entreprise.logo }} style={styles.entrepriseLogo} />
                <Text style={{ marginLeft: 10 }}>{entreprise.name}</Text>
              </Button>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#e6f0ff',
    flexGrow: 1,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1a3d8f',
    marginBottom: 30,
    textShadowColor: 'rgba(0,0,0,0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 20,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  headerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  logo: {
    width: 44,
    height: 44,
    marginRight: 14,
    resizeMode: 'contain',
  },
  domaineContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  domaine: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1a3d8f',
  },
  underline: {
    marginTop: 4,
    height: 3,
    width: 60,
    backgroundColor: '#2e5bff',
    borderRadius: 2,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 14,
    marginBottom: 18,
    shadowColor: '#2e5bff',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  subHeader: {
    fontSize: 17,
    fontWeight: '600',
    color: '#2e5bff',
    marginBottom: 10,
  },
  textItem: {
    fontSize: 16,
    color: '#444',
    marginLeft: 14,
    marginBottom: 6,
    lineHeight: 22,
  },
  entreprisesContainer: {
    alignItems: 'center', // centre horizontalement tous les boutons
  },
  button: {
    marginVertical: 6,
    borderRadius: 8,
    borderWidth: 0,
    alignSelf: 'center', // centre chaque bouton horizontalement
    width: '80%', // tu peux ajuster la largeur des boutons pour un rendu équilibré
  },
  buttonLabel: {
    color: '#2e5bff',
    fontWeight: '600',
    fontSize: 15,
  },
  entrepriseLogo: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    borderRadius: 4,
  },
});
