import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Circle, Marker } from 'react-native-maps';
import RiskLegend from '../components/RiskLegend';

const defaultRegion = {
  latitude: -8.8383,
  longitude: 13.2344,
  latitudeDelta: 0.2,
  longitudeDelta: 0.2,
};

export default function HomeScreen({ navigation }) {
  const [region, setRegion] = useState(defaultRegion);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;

      const current = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: current.coords.latitude,
        longitude: current.coords.longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      });
    })();
  }, []);

  const onEmergency = () => {
    Alert.alert('Emergência', `Localização enviada: ${region.latitude.toFixed(4)}, ${region.longitude.toFixed(4)}`);
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region}>
        <Marker coordinate={region} title="Você" />
        <Circle center={region} radius={2000} fillColor="rgba(245,158,11,0.25)" strokeColor="#f59e0b" />
      </MapView>
      <RiskLegend />
      <Button title="Reportar inundação" onPress={() => navigation.navigate('Reportar Inundação')} />
      <Button title="Histórico de alertas" onPress={() => navigation.navigate('Histórico')} />
      <Button color="#dc2626" title="Botão de emergência" onPress={onEmergency} />
      <Text style={styles.footer}>Monitoramento inteligente para comunidades de Angola.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12, gap: 10 },
  map: { height: 330, borderRadius: 12 },
  footer: { textAlign: 'center', marginTop: 8, color: '#4b5563' },
});
