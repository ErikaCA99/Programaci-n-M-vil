import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BarraDeNavegacion from './BarraDeNavegacion'; // Importa la barra de navegación

const Stack = createStackNavigator();

const AppNavigation = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={BarraDeNavegacion} />
    </Stack.Navigator>
);

export default AppNavigation;