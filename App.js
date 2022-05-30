import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import Dashboard from './fetch';
import Login from './Login';
import {
  View,
  Text
 } from 'react-native';

 const Stack = createStackNavigator();

function App (){
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Fetch" component={Dashboard} />
        
      </Stack.Navigator>
      </NavigationContainer>
    );
  }


 export default App;