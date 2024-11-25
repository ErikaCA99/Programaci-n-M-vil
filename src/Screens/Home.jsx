import React, { useState, useEffect } from 'react';
import { View, Text, Image, Video, StyleSheet, ScrollView, TextInput, FlatList } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { debounce } from 'lodash'; // Asegúrate de tener lodash instalado

const SERVER_URL = 'http://localhost:3000/scrape';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeScreen = () => {
    const [mediaData, setMediaData] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    // Fetch de los datos al cargar el componente
    useEffect(() => {
        fetchMedia();
    }, []);

    // Filtrar los ejercicios cuando cambia la búsqueda
    useEffect(() => {
        filterExercises();
    }, [search]);

    // Función para obtener los datos de los ejercicios
    const fetchMedia = async () => {
        try {
            const response = await fetch(SERVER_URL);
            const result = await response.json();
            if (result.success) {
                setMediaData(result.data);
                setFilteredData(result.data); // Inicializar con todos los ejercicios
            }
        } catch (error) {
            console.error('Error fetching media:', error);
        }
    };

    // Función para filtrar los ejercicios
    const filterExercises = () => {
        if (search.trim() === '') {
            setFilteredData(mediaData); // Si no hay búsqueda, mostrar todos los ejercicios
        } else {
            const filtered = mediaData.filter(exercise =>
                exercise.name.toLowerCase().includes(search.toLowerCase()) // Filtrar por nombre
            );
            setFilteredData(filtered);
        }
    };

    // Función de búsqueda con debounce
    const debouncedSearch = debounce((value) => {
        setSearch(value);
    }, 500); // Ajusta el tiempo de debounce si es necesario

    const handleSearchChange = (text) => {
        debouncedSearch(text); // Usar la búsqueda con debounce
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.greeting}>Buenos días 🔥</Text>
            <TextInput
                style={styles.searchInput}
                placeholder="Buscar ejercicio"
                value={search}
                onChangeText={handleSearchChange} // Usar la función debounced
            />
            <Text style={styles.sectionTitle}>Media</Text>
            {/* Lista de ejercicios filtrados */}
            <FlatList
                data={filteredData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.mediaCard}>
                        {item.type === 'image' && (
                            <Image source={{ uri: item.src }} style={styles.mediaImage} />
                        )}
                        {item.type === 'video' && (
                            <Video
                                source={{ uri: item.src }}
                                style={styles.mediaVideo}
                                useNativeControls
                                resizeMode="contain"
                            />
                        )}
                    </View>
                )}
                ListEmptyComponent={<Text>No hay ejercicios que coincidan con la búsqueda.</Text>} // Mensaje cuando no hay resultados
            />
            <Text style={styles.sectionTitle}>Entrenamientos populares</Text>
            <ScrollView horizontal>
                {mediaData.map((item, index) => (
                    <View key={index} style={styles.mediaCard}>
                        {item.type === 'image' && (
                            <Image source={{ uri: item.src }} style={styles.mediaImage} />
                        )}
                        {item.type === 'video' && (
                            <Video
                                source={{ uri: item.src }}
                                style={styles.mediaVideo}
                                useNativeControls
                                resizeMode="contain"
                            />
                        )}
                    </View>
                ))}
            </ScrollView>
            <Text style={styles.sectionTitle}>Plan diario</Text>
            {/* Agregar contenido adicional del plan diario */}
        </ScrollView>
    );
};

// Pantalla del menú del Drawer
const MenuScreen = () => (
    <View style={styles.menuContainer}>
        <Text>Menu</Text>
        <Text>Option 1</Text>
        <Text>Option 2</Text>
        <Text>Option 3</Text>
    </View>
);

const Home = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="HomeScreen">
                <Drawer.Screen name="HomeScreen" component={HomeScreen} />
                <Drawer.Screen name="Menu" component={MenuScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    searchInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginVertical: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    card: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
    exerciseName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    mediaCard: {
        marginRight: 10,
        borderRadius: 10,
        overflow: 'hidden',
        width: 150,
        height: 150,
        backgroundColor: '#eee',
    },
    mediaImage: {
        width: '100%',
        height: '100%',
    },
    mediaVideo: {
        width: '100%',
        height: '100%',
    },
    menuContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Home;
