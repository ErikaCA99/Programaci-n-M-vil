import axios from "axios";

const BASE_URL = "https://exercisedb-api.vercel.app";

const exerciseApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Función para obtener todos los grupos musculares
export const getBodyParts = async () => {
  try {
    const response = await exerciseApi.get("/bodyPartList");
    return response.data;
  } catch (error) {
    console.error("Error fetching body parts:", error);
    throw error;
  }
};

// Función para obtener ejercicios por grupo muscular
export const getExercisesByBodyPart = async (bodyPart) => {
  try {
    const response = await exerciseApi.get(`/bodyPart/${bodyPart}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching exercises for ${bodyPart}:`, error);
    throw error;
  }
};

// Función para obtener un ejercicio específico por ID
export const getExerciseById = async (id) => {
  try {
    const response = await exerciseApi.get(`/exercise/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching exercise with ID ${id}:`, error);
    throw error;
  }
};

export default {
  getBodyParts,
  getExercisesByBodyPart,
  getExerciseById,
};
