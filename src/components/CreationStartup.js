import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';

const CreateStartup = ({ navigation }) => {
  const [nom, setNom] = useState('');
  const [description, setDescription] = useState('');
  const [dateCreation, setDateCreation] = useState('');
  const [problematique, setProblematique] = useState('');
  const [solution, setSolution] = useState('');
  const [siteWeb, setSiteWeb] = useState('');
  const [fichierUrl, setFichierUrl] = useState('');

  const handleSubmit = () => {
    if (!nom || !description) {
      Alert.alert('Erreur', 'Veuillez remplir au moins le nom et la description.');
      return;
    }
    // Ici tu peux appeler une API, ou ajouter la startup dans un state global/context, etc.

    Alert.alert(
      'Succès',
      `Startup "${nom}" créée avec succès !`,
      [{ text: 'OK', onPress: () => navigation.goBack() }]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Créer une nouvelle startup</Text>

      <Text style={styles.label}>Nom</Text>
      <TextInput
        style={styles.input}
        value={nom}
        onChangeText={setNom}
        placeholder="Nom de la startup"
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        value={description}
        onChangeText={setDescription}
        placeholder="Description"
        multiline
      />

      <Text style={styles.label}>Date de création (YYYY-MM-DD)</Text>
      <TextInput
        style={styles.input}
        value={dateCreation}
        onChangeText={setDateCreation}
        placeholder="2025-01-01"
      />

      <Text style={styles.label}>Problématique</Text>
      <TextInput
        style={styles.input}
        value={problematique}
        onChangeText={setProblematique}
        placeholder="Problématique"
      />

      <Text style={styles.label}>Solution</Text>
      <TextInput
        style={styles.input}
        value={solution}
        onChangeText={setSolution}
        placeholder="Solution"
      />

      <Text style={styles.label}>Site web</Text>
      <TextInput
        style={styles.input}
        value={siteWeb}
        onChangeText={setSiteWeb}
        placeholder="https://exemple.com"
      />

      <Text style={styles.label}>URL du fichier (PDF, image)</Text>
      <TextInput
        style={styles.input}
        value={fichierUrl}
        onChangeText={setFichierUrl}
        placeholder="https://exemple.com/fichier.pdf"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Envoyer</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CreateStartup;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    marginTop: 30,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
