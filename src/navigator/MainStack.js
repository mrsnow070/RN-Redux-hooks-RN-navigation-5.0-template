import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Test from '../components/Test';
import Counter from '../components/Counter';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{title: 'Overview'}}
        component={Test}
      />

      <Stack.Screen
        name="Counter"
        options={({route}) => ({title: route.params.title})}
        component={Counter}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
