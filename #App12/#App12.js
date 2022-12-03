import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Home from './src/pages/home';
import Pessoal from './src/pages/pessoal';
import Experiencias from './src/pages/experiencia';

import CustomDrawer from './src/components/CustomDrawer';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={CustomDrawer}
      >
        <Drawer.Screen 
          name="Home" 
          component={Home} />
        <Drawer.Screen
          name="Pessoal"
          component={Pessoal}
        />
        <Drawer.Screen
          name="Experiencias"
          component={Experiencias}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
