import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './AllTabs'; // Assure-toi que le fichier exporte un composant nommé BottomTabs


const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AllTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
}
