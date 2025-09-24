import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Acceuil from "./Acceuil";
import MessageAcceuil from "../components/MessageAcceuil";
import ChampFormulaire from "../components/ChampFormulaire";
import BoutonConnexion from "../components/BoutonConnexion";
import couleur from "../utils/couleurs/couleurs";

const Stack = createNativeStackNavigator();

// ÉTAPE 1 : Saisie de l'email
const EmailScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <MessageAcceuil 
        titre="Réinitialisation du mot de passe" 
        sousTitre="Entrez votre adresse email pour recevoir un code de vérification"
      />
      
      <View style={styles.formContainer}>
        <ChampFormulaire
          placeholder="Adresse email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={""} // Vous devrez gérer l'état ici
          onChangeText={() => {}} // Fonction pour gérer le texte
        />
        
        <BoutonConnexion
          titre="Envoyer le code"
          onPress={() => navigation.navigate('VerificationCode')}
          couleur={couleur.primary}
        />
      </View>
    </SafeAreaView>
  );
};

// ÉTAPE 2 : Vérification du code
const VerificationCode = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <MessageAcceuil 
        titre="Vérification du code" 
        sousTitre="Entrez le code de 6 chiffres envoyé à votre email"
      />
      
      <View style={styles.formContainer}>
        <ChampFormulaire
          placeholder="Code de vérification"
          keyboardType="number-pad"
          maxLength={6}
          value={""} // Gérer l'état du code
          onChangeText={() => {}} // Fonction pour gérer le code
        />
        
        <BoutonConnexion
          titre="Vérifier le code"
          onPress={() => navigation.navigate('NouveauMotDePasse')}
          couleur={couleur.primary}
        />
        
        <Text style={styles.resendText}>
          N'avez-vous pas reçu le code ?{' '}
          <Text style={styles.resendLink} onPress={() => {}}>
            Renvoyer
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

// ÉTAPE 3 : Nouveau mot de passe
const NouveauMotDePasse = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <MessageAcceuil 
        titre="Nouveau mot de passe" 
        sousTitre="Choisissez un nouveau mot de passe sécurisé"
      />
      
      <View style={styles.formContainer}>
        <ChampFormulaire
          placeholder="Nouveau mot de passe"
          secureTextEntry={true}
          value={""} // Gérer l'état du mot de passe
          onChangeText={() => {}} // Fonction pour gérer le mot de passe
        />
        
        <ChampFormulaire
          placeholder="Confirmer le mot de passe"
          secureTextEntry={true}
          value={""} // Gérer l'état de confirmation
          onChangeText={() => {}} // Fonction pour gérer la confirmation
        />
        
        <BoutonConnexion
          titre="Mettre à jour le mot de passe"
          onPress={() => {
            // Logique pour mettre à jour le mot de passe
            navigation.navigate('Acceuil'); // Rediriger vers l'accueil
          }}
          couleur={couleur.primary}
        />
      </View>
    </SafeAreaView>
  );
};

// Écran d'annulation
const Annulation = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Annuler la réinitialisation</Text>
      <Text style={styles.description}>
        Êtes-vous sûr de vouloir annuler la réinitialisation de votre mot de passe ?
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Retour"
          onPress={() => {/* Naviguer vers l'écran précédent */}}
          color={couleur.secondary}
        />
        <Button
          title="Annuler"
          onPress={() => {/* Naviguer vers l'accueil */}}
          color="red"
        />
      </View>
    </SafeAreaView>
  );
};

const ReinitialisationMDP = () => {
  return (
    <Stack.Navigator
      initialRouteName="Email"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen 
        name="Email" 
        component={EmailScreen}
        options={{ title: 'Réinitialisation' }}
      />
      <Stack.Screen 
        name="VerificationCode" 
        component={VerificationCode}
        options={{ title: 'Vérification' }}
      />
      <Stack.Screen 
        name="NouveauMotDePasse" 
        component={NouveauMotDePasse}
        options={{ title: 'Nouveau mot de passe' }}
      />
      <Stack.Screen 
        name="Annulation" 
        component={Annulation}
        options={{ title: 'Annulation' }}
      />
    </Stack.Navigator>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: couleur.background,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    color: couleur.text,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 40,
    marginTop: 20,
    color: couleur.textSecondary,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
    paddingHorizontal: 20,
  },
  resendText: {
    textAlign: 'center',
    marginTop: 20,
    color: couleur.textSecondary,
    fontSize: 14,
  },
  resendLink: {
    color: couleur.primary,
    fontWeight: 'bold',
  },
});

export default ReinitialisationMDP;