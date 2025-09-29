import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Connexion</Text>

      {/* Bouton Se connecter → redirige vers les tabs */}
      <TouchableOpacity onPress={() => navigation.replace('MainTabs')}>
        <Text style={{ color: 'blue' }}>Se connecter</Text>
      </TouchableOpacity>

      {/* Créer un compte */}
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={{ color: 'green' }}>Créer un compte</Text>
      </TouchableOpacity>

      {/* Mot de passe oublié */}
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={{ color: 'red' }}>Mot de passe oublié ?</Text>
      </TouchableOpacity>
    </View>
  );
}
