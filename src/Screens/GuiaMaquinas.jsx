import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
const GuíaMaquinas = () => {
    const navigation = useNavigation(); // Instancia de navegación

    const muscles = [
        { id: 1, name: 'Abs', image: 'https://via.placeholder.com/100' },
        { id: 2, name: 'Back', image: 'https://via.placeholder.com/100' },
        { id: 3, name: 'Biceps', image: 'https://via.placeholder.com/100' },
        { id: 4, name: 'Cardio', image: 'https://via.placeholder.com/100' },
        { id: 5, name: 'Chest', image: 'https://via.placeholder.com/100' },
    ];

    const equipment = [
        { id: 1, name: 'Body Weight', image: 'https://via.placeholder.com/100' },
        { id: 2, name: 'Bands', image: 'https://via.placeholder.com/100' },
        { id: 3, name: 'Barbell', image: 'https://via.placeholder.com/100' },
        { id: 4, name: 'Bench', image: 'https://via.placeholder.com/100' },
        { id: 5, name: 'Dumbbell', image: 'https://via.placeholder.com/100' },
    ];

    const exercises = [
        { id: 1, name: 'Plank', muscle: 'Abs', equipment: 'Body Weight', image: 'https://via.placeholder.com/100' },
        { id: 2, name: 'Machine Ab Crunch', muscle: 'Abs', equipment: 'Cardio Machine', image: 'https://via.placeholder.com/100' },
        { id: 3, name: 'Crunch', muscle: 'Abs', equipment: 'Body Weight', image: 'https://via.placeholder.com/100' },
        { id: 4, name: 'Bench Press', muscle: 'Chest', equipment: 'Barbell', image: 'https://via.placeholder.com/100' },
    ];

    const [selectedMuscle, setSelectedMuscle] = useState(null);
    const [selectedEquipment, setSelectedEquipment] = useState(null);
    const [muscleIndex, setMuscleIndex] = useState(0);
    const [equipmentIndex, setEquipmentIndex] = useState(0);

    const filteredExercises = exercises.filter(
        (exercise) =>
            (!selectedMuscle || exercise.muscle === selectedMuscle) &&
            (!selectedEquipment || exercise.equipment === selectedEquipment)
    );

    const handleMuscleNavigation = (direction) => {
        if (direction === 'left' && muscleIndex > 0) {
            setMuscleIndex(muscleIndex - 1);
        } else if (direction === 'right' && muscleIndex < muscles.length - 1) {
            setMuscleIndex(muscleIndex + 1);
        }
    };

    const handleEquipmentNavigation = (direction) => {
        if (direction === 'left' && equipmentIndex > 0) {
            setEquipmentIndex(equipmentIndex - 1);
        } else if (direction === 'right' && equipmentIndex < equipment.length - 1) {
            setEquipmentIndex(equipmentIndex + 1);
        }
    };

    return (
        <View style={styles.container}>
            {/* Filtro por músculo */}
            <View style={styles.filterContainer}>
                <Text style={styles.title}>Filter By Muscle</Text>
                <View style={styles.navigation}>
                    <TouchableOpacity onPress={() => handleMuscleNavigation('left')}>
                        <LeftCircleOutlined style={styles.arrow} />
                    </TouchableOpacity>
                    {muscles.slice(muscleIndex, muscleIndex + 3).map((muscle) => (
                        <TouchableOpacity
                            key={muscle.id}
                            style={[
                                styles.filterButton,
                                selectedMuscle === muscle.name && styles.activeFilter,
                            ]}
                            onPress={() => {
                                setSelectedMuscle(
                                    selectedMuscle === muscle.name ? null : muscle.name
                                );
                                setSelectedEquipment(null); // Deseleccionar equipo
                            }}
                        >
                            <Image source={{ uri: muscle.image }} style={styles.filterImage} />
                            <Text style={styles.filterText}>{muscle.name}</Text>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity onPress={() => handleMuscleNavigation('right')}>
                        <RightCircleOutlined style={styles.arrow} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Filtro por equipo */}
            <View style={styles.filterContainer}>
                <Text style={styles.title}>Filter By Equipment</Text>
                <View style={styles.navigation}>
                    <TouchableOpacity onPress={() => handleEquipmentNavigation('left')}>
                        <LeftCircleOutlined style={styles.arrow} />
                    </TouchableOpacity>
                    {equipment.slice(equipmentIndex, equipmentIndex + 3).map((equip) => (
                        <TouchableOpacity
                            key={equip.id}
                            style={[
                                styles.filterButton,
                                selectedEquipment === equip.name && styles.activeFilter,
                            ]}
                            onPress={() => {
                                setSelectedEquipment(
                                    selectedEquipment === equip.name ? null : equip.name
                                );
                                setSelectedMuscle(null); // Deseleccionar músculo
                            }}
                        >
                            <Image source={{ uri: equip.image }} style={styles.filterImage} />
                            <Text style={styles.filterText}>{equip.name}</Text>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity onPress={() => handleEquipmentNavigation('right')}>
                        <RightCircleOutlined style={styles.arrow} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Ejercicios filtrados */}
            <View style={styles.exercisesSection}>
                <Text style={styles.title}>Filtered Exercises</Text>
                <View style={styles.grid}>
                    {filteredExercises.map((exercise) => (
                        <TouchableOpacity
                            key={exercise.id}
                            style={styles.card}
                            onPress={() =>
                                navigation.navigate('ExerciseDetails', { exercise }) // Navegación
                            }
                        >
                            <Image source={{ uri: exercise.image }} style={styles.exerciseImage} />
                            <Text style={styles.cardText}>{exercise.name}</Text>
                        </TouchableOpacity>
                    ))}
                    {filteredExercises.length === 0 && (
                        <Text style={styles.noExercises}>No exercises match the filters.</Text>
                    )}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10, backgroundColor: '#f9f9f9' },
    title: { fontSize: 16, fontWeight: 'bold', marginVertical: 10 },
    filterContainer: { marginBottom: 20 },
    navigation: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
    arrow: { fontSize: 24, paddingHorizontal: 10 },
    filterButton: { alignItems: 'center', marginHorizontal: 10 },
    activeFilter: { borderBottomWidth: 2, borderBottomColor: '#007bff' },
    filterImage: { width: 60, height: 60, borderRadius: 30 },
    filterText: { fontSize: 12, marginTop: 5, textAlign: 'center' },
    exercisesSection: { marginTop: 20 },
    grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
    card: { width: '45%', marginBottom: 20, backgroundColor: '#fff', padding: 10, borderRadius: 10, alignItems: 'center' },
    exerciseImage: { width: 80, height: 80, marginBottom: 10, borderRadius: 10 },
    cardText: { fontSize: 14, textAlign: 'center' },
    noExercises: { textAlign: 'center', color: '#888', marginTop: 20 },
});

export default GuíaMaquinas;
