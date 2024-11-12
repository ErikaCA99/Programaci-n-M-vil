import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import axios from 'axios';

const Card = ({ imageSource, title }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageSource }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const ExerciseEquipmentList = () => {
  const [equipmentList, setEquipmentList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEquipmentList = async () => {
      const url = 'https://exercisedb.p.rapidapi.com/exercises/equipment/assisted?limit=10&offset=0';

      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'e00298e769msh73896796098151cp19c983jsncc5c0fe7aa13',
          'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
        },
      };

      try {
        const response = await axios(url, options);

        console.log("Datos de la API:", response.data); // Imprimir el contenido de la API
        setEquipmentList(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchEquipmentList();
  }, []);

  if (loading) {
    return <Text style={styles.loading}>Cargando...</Text>;
  }

  if (error) {
    return <Text style={styles.error}>Error: {error}</Text>;
  }

  return (
    <FlatList
      data={equipmentList}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <Card 
          imageSource={item.image || item.gifUrl || 'https://via.placeholder.com/150'} 
          title={item.name || 'Equipo de Gimnasio'}
        />
      )}
    />
  );
};

const GymMachines = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Searchbar
        placeholder="Buscar máquina"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchbar}
      />
      
      <ExerciseEquipmentList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  searchbar: {
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 2,
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 5,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loading: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default GymMachines;
