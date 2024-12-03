import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SeleccionDeGenero = ({ navigation }) => {
    const [gender, setGender] = useState(null);

    const handleNext = () => {
        if (gender) {
            navigation.navigate('ObjectiveSelection', { gender });
        } else {
            alert('Por favor selecciona un género.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>¿Cuál es tu género?</Text>
            <TouchableOpacity
                style={[styles.button, gender === 'male' && styles.selected]}
                onPress={() => setGender('male')}
            >
                <Text style={styles.buttonText}>Hombre</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, gender === 'female' && styles.selected]}
                onPress={() => setGender('female')}
            >
                <Text style={styles.buttonText}>Mujer</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.nextButton}
                onPress={() => navigation.navigate('SeleccionObjetivo')}
            >
                <Text style={styles.nextButtonText}>Siguiente</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        padding: 15,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#ddd',
        width: '80%',
        alignItems: 'center',
    },
    selected: {
        backgroundColor: '#6c63ff',
    },
    buttonText: {
        fontSize: 18,
        color: '#333',
    },
    nextButton: {
        marginTop: 30,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#6c63ff',
        width: '80%',
        alignItems: 'center',
    },
    nextButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default SeleccionDeGenero;
