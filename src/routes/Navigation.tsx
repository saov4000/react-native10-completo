import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Register } from '../screens/Register';
import { Edit } from '../screens/Edit';

const Stack = createStackNavigator();

export function Navigation() {
  return ( 
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='home' component={Home}></Stack.Screen>
        <Stack.Screen name='register' component={Register}></Stack.Screen>
        <Stack.Screen name='edit' component={Edit}></Stack.Screen>    
    </Stack.Navigator>
  );
}