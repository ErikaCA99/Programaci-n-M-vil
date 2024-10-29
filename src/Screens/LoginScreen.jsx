import * as React from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';

function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/logo GP.jpg')} 
                style={styles.logo} 
            />
            <Text style={styles.text}>Iniciar Sesión</Text>
            <TextInput
                placeholder="Username"
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.input}
            />
            <TouchableOpacity 
                style={styles.btn} 
                onPress={() => navigation.navigate('Home')}
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
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
    },
    logo: {
        width: 130,
        height: 130,
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        width: '80%',
        paddingHorizontal: 10,
    },
    btn: {
        width: '65%', // Ajustado para que sea más responsivo
        height: 40, // Cambiado a 40 para mayor uniformidad
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
