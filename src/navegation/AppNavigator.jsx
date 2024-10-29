import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FiltroEjercicio from '../Screens/FiltroEjercicio';
import ExerciseResults from '../Screens/ExerciseResults';

const Stack = createStackNavigator();

const AppNavigation = () => (
    <Stack.Navigator>
        <Stack.Screen name="FiltroEjercicio" component={FiltroEjercicio} />
        <Stack.Screen name="ExerciseResults" component={ExerciseResults} />
    </Stack.Navigator>
);

export default AppNavigation;