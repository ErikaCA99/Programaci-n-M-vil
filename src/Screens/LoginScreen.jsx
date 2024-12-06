import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// Configuración de Firebase (reemplaza estos valores con los tuyos)
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function LoginScreen({ navigation }) {
    // Estados para el correo y contraseña
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            // Llamar a Firebase para iniciar sesión
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            Alert.alert('Éxito', `Bienvenido ${user.email}`);
            navigation.navigate('Welcome'); // Redirigir después de iniciar sesión
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Usuario o contraseña incorrectos. Inténtalo nuevamente.');
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/logo GP.jpg')} 
                style={styles.logo} 
            />
            <Text style={styles.text}>Iniciar Sesión</Text>
            <TextInput
                placeholder="Correo electrónico"
                value={email}
                onChangeText={setEmail} // Actualiza el estado del correo
                style={styles.input}
                keyboardType="email-address" // Teclado para correos electrónicos
                autoCapitalize="none"
            />
            <TextInput
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword} // Actualiza el estado de la contraseña
                style={styles.input}
                secureTextEntry // Entrada segura para contraseñas
            />
            <TouchableOpacity 
                style={styles.btn} 
                onPress={handleLogin} // Llama a la función de inicio de sesión
            >
                <Text style={styles.btnText}>Log in</Text>
            </TouchableOpacity>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#101010',
    },
    text: {
        color: '#ffff',
        fontWeight: 'bold',
        fontSize: 30,
    },
    logo: {
        width: 130,
        height: 130,
        marginBottom: 20,      
    },
    input: {
        height: 40,
        borderColor: '#ffff',
        borderWidth: 1,
        borderRadius: 6,
        marginBottom: 10,
        width: '80%',
        paddingHorizontal: 10,
        color: '#101010',
        backgroundColor: '#ffff',
    },
    btn: {
        width: '65%',
        height: 40,
        margin: 8, 
        backgroundColor: 'cornflowerblue',
        borderRadius: 10, 
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});
