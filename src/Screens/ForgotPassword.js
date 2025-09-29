import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import couleur from '../utils/couleurs/couleurs';

export default function ForgotPassword() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mot de passe oublié</Text>
      <Text style={styles.text}>
        Entrez votre email pour réinitialiser votre mot de passe.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={() => {
          alert('Un lien de réinitialisation a été envoyé à votre email.');
          navigation.navigate("Acceuil"); // retour au login
        }}
      >
        <Text style={styles.buttonText}>Envoyer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', padding:20 },
  title: { fontSize:24, fontWeight:'bold', textAlign:'center', marginBottom:20 },
  text: { textAlign:'center', marginBottom:15, color:'#555' },
  input: { borderWidth:1, borderColor:'#ccc', borderRadius:8, padding:10, marginBottom:15 },
  button: { backgroundColor: couleur.noirParticulier, padding:15, borderRadius:8, marginBottom:10 },
  buttonText: { color:'#fff', textAlign:'center', fontWeight:'bold' },
});
