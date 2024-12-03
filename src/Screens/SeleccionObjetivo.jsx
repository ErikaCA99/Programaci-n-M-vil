import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SeleccionDeObjetivo = ({ navigation, route }) => {
    const [selectedObjective, setSelectedObjective] = useState(null);

    const objectives = [
        { id: 1, name: 'Perder grasa y ganar músculo', icon: 'fitness-outline' },
        { id: 2, name: 'Perder grasa', icon: 'walk-outline' },
        { id: 3, name: 'Ganar músculo', icon: 'barbell-outline' },
        { id: 4, name: 'Aumentar fuerza', icon: 'flash-outline' },
        { id: 5, name: 'Entrenamiento combinado', icon: 'bicycle-outline' },
        { id: 6, name: 'Salud', icon: 'heart-outline' },
    ];

    const handleNext = () => {
        if (selectedObjective) {
            navigation.navigate('InformacionPersonal', { ...route.params, objective: selectedObjective });
        } else {
            Alert.alert('Objetivo no seleccionado', 'Por favor selecciona un objetivo antes de continuar.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>¿Cuál es tu objetivo?</Text>
            <View style={styles.optionsContainer}>
                {objectives.map((objective) => (
                    <TouchableOpacity
                        key={objective.id}
                        style={[
                            styles.button,
                            selectedObjective === objective.name && styles.selected,
                        ]}
                        onPress={() => setSelectedObjective(objective.name)}
                    >
                        <Ionicons
                            name={objective.icon}
                            size={24}
                            color={selectedObjective === objective.name ? '#fff' : '#555'}
                            style={styles.icon}
                        />
                        <Text
                            style={[
                                styles.buttonText,
                                selectedObjective === objective.name && styles.selectedText,
                            ]}
                        >
                            {objective.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <TouchableOpacity
                style={[styles.nextButton, !selectedObjective && styles.nextButtonDisabled]}
                onPress={() => navigation.navigate('InformacionPersonal')}
                disabled={!selectedObjective}
            >
                <Text style={styles.nextButtonText}>Siguiente</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },
    optionsContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    selected: {
        backgroundColor: '#4CAF50',
        borderColor: '#4CAF50',
    },
    buttonText: {
        fontSize: 16,
        color: '#555',
        marginLeft: 10,
    },
    selectedText: {
        color: '#fff',
    },
    icon: {
        marginLeft: 5,
    },
    nextButton: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    nextButtonDisabled: {
        backgroundColor: '#ddd',
    },
    nextButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default SeleccionDeObjetivo;
