import React from 'react'
import { Provider } from 'react-native-paper'
import { theme } from './src/core/theme'
import {
<<<<<<< HEAD
  DrawerMenu,
  StackMenu
=======
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  DetailMenu,
  Cart,
  Checkout,
  Payment,
  Profile
>>>>>>> 26acde358bb91f0d7664b41e0486a28b27060cdb
} from './src/screens'
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
<<<<<<< HEAD
        <DrawerMenu />
=======
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="DetailMenu" component={DetailMenu} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Profile" component={Profile} />
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
>>>>>>> 26acde358bb91f0d7664b41e0486a28b27060cdb
      </NavigationContainer>
    </Provider>
  )
}

export default App
