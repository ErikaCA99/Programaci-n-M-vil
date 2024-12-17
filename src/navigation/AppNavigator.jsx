import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import ExerciseDetails from '../Screens/ExercisesDetails'; 
// Importar las pantallas
import Welcome from '../Screens/Welcome'; // Nueva pantalla de bienvenida
import Home from '../Screens/Home';
import GuiaMaquinas from '../Screens/GuiaMaquinas';
import Horarios from '../Screens/Horarios';
import Perfil from '../Screens/Perfil';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Inicio':
                            iconName = 'home-outline';
                            break;
                        case 'Guía de Maquinas':
                            iconName = 'fitness-outline';
                            break;
                        case 'Horarios':
                            iconName = 'calendar-outline';
                            break;
                        case 'Perfil':
                            iconName = 'person-outline';
                            break;
                        default:
                            iconName = 'help-circle-outline';
                            break;
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Inicio" component={Home} />
            <Tab.Screen name="Guía de Maquinas" component={GuiaMaquinas} />
            <Tab.Screen name="Horarios" component={Horarios} />
            <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
    );
};

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Bienvenida" screenOptions={{ headerShown: false }}>
                {/* Pantalla de bienvenida */}
                <Stack.Screen name="Bienvenida" component={Welcome} />
                {/* Navegación principal */}
                <Stack.Screen name="Principal" component={TabNavigation} />
                <Stack.Screen name="ExerciseDetails" component={ExerciseDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;