import { ScrollView, Text, StyleSheet } from 'react-native';
import { useApp } from '../src/context/AppContext';
import RegionCard from '../src/components/RegionCard';

export default function Monitoramento() {
  const { regioes } = useApp();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Monitoramento Orbital</Text>
      <Text style={styles.subtitle}>Regiões acompanhadas por dados simulados</Text>

      {regioes.map((regiao) => (
        <RegionCard key={regiao.id} regiao={regiao} />
      ))}
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
  },
  subtitle: {
    color: '#AAB3D6',
    marginBottom: 20,
  },
});