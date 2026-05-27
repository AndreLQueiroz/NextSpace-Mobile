import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { AppProvider } from '../src/context/AppContext';

export default function Layout() {
  return (
    <AppProvider>
      <Tabs
        screenOptions={{
          headerStyle: { backgroundColor: '#080B1A' },
          headerTintColor: '#FFFFFF',
          tabBarStyle: {
            backgroundColor: '#080B1A',
            borderTopColor: '#1E2A5A',
          },
          tabBarActiveTintColor: '#4EA8FF',
          tabBarInactiveTintColor: '#8A94B8',
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Dashboard',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="analytics" color={color} size={size} />
            ),
          }}
        />

        <Tabs.Screen
          name="monitoramento"
          options={{
            title: 'Monitoramento',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="planet" color={color} size={size} />
            ),
          }}
        />

        <Tabs.Screen
          name="simulacao"
          options={{
            title: 'Simulação',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="flash" color={color} size={size} />
            ),
          }}
        />

        <Tabs.Screen
          name="historico"
          options={{
            title: 'Histórico',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="time" color={color} size={size} />
            ),
          }}
        />

        <Tabs.Screen
          name="perfil"
          options={{
            title: 'Perfil',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-circle" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </AppProvider>
  );
}