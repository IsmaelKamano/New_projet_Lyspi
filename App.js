import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Import des écrans et composants
import MenuLateral from './src/navigations/MenuLateral';
import succesStories from './src/Screens/succesStories';
import FlatsStartup from './src/components/FlatsStartup';
import EmploiList from './src/Screens/Emploi'; // Liste des offres d'emploi
import Formation from './src/Screens/Formation';
import OffreDetailsStage from './src/components/OffreStageDetails';  // Détails offres de stage
import OffreDetailsEmploi from './src/components/OffreEmploiDetails'; // Détails offres d'emploi

// Import de la liste des offres de stage
import OffreList from './src/Screens/Stage';

const Tab = createBottomTabNavigator();
const PlusStack = createNativeStackNavigator();
const StageStack = createNativeStackNavigator();
const EmploiStack = createNativeStackNavigator();

// Stack pour la section "Plus"
function PlusStackNavigator() {
  return (
    <PlusStack.Navigator>
      <PlusStack.Screen
        name="PlusHome"
        component={MenuLateral}
        options={{ title: 'Plus', headerShown: false }}
      />
    </PlusStack.Navigator>
  );
}

// Stack Stage (liste + détails)
function StageStackNavigator() {
  return (
    <StageStack.Navigator screenOptions={{ headerShown: true }}>
      <StageStack.Screen
        name="StageList"
        component={OffreList}
        options={{ title: 'Offres de Stage' }}
      />
      <StageStack.Screen
        name="DetailsStage"
        component={OffreDetailsStage}
        options={{ title: 'Détail Offre de Stage' }}
      />
    </StageStack.Navigator>
  );
}

// Stack Emploi (liste + détails)
// 👉 Changement du nom "DetailsEmploi" en "OffreEmploiDetails" pour correspondre à la navigation
function EmploiStackNavigator() {
  return (
    <EmploiStack.Navigator screenOptions={{ headerShown: true }}>
      <EmploiStack.Screen
        name="EmploiList"
        component={EmploiList}
        options={{ title: 'Offres d\'Emploi' }}
      />
      <EmploiStack.Screen
        name="OffreEmploiDetails"          // <-- ici le nom doit correspondre à la navigation dans Emploi.js
        component={OffreDetailsEmploi}
        options={{ title: 'Détail Offre d\'Emploi' }}
      />
    </EmploiStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false, // header caché sur les tabs, visible dans stacks
          tabBarActiveTintColor: '#6200ee',
          tabBarInactiveTintColor: '#999',
          tabBarStyle: { backgroundColor: '#fff' },
        }}
      >
        <Tab.Screen
          name="Startups"
          component={FlatsStartup}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="rocket" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Stage"
          component={StageStackNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="school" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Emploi"
          component={EmploiStackNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="briefcase" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Formation"
          component={Formation}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="book-open" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Success"
          component={succesStories}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="airplane" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Plus"
          component={MenuLateral}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="dots-horizontal" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
  },
});
