import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';

const Perfil = () => {
    // Estado para almacenar y editar la información del usuario
    const [userInfo, setUserInfo] = useState({
        nombre: 'Juan Pérez',
        email: 'juan.perez@example.com',
        telefono: '123456789',
    });
    const [isEditing, setIsEditing] = useState(false); // Estado para alternar entre edición y visualización

    // Manejar los cambios en los inputs
    const handleInputChange = (field, value) => {
        setUserInfo({ ...userInfo, [field]: value });
    };

    // Guardar los cambios
    const handleSave = () => {
        setIsEditing(false);
        Alert.alert('Información actualizada', 'Tus cambios han sido guardados.');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Perfil</Text>
            <Text style={styles.subtitle}>Gestiona tu información personal aquí.</Text>

            {/* Campos de información */}
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Nombre:</Text>
                {isEditing ? (
                    <TextInput
                        style={styles.input}
                        value={userInfo.nombre}
                        onChangeText={(text) => handleInputChange('nombre', text)}
                    />
                ) : (
                    <Text style={styles.value}>{userInfo.nombre}</Text>
                )}
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.label}>Email:</Text>
                {isEditing ? (
                    <TextInput
                        style={styles.input}
                        value={userInfo.email}
                        onChangeText={(text) => handleInputChange('email', text)}
                        keyboardType="email-address"
                    />
                ) : (
                    <Text style={styles.value}>{userInfo.email}</Text>
                )}
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.label}>Teléfono:</Text>
                {isEditing ? (
                    <TextInput
                        style={styles.input}
                        value={userInfo.telefono}
                        onChangeText={(text) => handleInputChange('telefono', text)}
                        keyboardType="phone-pad"
                    />
                ) : (
                    <Text style={styles.value}>{userInfo.telefono}</Text>
                )}
            </View>

            {/* Botones para alternar entre edición y guardado */}
            <View style={styles.buttonContainer}>
                {isEditing ? (
                    <TouchableOpacity style={styles.buttonSave} onPress={handleSave}>
                        <Text style={styles.buttonText}>Guardar</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.buttonEdit} onPress={() => setIsEditing(true)}>
                        <Text style={styles.buttonText}>Editar</Text>
                    </TouchableOpacity>
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#333',
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: '#666',
    },
    infoContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    value: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
        fontSize: 16,
        marginTop: 5,
        backgroundColor: '#fff',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonEdit: {
        backgroundColor: 'cornflowerblue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonSave: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Perfil;
