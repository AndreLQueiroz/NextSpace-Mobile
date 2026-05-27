import { View, Text, StyleSheet } from 'react-native';
import { getCorAlerta } from '../services/alertService';

export default function RegionCard({ regiao }) {
  const cor = getCorAlerta(regiao.alerta);

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.city}>{regiao.cidade}</Text>
        <Text style={[styles.alerta, { color: cor }]}>{regiao.alerta}</Text>
      </View>

      <Text style={styles.info}>Chuva: {regiao.chuva} mm</Text>
      <Text style={styles.info}>Temperatura: {regiao.temperatura}°C</Text>
      <Text style={styles.info}>Umidade: {regiao.umidade}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#11162A',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#1E2A5A',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  city: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  alerta: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  info: {
    color: '#AAB3D6',
    marginTop: 8,
  },
});