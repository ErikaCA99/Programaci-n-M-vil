// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://exercisedb-api.vercel.app', // La URL base de la API
});

// Ejemplo de función para obtener ejercicios
export const getExercises = async () => {
  try {
    const response = await api.get('/exercises');
    return response.data;
  } catch (error) {
    console.error("Error fetching exercises: ", error);
    throw error;
  }
};
