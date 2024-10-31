import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.welcomeText}>Bienvenido</Text>
                <Text style={styles.username}>Andru </Text>
                <View style={styles.profilePic} />
            </View>

            <View style={styles.slider}>
                <Text style={styles.sliderText}>Progreso</Text>
            </View>

            <Text style={styles.categoryTitle}>Categorías según el grupo muscular</Text>
            <View style={styles.categories}>
                <TouchableOpacity style={styles.categoryBox}>
                    <Text style={styles.categoryText}>Cuerpo completo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBox}>
                    <Text style={styles.categoryText}>Espalda</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBox}>
                    <Text style={styles.categoryText}>Piernas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoryBox}>
                    <Text style={styles.categoryText}>Brazos</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.workoutsTitle}>Rutinas Disponibles</Text>
            <View style={styles.workouts}>
                <TouchableOpacity style={styles.workoutBox}>
                    <Text style={styles.workoutText}>Workout 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.workoutBox}>
                    <Text style={styles.workoutText}>Workout 2</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Añadir Nueva Rutina</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding:20,
        backgroundColor: '#101010',
        marginTop: 40,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    welcomeText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    username: {
        color: '#B4FF00',
        fontSize: 18,
        marginLeft: 5,
    },
    profilePic: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#333',
        marginLeft: 'auto',
    },
    slider: {
        height: 150,
        backgroundColor: '#282828',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    sliderText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    categoryTitle: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 10,
    },
    categories: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    categoryBox: {
        width: '23%',
        height: 60,
        borderRadius: 10,
        backgroundColor: '#444',
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    workoutsTitle: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 10,
    },
    workouts: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    workoutBox: {
        width: '48%',
        height: 100,
        borderRadius: 10,
        backgroundColor: '#5D6D7E',
        justifyContent: 'center',
        alignItems: 'center',
    },
    workoutText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    addButton: {
        backgroundColor: '#B4FF00',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
