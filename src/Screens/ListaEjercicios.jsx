import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getExercisesByBodyPart } from '../services/ExerciseAPI';

const ExerciseResults = ({ route }) => {
    const { bodyPart } = route.params;
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        const fetchExercises = async () => {
            try {
                const data = await getExercisesByBodyPart(bodyPart);
                setExercises(data);
            } catch (error) {
                console.error(`Error fetching exercises for ${bodyPart}:`, error);
            }
        };
        fetchExercises();
    }, [bodyPart]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Exercises for {bodyPart}</Text>
            <FlatList
                data={exercises}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.exerciseItem}>
                        <Text style={styles.exerciseText}>{item.name}</Text>
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
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    exerciseItem: {
        padding: 15,
        backgroundColor: '#ddd',
        borderRadius: 5,
        marginBottom: 10,
    },
    exerciseText: {
        fontSize: 16,
    },
});

export default ExerciseResults;
