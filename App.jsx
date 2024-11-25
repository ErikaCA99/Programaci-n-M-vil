import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import LoginScreen from './src/Screens/LoginScreen';
import Welcome from './src/Screens/Welcome';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Oculta el encabezado en la pantalla de inicio de sesión
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }} // Oculta el encabezado en la pantalla Welcome
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} // Oculta el encabezado en la pantalla de inicio
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
