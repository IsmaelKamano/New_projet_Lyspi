// src/navigations/AppNavigator.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EcranAccueil from '../Screens/EcranAccueil';
// import Etudiant from '../screens/Etudiant'; // à créer si pas encore fait
// import CompteEtudiant from '../screens/CompteEtudiant'; // à créer

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Accueil">
        <Stack.Screen name="Accueil" component={EcranAccueil} />
        {/* <Stack.Screen name="Etudiant" component={Etudiant} />
        <Stack.Screen name="CompteEtudiant" component={CompteEtudiant} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
