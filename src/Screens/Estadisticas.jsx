import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Estadisticas = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Estadísticas</Text>
            <Text style={styles.subtitle}>Revisa tu progreso semanal y mensual aquí.</Text>
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

export default Estadisticas;
