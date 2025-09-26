import * as React from 'react';
import { StyleSheet, View, Linking, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Button, IconButton } from 'react-native-paper';

export default function ContactScreen() {
  const sendEmail = () => {
    Linking.openURL('mailto:contact@kjs.group');
  };

  const callPhone = () => {
    Linking.openURL('tel:+33612345678'); // Remplace avec le vrai numéro
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Nous contacter</Title>

          <Paragraph style={styles.label}>📍 Adresse :</Paragraph>
          <Paragraph style={styles.info}>
            123 Rue de l'Innovation, 75000 Paris, France
          </Paragraph>

          <Paragraph style={styles.label}>📧 E-mail :</Paragraph>
          <Paragraph style={styles.info}>contact@kjs.group</Paragraph>

          <Paragraph style={styles.label}>📞 Téléphone :</Paragraph>
          <Paragraph style={styles.info}>+33 6 12 34 56 78</Paragraph>

          <View style={styles.buttonContainer}>
            <Button icon="email" mode="contained" onPress={sendEmail} style={styles.button}>
              Envoyer un e-mail
            </Button>
            <Button icon="phone" mode="outlined" onPress={callPhone} style={styles.button}>
              Appeler
            </Button>
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  label: {
    fontWeight: '600',
    marginTop: 10,
    color: '#333',
  },
  info: {
    marginBottom: 10,
    color: '#555',
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'column',
    gap: 10,
  },
  button: {
    marginVertical: 5,
  },
});
