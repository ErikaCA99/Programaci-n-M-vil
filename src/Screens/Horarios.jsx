import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Horarios = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Horarios</Text>
            <Text style={styles.subtitle}>Organiza tus rutinas y sesiones aquí.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
    },
});

export default Horarios;
