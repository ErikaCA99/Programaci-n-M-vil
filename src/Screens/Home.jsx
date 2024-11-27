import React from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Home = () => {
    return (
        <ScrollView style={styles.container}>
            {/* Encabezado */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.greeting}>Hello, Mike</Text>
                    <Text style={styles.title}>Let's Workout</Text>
                </View>
                <Image
                    source={{ uri: 'https://via.placeholder.com/50' }} // Imagen de usuario
                    style={styles.profileImage}
                />
            </View>

            {/* Barra de búsqueda */}
            <TextInput
                style={styles.searchBar}
                placeholder="Search Your Plan"
                placeholderTextColor="#888"
            />

            {/* Resultados de la última semana */}
            <View style={styles.lastWeekResults}>
                <TouchableOpacity style={styles.resultCard}>
                    <Ionicons name="flame" size={24} color="red" />
                    <Text style={styles.resultValue}>2503</Text>
                    <Text style={styles.resultLabel}>Cal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.resultCard}>
                    <Ionicons name="time" size={24} color="green" />
                    <Text style={styles.resultValue}>24h</Text>
                    <Text style={styles.resultLabel}>34m</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.resultCard}>
                    <Ionicons name="barbell" size={24} color="orange" />
                    <Text style={styles.resultValue}>1450</Text>
                    <Text style={styles.resultLabel}>Kg</Text>
                </TouchableOpacity>
            </View>

            {/* Tu plan */}
            <Text style={styles.sectionTitle}>Tu Plan</Text>
            <View style={styles.planContainer}>
                <TouchableOpacity style={styles.planCard}>
                    <Image
                        source={{ uri: 'https://via.placeholder.com/150' }}
                        style={styles.planImage}
                    />
                    <Text style={styles.planText}>Chest & Triceps</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.planCard}>
                    <Image
                        source={{ uri: 'https://via.placeholder.com/150' }}
                        style={styles.planImage}
                    />
                    <Text style={styles.planText}>Back & Biceps</Text>
                </TouchableOpacity>
            </View>

            {/* Seleccionar plan */}
            <View style={styles.selectPlanContainer}>
                <TouchableOpacity style={styles.selectButton}>
                    <Text>Cardio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.selectButton}>
                    <Text>Yoga</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.selectButton}>
                    <Text>HIIT</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    greeting: {
        fontSize: 16,
        color: '#555',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    searchBar: {
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    lastWeekResults: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    resultCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        width: '30%',
        elevation: 2,
    },
    resultValue: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    resultLabel: {
        color: '#888',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    planContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    planCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        width: '48%',
        elevation: 2,
    },
    planImage: {
        width: '100%',
        height: 100,
    },
    planText: {
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    selectPlanContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    selectButton: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        elevation: 2,
    },
});

export default Home;