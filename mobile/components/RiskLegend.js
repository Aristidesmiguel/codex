import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Item = ({ color, label }) => (
  <View style={styles.item}>
    <View style={[styles.dot, { backgroundColor: color }]} />
    <Text>{label}</Text>
  </View>
);

export default function RiskLegend() {
  return (
    <View style={styles.wrapper}>
      <Item color="#16a34a" label="Baixo" />
      <Item color="#f59e0b" label="Médio" />
      <Item color="#dc2626" label="Alto" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 12 },
  item: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  dot: { width: 12, height: 12, borderRadius: 6 },
});
