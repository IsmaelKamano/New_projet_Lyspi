import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { images } from '../assets';
import CustomButton from './CustomButton';
import styles from '../styles/ecranAccueil.styles';

export default function WelcomeCard({ onLogin, onRegister }) {
  return (
    <Card style={styles.card}>
      <Text style={styles.header}>
        Bienvenue sur <Text style={styles.lyspi}>LYSPI</Text>
      </Text>

      <Image source={images.uncLogo} style={styles.image} />

      <View style={styles.row}>
        <CustomButton
          title="Se connecter"
          onPress={onLogin}
          style={styles.button}
          textStyle={styles.buttonText}
        />
        <CustomButton
          title="Créer un compte"
          onPress={onRegister}
          style={[styles.button, styles.secondaryButton]}
          textStyle={styles.buttonText}
        />
      </View>

      <Text style={styles.slogan}>
        Avec LYSPI: Un Étudiant, Un Emploi!
      </Text>
    </Card>
  );
}
