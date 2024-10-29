import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RegistroUsuario from '../Screens/RegistroUsuario';
import GuiaMaquina from '../Screens/GuiaMaquinas';
import FiltroEjercicio from '../Screens/FiltroEjercicio';
import VideoInstructivo from '../Screens/VideosInstructivos';
import Image from '../Screens/Imagen';
import Recomendaciones from '../Screens/ExerciseRecommendations';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="RegistroUsuario">
                <Stack.Screen name="RegistroUsuario" component={UserRegistration} options={{ title: 'Registro de Usuario' }} />
                <Stack.Screen name="GuiaMaquina" component={MachineGuide} options={{ title: 'Guía de Uso de Máquinas' }} />
                <Stack.Screen name="FiltroEjercicio" component={ExerciseFilter} options={{ title: 'Filtrar Ejercicios' }} />
                <Stack.Screen name="VideoInstructivo" component={VideoInstructions} options={{ title: 'Videos Instructivos' }} />
                <Stack.Screen name="Image" component={ImageExample} options={{ title: 'Ejemplo de Uso Correcto' }} />
                <Stack.Screen name="Recommendaciones" component={Recommendations} options={{ title: 'Recomendaciones de Series' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
