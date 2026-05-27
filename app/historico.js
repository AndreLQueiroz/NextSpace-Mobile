import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { useApp } from '../src/context/AppContext';
import { getCorAlerta } from '../src/services/alertService';

export default function Historico() {
  const { historico } = useApp();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Histórico de Alertas</Text>

      {historico.length === 0 ? (
        <Text style={styles.empty}>Nenhum alerta gerado ainda.</Text>
      ) : (
        historico.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.city}>{item.cidade}</Text>
            <Text style={[styles.alerta, { color: getCorAlerta(item.alerta) }]}>
              {item.alerta}
            </Text>
            <Text style={styles.info}>🌧 {item.chuva} mm</Text>
            <Text style={styles.info}>🌡 {item.temperatura}°C</Text>
            <Text style={styles.info}>💧 {item.umidade}%</Text>
            <Text style={styles.date}>{item.data}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080B1A',
    padding: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  empty: {
    color: '#AAB3D6',
  },
  card: {
    backgroundColor: '#11162A',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#1E2A5A',
  },
  city: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  alerta: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 6,
  },
  info: {
    color: '#AAB3D6',
    marginTop: 5,
  },
  date: {
    color: '#6F789D',
    marginTop: 10,
    fontSize: 12,
  },
});