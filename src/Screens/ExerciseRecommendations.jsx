import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ExerciseRecommendations = ({ level, goal }) => {
    // Datos simulados para cada nivel y objetivo del usuario.
    const exerciseData = [
        {
            id: '1',
            name: 'Push-ups',
            beginner: { series: 3, reps: 10, rest: '60s' },
            intermediate: { series: 4, reps: 12, rest: '45s' },
            advanced: { series: 5, reps: 15, rest: '30s' }
        },
        {
            id: '2',
            name: 'Squats',
            beginner: { series: 3, reps: 12, rest: '60s' },
            intermediate: { series: 4, reps: 15, rest: '45s' },
            advanced: { series: 5, reps: 20, rest: '30s' }
        },
        // Puedes agregar más ejercicios aquí.
    ];

    // Función para obtener la recomendación adecuada según nivel.
    const getRecommendations = (exercise) => {
        const recommendation = exercise[level];
        return `${recommendation.series} series de ${recommendation.reps} repeticiones, descanso ${recommendation.rest}`;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recomendaciones de Ejercicios</Text>
            <FlatList
                data={exerciseData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.exerciseContainer}>
                        <Text style={styles.exerciseName}>{item.name}</Text>
                        <Text style={styles.recommendation}>
                            {getRecommendations(item)}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f2f2f2'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    exerciseContainer: {
        padding: 15,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginBottom: 10
    },
    exerciseName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    recommendation: {
        fontSize: 16,
        color: '#555555'
    }
});

export default ExerciseRecommendations;
