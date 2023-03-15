import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import MyDrawer from './MyDrawer';
import AddStudent from '../screens/AddStudent';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="drawer" component={MyDrawer} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
        <Stack.Screen name="AddStudent" component={AddStudent} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router

const styles = StyleSheet.create({})