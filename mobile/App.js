import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ReportScreen from './screens/ReportScreen';
import AlertsHistoryScreen from './screens/AlertsHistoryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SIMAI" component={HomeScreen} />
        <Stack.Screen name="Reportar Inundação" component={ReportScreen} />
        <Stack.Screen name="Histórico" component={AlertsHistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
