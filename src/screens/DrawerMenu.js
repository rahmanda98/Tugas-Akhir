import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import StackMenu from './StackMenu'
import Profile from './Profile'
import LoginScreen from './LoginScreen'

const Drawer = createDrawerNavigator()

const DrawerMenu = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={StackMenu} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Logout" component={LoginScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerMenu
