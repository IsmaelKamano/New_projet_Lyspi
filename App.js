import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Dimensions, FlatList, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Header from './src/components/Header'
import Inscription from './src/Screens/Inscriptions';

import MenuLateral from './src/Screens/MenuLateral';
import ComposantStartup from './src/components/ComposantStartup';
import succesStories from './src/Screens/succesStories';
import StartupScreen from './src/Screens/StartupScreen';
import Formation from './src/Screens/FormationScreen';
import startupData_2 from './src/utils/donnees/startup.data.2';
// import offre from './src/Screens/StagesScreen';


const PlusStack = createNativeStackNavigator();

const FlatsStartup = () => {
  return (
    <View>
      {/* <FlatList
        data={startupData_2}
        keyExtractor={(item) => item.id}
          renderItem={
            (item) => {
              <ComposantStartup
                nomStartup={item.nomStartup}
                imageProfil={item.imageProfil}
                imageStartup={item.imageStartup}
                descriptions={item.descriptions}
              />
            }
        }
      /> */}
      {
        startupData_2.map((item, index)=>{
          return (
            <ScrollView 
              style={{flex: 1}}
              key={item.id}
            >
                <ComposantStartup
                    nomStartup={item.nomStartup}
                    imageProfil={item.imageProfil}
                    imageStartup={item.imageStartup}
                    descriptions={item.descriptions}
                  />
            </ScrollView>
          )
        })
      }
    </View>
  )
}

function PlusStackNavigator() {
  return (
    <PlusStack.Navigator>
      <PlusStack.Screen
        name="PlusHome"
        component={MenuLateral}
        options={{ title: 'Plus', headerShown: false }}
      />
      {/* Ajoute les autres écrans comme Profil, Mentorat, etc. ici si besoin */}
    </PlusStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

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
          children= {FlatsStartup}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="rocket" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Stage"
          children={ComposantStartup}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="school" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Emploi"
          children={StartupScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="briefcase" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Formation"
          children={ComposantStartup}
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
