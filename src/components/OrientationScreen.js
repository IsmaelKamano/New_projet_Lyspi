// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OrientationHome from './OrientationHome';
import CollegePage from './CollegePage';
import LyceePage from './LyceePage';
import UniversitePage from './UniversitePage';
import InformatiqueUniversitesPage from './InformatiqueUniversitesPage';


const Stack = createNativeStackNavigator();
export default function OrientationScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OrientationHome" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="OrientationHome" component={OrientationHome} options={{ title: "Orientation Guinée" }} />
        <Stack.Screen name="CollegePage" component={CollegePage} options={{ title: "Orientation Collège" }} />
        <Stack.Screen name="LyceePage" component={LyceePage} options={{ title: "Orientation Lycée" }} />
        <Stack.Screen name="UniversitePage" component={UniversitePage} options={{ title: "Orientation Université" }} />
        <Stack.Screen name="InformatiqueUniversites" component={InformatiqueUniversitesPage} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
