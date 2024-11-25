import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BarraNavegacion = () => {
  const navigation = useNavigation();

  return (
    <View style={{ paddingTop: 40, backgroundColor: '#333', padding: 20 }}>
      <Text style={{ color: '#fff' }}>Barra de Navegación</Text>
      <Button
        title="Ir a otra pantalla"
        onPress={() => navigation.navigate('OtroComponente')}
      />
    </View>
  );
};

export default BarraNavegacion;