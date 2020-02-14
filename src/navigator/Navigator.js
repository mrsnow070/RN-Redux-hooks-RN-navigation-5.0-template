import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SideDrawer from './SideDrawer';

export default () => {
  return (
    <NavigationContainer>
      <SideDrawer />
    </NavigationContainer>
  );
};
