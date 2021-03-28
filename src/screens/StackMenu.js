import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  DetailMenu,
  Cart,
  Checkout,
  Payment,
  EditProfile,
} from '../screens'

const Stack = createStackNavigator()

const StackMenu = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="DetailMenu" component={DetailMenu} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  )
}

export default StackMenu
