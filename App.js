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
import Stage from './src/Screens/Stage';
import Emploi from './src/Screens/Emploi';
import Formation from './src/Screens/Formation';

const Tab = createBottomTabNavigator();
const PlusStack = createNativeStackNavigator();

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

// App principale
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
          component={FlatsStartup}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="rocket" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Stage"
          component={Stage}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="school" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Emploi"
          component={Emploi}
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

// Styles (non utilisés pour l'instant, mais conservés)
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
