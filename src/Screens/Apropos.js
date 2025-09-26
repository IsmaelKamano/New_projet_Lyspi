import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Title, Paragraph, Card } from 'react-native-paper';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>À propos de KJS.Group</Title>
          <Paragraph style={styles.paragraph}>
            KJS.Group est une entreprise technologique spécialisée dans la
            conception de logiciels, le développement d’outils numériques
            sur mesure, la formation informatique et l’intégration de solutions réseau.
          </Paragraph>
          <Paragraph style={styles.paragraph}>
            Notre mission est de soutenir la transformation digitale des entreprises
            en proposant des solutions innovantes, fiables et adaptées à leurs besoins.
          </Paragraph>
          <Paragraph style={styles.paragraph}>
            Grâce à notre expertise, nous accompagnons nos clients dans chaque
            étape de leurs projets, de l’idée à la mise en œuvre.
          </Paragraph>
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
    marginBottom: 12,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 22,
    color: '#333',
  },
});
