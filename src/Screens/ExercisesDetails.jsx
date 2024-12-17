import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ExerciseDetails = ({ route }) => {
    const { exerciseId } = route.params;

    // Aquí puedes buscar los detalles del ejercicio según el ID (simulado)
    const exercise = {
        id: exerciseId,
        name: 'Plank',
        muscle: 'Abs',
        equipment: 'Body Weight',
        image: 'https://via.placeholder.com/100',
        description: 'An exercise to strengthen your core muscles.'
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: exercise.image }} style={styles.image} />
            <Text style={styles.name}>{exercise.name}</Text>
            <Text style={styles.description}>{exercise.description}</Text>
            <Text style={styles.details}>Muscle: {exercise.muscle}</Text>
            <Text style={styles.details}>Equipment: {exercise.equipment}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    image: { width: '100%', height: 200, borderRadius: 10 },
    name: { fontSize: 24, fontWeight: 'bold', marginTop: 20 },
    description: { fontSize: 16, marginTop: 10, color: '#555' },
    details: { fontSize: 14, marginTop: 5, color: '#888' }
});

export default ExerciseDetails;
