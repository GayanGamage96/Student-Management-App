import { View, Text } from 'react-native'
import React from 'react'
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import Router from './src/Router/Router'
import MyDrawer from './src/Router/MyDrawer'
import { NavigationContainer } from '@react-navigation/native'
import AddStudent from './src/screens/AddStudent'
import FlatListDemo from './src/screens/FlatListDemo'
import PaperModal from './src/components/PaperModal'
import Home from './src/screens/Home'



export default function App() {
  return (
  
    <Router />
 
  
  )
}