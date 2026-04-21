import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getAlerts } from '../services/api';

export default function AlertsHistoryScreen() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getAlerts('FIREBASE_ID_TOKEN_AQUI');
      setAlerts(Array.isArray(data) ? data : []);
    })();
  }, []);

  return (
    <FlatList
      data={alerts}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <View style={{ marginBottom: 12, padding: 12, borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 8 }}>
          <Text style={{ fontWeight: '700' }}>{item.title}</Text>
          <Text>{item.message}</Text>
          <Text>Nível: {item.riskLevel}</Text>
        </View>
      )}
      ListEmptyComponent={<Text>Nenhum alerta ativo.</Text>}
    />
  );
}
