// src/navigations/MenuLateral.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profils from '../Screens/Profils';
import Orientation from '../Screens/Orientation';
import Mentorat from '../Screens/Mentorat';
import Evenements from '../Screens/Evenements';
import Notification from '../Screens/Notification';
import Apropos from '../Screens/Apropos';
import NousContacter from '../Screens/NousContacter';

const Drawer = createDrawerNavigator();

export default function MenuLateral() {
  return (
    <Drawer.Navigator initialRouteName="Profils">
      <Drawer.Screen name="Profils" component={Profils} />
      <Drawer.Screen name="Orientation" component={Orientation} />
      <Drawer.Screen name="Mentorat" component={Mentorat} />
      <Drawer.Screen name="Événements" component={Evenements} />
      <Drawer.Screen name="Notification" component={Notification} />
      <Drawer.Screen name="À propos" component={Apropos} />
      <Drawer.Screen name="Nous contacter" component={NousContacter} />
    </Drawer.Navigator>
  );
}
