import { ScrollView, Text, View, StyleSheet } from 'react-native';
import DashboardCard from '../src/components/DashboardCard';
import { useApp } from '../src/context/AppContext';

export default function Dashboard() {
  const { regioes, historico } = useApp();

  const criticos = regioes.filter((r) => r.alerta === 'Crítico').length;
  const altos = regioes.filter((r) => r.alerta === 'Alto').length;

  const mediaTemp = (
    regioes.reduce((total, r) => total + r.temperatura, 0) / regioes.length
  ).toFixed(1);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.logo}>NextSpace</Text>
      <Text style={styles.subtitle}>
        Dashboard espacial para prevenção de desastres naturais
      </Text>

      <View style={styles.grid}>
        <DashboardCard title="Regiões" value={regioes.length} color="#4EA8FF" />
        <DashboardCard title="Críticos" value={criticos} color="#FF3B3B" />
        <DashboardCard title="Alertas altos" value={altos} color="#FF8C42" />
        <DashboardCard title="Temp. média" value={`${mediaTemp}°C`} color="#35D07F" />
      </View>

      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Resumo da missão</Text>
        <Text style={styles.text}>
          O NextSpace simula dados climáticos inspirados em satélites para
          monitorar regiões vulneráveis a enchentes, calor extremo e riscos ambientais.
        </Text>
      </View>

      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Histórico salvo</Text>
        <Text style={styles.text}>{historico.length} alertas gerados no dispositivo.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080B1A',
    padding: 20,
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitle: {
    color: '#AAB3D6',
    marginTop: 6,
    marginBottom: 24,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  panel: {
    backgroundColor: '#11162A',
    padding: 16,
    borderRadius: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#1E2A5A',
  },
  panelTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    color: '#AAB3D6',
    lineHeight: 22,
  },
});