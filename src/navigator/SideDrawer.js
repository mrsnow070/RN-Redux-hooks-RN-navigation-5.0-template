import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Counter from '../components/Counter';
import MainStack from './MainStack';

const Drawer = createDrawerNavigator();

const SideDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={MainStack} />
      <Drawer.Screen name="Counter" component={Counter} />
    </Drawer.Navigator>
  );
};

export default SideDrawer;
