import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';
import { createReport } from '../services/api';

export default function ReportScreen() {
  const [description, setDescription] = useState('');

  const submit = async () => {
    try {
      const current = await Location.getCurrentPositionAsync({});
      const payload = {
        description,
        photoUrl: 'https://placehold.co/600x400?text=Flood+Report',
        location: {
          lat: current.coords.latitude,
          lng: current.coords.longitude,
        },
      };

      await createReport(payload, 'FIREBASE_ID_TOKEN_AQUI');
      Alert.alert('Sucesso', 'Relatório enviado para moderação.');
      setDescription('');
    } catch (error) {
      Alert.alert('Erro', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Descreva a inundação observada"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Enviar relatório" onPress={submit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, borderColor: '#d1d5db', borderRadius: 8, minHeight: 140, padding: 10, marginBottom: 12 },
});
