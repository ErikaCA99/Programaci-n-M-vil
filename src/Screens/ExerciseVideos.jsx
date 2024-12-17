import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';

const GuíaMaquinas = () => {
    const exercises = [
        {
            id: 1,
            name: 'Concentration Curls',
            images: [
                'https://www.bodybuilding.com/exercises/exerciseImages/sequences/136/Male/l/136_2.jpg',
                'https://www.bodybuilding.com/exercises/exerciseImages/sequences/136/Male/l/136_1.jpg',
            ],
            instructions: [
                'Sit down on a flat bench with one dumbbell in front of you between your legs...',
                'Use your right arm to pick the dumbbell up...',
                'While holding the upper arm stationary, curl the weights forward...',
                'Slowly begin to bring the dumbbells back to starting position...',
            ],
            muscles: ['Biceps'],
            equipment: 'Dumbbell',
            muscle_diagram: 'https://artifacts.bbcomcdn.com/exercises-app/1.2.1/img/guide-15.gif',
        },
        // Agrega más ejercicios aquí si lo necesitas
    ];

    const [selectedExercise, setSelectedExercise] = useState(null); // Ejercicio seleccionado
    const [modalVisible, setModalVisible] = useState(false); // Estado del modal

    const openModal = (exercise) => {
        setSelectedExercise(exercise);
        setModalVisible(true);
    };

    const closeModal = () => {
        setSelectedExercise(null);
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            {/* Lista de Ejercicios */}
            <View style={styles.exercisesSection}>
                <Text style={styles.title}>Exercises</Text>
                <View style={styles.grid}>
                    {exercises.map((exercise) => (
                        <TouchableOpacity
                            key={exercise.id}
                            style={styles.card}
                            onPress={() => openModal(exercise)}
                        >
                            <Image
                                source={{ uri: exercise.images[0] }}
                                style={styles.exerciseImage}
                            />
                            <Text style={styles.cardText}>{exercise.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* Modal para mostrar detalles del ejercicio */}
            <Modal visible={modalVisible} animationType="slide" onRequestClose={closeModal}>
                {selectedExercise && (
                    <ScrollView contentContainerStyle={styles.modalContainer}>
                        <Text style={styles.modalTitle}>{selectedExercise.name}</Text>
                        {/* Imágenes del ejercicio */}
                        {selectedExercise.images.map((img, index) => (
                            <Image
                                key={index}
                                source={{ uri: img }}
                                style={styles.modalImage}
                            />
                        ))}
                        <Text style={styles.sectionTitle}>Instructions</Text>
                        {selectedExercise.instructions.map((step, index) => (
                            <Text key={index} style={styles.instructionText}>
                                {index + 1}. {step}
                            </Text>
                        ))}
                        {/* Diagrama de músculos */}
                        <Text style={styles.sectionTitle}>Muscle Diagram</Text>
                        <Image
                            source={{ uri: selectedExercise.muscle_diagram }}
                            style={styles.modalImage}
                        />
                        <Text style={styles.sectionTitle}>Equipment: {selectedExercise.equipment}</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                            <Text style={styles.closeText}>Close</Text>
                        </TouchableOpacity>
                    </ScrollView>
                )}
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10, backgroundColor: '#f9f9f9' },
    title: { fontSize: 16, fontWeight: 'bold', marginVertical: 10 },
    exercisesSection: { marginTop: 20 },
    grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
    card: {
        width: '45%',
        marginBottom: 20,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    exerciseImage: { width: 80, height: 80, marginBottom: 10, borderRadius: 10 },
    cardText: { fontSize: 14, textAlign: 'center' },
    modalContainer: { padding: 20, alignItems: 'center' },
    modalTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
    modalImage: { width: 300, height: 200, marginVertical: 10, borderRadius: 10 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 15, marginBottom: 5 },
    instructionText: { fontSize: 14, marginVertical: 5, textAlign: 'justify' },
    closeButton: {
        marginTop: 20,
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
    },
    closeText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default GuíaMaquinas;
