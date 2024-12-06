import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { getFirestore, setDoc, doc } from 'firebase/firestore'; // Para guardar datos
import { app } from '../../firebaseConfig';

const firestore = getFirestore(app);

const SeleccionDeAreas = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const areas = [
        { id: 'cuerpo_completo', label: 'Cuerpo completo', image: require('./../assets/cuerpo_completo.webp') },
        { id: 'hombros', label: 'Hombros', image: require('./../assets/hombros.webp') },
        { id: 'biceps', label: 'Bíceps Masivos', image: require('./../assets/biceps.webp') },
        { id: 'espalda', label: 'Espalda Más Ancha', image: require('./../assets/espalda.webp') },
        { id: 'pecho', label: 'Pecho', image: require('./../assets/pecho.webp') },
        { id: 'cuadritos', label: 'Cuadritos', image: require('./../assets/cuadraditos.webp') },
        { id: 'gluteos', label: 'Glúteos Firmes', image: require('./../assets/gluteos.webp') },
        { id: 'piernas', label: 'Piernas Fuertes', image: require('./../assets/piernas.webp') },
    ];

    const handleSelect = (id) => {
        if (id === 'cuerpo_completo') {
            setSelectedOptions(selectedOptions.includes(id) ? [] : ['cuerpo_completo']);
        } else {
            if (!selectedOptions.includes('cuerpo_completo')) {
                setSelectedOptions((prev) =>
                    prev.includes(id) ? prev.filter((option) => option !== id) : [...prev, id]
                );
            } else {
                Alert.alert('Restricción', 'No puedes seleccionar otras áreas si elegiste "Cuerpo completo".');
            }
        }
    };

    const handleSave = async () => {
        if (selectedOptions.length === 0) {
            Alert.alert('Error', 'Por favor selecciona al menos una área.');
            return;
        }
        try {
            const userId = 'usuario_demo'; // Cambia esto por el ID del usuario autenticado
            await setDoc(doc(firestore, 'usuarios', userId), { areas: selectedOptions });
            Alert.alert('Éxito', 'Tus áreas seleccionadas han sido guardadas.');
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'No se pudo guardar tu selección. Inténtalo de nuevo.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>¿En qué áreas te gustaría enfocarte?</Text>
            <View style={styles.grid}>
                {areas.map((area) => (
                    <TouchableOpacity
                        key={area.id}
                        style={[
                            styles.option,
                            selectedOptions.includes(area.id) && styles.selectedOption,
                        ]}
                        onPress={() => handleSelect(area.id)}
                    >
                        <Image source={area.image} style={styles.image} />
                        <Text style={styles.optionText}>{area.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Guardar Selección</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101010',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    option: {
        width: 100,
        height: 120,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#202020',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#404040',
    },
    selectedOption: {
        borderColor: 'cornflowerblue',
        borderWidth: 2,
    },
    image: {
        width: 60,
        height: 60,
        marginBottom: 10,
    },
    optionText: {
        color: '#FFFFFF',
        fontSize: 12,
        textAlign: 'center',
    },
    saveButton: {
        marginTop: 20,
        backgroundColor: 'cornflowerblue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default SeleccionDeAreas;
