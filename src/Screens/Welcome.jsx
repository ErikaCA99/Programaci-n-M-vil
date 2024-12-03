import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: 'https://i.pinimg.com/736x/99/b9/af/99b9af0403cd569dbb9cc451c32e2b35.jpg' }} // Nueva URL de la imagen
            />
            <Text style={styles.title}>Wherever You Are Health Is Number One</Text>
            <Text style={styles.subtitle}>There is no instant way to a healthy life</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('SeleccionGenero')}
            >
                <Text style={styles.buttonText}>Empezar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Welcome;
