import * as React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const events = [
  {
    id: '1',
    title: 'Salon de l’emploi – Paris',
    description: 'Rencontrez des entreprises et trouvez un stage ou emploi.',
    date: '20 Septembre 2025',
    image: 'https://picsum.photos/600/300?random=1',
  },
  {
    id: '2',
    title: 'Webinaire : Créer sa startup',
    description: 'Apprenez à lancer votre startup avec des experts.',
    date: '22 Septembre 2025',
    image: 'https://picsum.photos/600/300?random=2',
  },
  {
    id: '3',
    title: 'Atelier CV & Lettre de motivation',
    description: 'Améliorez vos candidatures avec des conseils pro.',
    date: '25 Septembre 2025',
    image: 'https://picsum.photos/600/300?random=3',
  },
];

export default function App() {
  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: item.image }} />
      <Card.Content>
        <Title>{item.title}</Title>
        <Paragraph>{item.description}</Paragraph>
        <Text style={styles.date}>{item.date}</Text>
      </Card.Content>
      <Card.Actions style={styles.actions}>
        <Button compact mode="text" onPress={() => console.log(`Like: ${item.id}`)}>
          👍 Like
        </Button>
        <Button compact mode="text" onPress={() => console.log(`Commenter: ${item.id}`)}>
          💬 Commenter
        </Button>
        <Button compact mode="text" onPress={() => console.log(`Participer: ${item.id}`)}>
          ✅ Participer
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Événements à venir</Text>
      <FlatList
        data={events}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    paddingHorizontal: 16,
  },
  card: {
    marginBottom: 16,
  },
  date: {
    marginTop: 8,
    fontStyle: 'italic',
    color: '#555',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
});
