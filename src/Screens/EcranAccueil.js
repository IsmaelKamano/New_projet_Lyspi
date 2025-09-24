import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  ImageBackground
} from 'react-native';
import { Card } from 'react-native-paper';
import CustomButton from '../components/CustomButton';
import { images } from '../assets';
import styles from '../styles/EcranAccueil_style';

export default function EcranAccueil({ navigation }) {
  return (
    <ImageBackground
      source={images.background}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <Card style={styles.card}>
          <Text style={styles.header}>
            Bienvenue sur <Text style={styles.lyspi}>LYSPI</Text>
          </Text>

          <Image source={images.uncLogo} style={styles.image} />

          <View style={styles.row}>
            <CustomButton
              title="Se connecter"
              onPress={() => navigation.navigate('Etudiant')}
              style={styles.button}
              textStyle={styles.buttonText}
            />
            <CustomButton
              title="Créer un compte"
              onPress={() => navigation.navigate('CompteEtudiant')}
              style={[styles.button, styles.secondaryButton]}
              textStyle={styles.buttonText}
            />
          </View>

          <Text style={styles.slogan}>
            Avec LYSPI: Un Étudiant, Un Emploi!
          </Text>
        </Card>
      </SafeAreaView>
    </ImageBackground>
  );
}
