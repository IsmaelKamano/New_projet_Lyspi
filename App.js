import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Écrans et composants
import MenuLateral from './src/navigations/MenuLateral';
import succesStories from './src/Screens/succesStories';
import FlatsStartup from './src/Screens/FlatsStartup';
import StartupDetails from './src/components/StartupDetails';

import EmploiList from './src/Screens/Emploi';
import OffreDetailsEmploi from './src/components/OffreEmploiDetails';

import OffreList from './src/Screens/Stage';
import OffreDetailsStage from './src/components/OffreStageDetails';

import FormationList from './src/Screens/FormationList';
import FormationDetails from './src/components/FormationDetails';
import SuccessStoriesDetails from './src/components/SuccessStoriesDetails';

// Stacks
const Tab = createBottomTabNavigator();
const PlusStack = createNativeStackNavigator();
const StageStack = createNativeStackNavigator();
const EmploiStack = createNativeStackNavigator();
const FormationStack = createNativeStackNavigator();
const StartupStack = createNativeStackNavigator();


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

// Stack Startups (liste + détails)
function StartupStackNavigator() {
  return (
    <StartupStack.Navigator screenOptions={{ headerShown: true }}>
      <StartupStack.Screen
        name="StartupList"
        component={FlatsStartup}
        options={{ title: 'Startups' }}
      />
      <StartupStack.Screen
        name="StartupDetails"
        component={StartupDetails}
        options={{ title: 'Détail Startup' }}
      />
    </StartupStack.Navigator>
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
function EmploiStackNavigator() {
  return (
    <EmploiStack.Navigator screenOptions={{ headerShown: true }}>
      <EmploiStack.Screen
        name="EmploiList"
        component={EmploiList}
        options={{ title: "Offres d'Emploi" }}
      />
      <EmploiStack.Screen
        name="OffreEmploiDetails"
        component={OffreDetailsEmploi}
        options={{ title: "Détail Offre d'Emploi" }}
      />
    </EmploiStack.Navigator>
  );
}

// Stack Formation (liste + détails)
function FormationStackNavigator() {
  return (
    <FormationStack.Navigator screenOptions={{ headerShown: true }}>
      <FormationStack.Screen
        name="FormationList"
        component={FormationList}
        options={{ title: 'Formations' }}
      />
      <FormationStack.Screen
        name="FormationDetails"
        component={FormationDetails}
        options={{ title: 'Détail Formation' }}
      />
    </FormationStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#6200ee',
          tabBarInactiveTintColor: '#999',
          tabBarStyle: { backgroundColor: '#fff' },
        }}
      >
        <Tab.Screen
          name="Startups"
          component={StartupStackNavigator}
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
          component={FormationStackNavigator}
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
          component={PlusStackNavigator}
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
