import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Écrans
import MenuLateral from "./src/navigations/MenuLateral";
import SuccesStories from "./src/Screens/succesStories";
import FlatsStartup from "./src/Screens/FlatsStartup";
import StartupDetails from "./src/components/StartupDetails";
import EmploiList from "./src/Screens/Emploi";
import OffreDetailsEmploi from "./src/components/OffreEmploiDetails";
import OffreList from "./src/Screens/Stage";
import OffreDetailsStage from "./src/components/OffreStageDetails";
import FormationList from "./src/Screens/FormationList";
import FormationDetails from "./src/components/FormationDetails";

// --- Création des navigateurs
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


// 🔹 Stack Startups
function StartupStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StartupList" component={FlatsStartup} />
      <Stack.Screen name="StartupDetails" component={StartupDetails} />
    </Stack.Navigator>
  );
}

// 🔹 Stack Stages
function StageStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StageList" component={OffreList} />
      <Stack.Screen name="DetailsStage" component={OffreDetailsStage} />
    </Stack.Navigator>
  );
}

// 🔹 Stack Emplois
function EmploiStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="EmploiList" component={EmploiList} />
      <Stack.Screen name="OffreEmploiDetails" component={OffreDetailsEmploi} />
    </Stack.Navigator>
  );
}

// 🔹 Stack Formations
function FormationStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FormationList" component={FormationList} />
      <Stack.Screen name="FormationDetails" component={FormationDetails} />
    </Stack.Navigator>
  );
}

// 🔹 Onglets pour Mobile
function MobileTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#6200ee",
        tabBarInactiveTintColor: "#999",
        tabBarStyle: { backgroundColor: "#fff" },
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
        component={SuccesStories}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="airplane" color={color} size={size} />
          ),
        }}
      />
      {/* Drawer intégré dans un onglet */}
      <Tab.Screen
        name="Plus"
        component={MenuLateral}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="dots-horizontal"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// 🔹 Layout Web type LinkedIn
function WebLayout() {
  return (
    <View style={styles.webContainer}>
      {/* Barre latérale gauche */}
      <View style={styles.sidebarLeft}>
        <MenuLateral />
      </View>

      {/* Contenu principal */}
      <View style={styles.mainContent}>
        <StartupStackNavigator />
      </View>

      {/* Barre droite */}
      <View style={styles.sidebarRight}>
        <SuccesStories />
      </View>
    </View>
  );
}

// 🔹 App principale (un seul container)
export default function App() {
  const isWeb = Platform.OS === "web";

  return (
    <NavigationContainer>
      {isWeb ? <WebLayout /> : <MobileTabs />}
    </NavigationContainer>
  );
}

// --- Styles ---
const styles = StyleSheet.create({
  webContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f4f4f4",
  },
  sidebarLeft: {
    width: "20%",
    backgroundColor: "#fff",
    borderRightWidth: 1,
    borderRightColor: "#ddd",
  },
  mainContent: {
    width: "60%",
    backgroundColor: "#fff",
    borderRightWidth: 1,
    borderRightColor: "#ddd",
    padding: 20,
  },
  sidebarRight: {
    width: "20%",
    backgroundColor: "#fff",
  },
});
