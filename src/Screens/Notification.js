import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Text, Title, Paragraph, Avatar } from 'react-native-paper';

const notifications = [
  {
    id: '1',
    type: 'emploi',
    title: 'Nouvelle offre d\'emploi',
    message: 'Poste de Développeur Full Stack chez KJS.Group disponible.',
    date: '25 Septembre 2025',
    icon: 'briefcase-outline',
  },
  {
    id: '2',
    type: 'stage',
    title: 'Stage en cybersécurité',
    message: 'Un stage de 6 mois en cybersécurité est ouvert.',
    date: '24 Septembre 2025',
    icon: 'school-outline',
  },
  {
    id: '3',
    type: 'evenement',
    title: 'Événement à venir',
    message: 'Participez au salon de la tech à Paris.',
    date: '23 Septembre 2025',
    icon: 'calendar-outline',
  },
  {
    id: '4',
    type: 'succes',
    title: 'Félicitations !',
    message: 'Vous avez réussi votre certification React Native.',
    date: '22 Septembre 2025',
    icon: 'check-circle-outline',
  },
  {
    id: '5',
    type: 'orientation',
    title: 'Orientation conseillée',
    message: 'Pensez à explorer les métiers de l’IA.',
    date: '21 Septembre 2025',
    icon: 'compass-outline',
  },
];

export default function NotificationsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.title}>Notifications</Title>

      {notifications.map((item) => (
        <Card key={item.id} style={styles.card}>
          <Card.Title
            title={item.title}
            subtitle={item.date}
            left={(props) => <Avatar.Icon {...props} icon={item.icon} />}
          />
          <Card.Content>
            <Paragraph>{item.message}</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    marginBottom: 12,
    backgroundColor: 'white',
    elevation: 2,
  },
});
