import { ScrollView, Text, View, StyleSheet } from 'react-native';
import DashboardCard from '../src/components/DashboardCard';
import { useApp } from '../src/context/AppContext';

export default function Dashboard() {
  const { regioes, historico } = useApp();

  const criticos = regioes.filter((r) => r.alerta === 'Crítico').length;
  const altos = regioes.filter((r) => r.alerta === 'Alto').length;
  const moderados = regioes.filter((r) => r.alerta === 'Moderado').length;
  const baixos = regioes.filter((r) => r.alerta === 'Baixo').length;

  const mediaTemp = (
    regioes.reduce((total, r) => total + r.temperatura, 0) / regioes.length
  ).toFixed(1);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.logo}>NextSpace</Text>
      <Text style={styles.subtitle}>
        Monitoramento climático com dados espaciais simulados
      </Text>

      <View style={styles.grid}>
        <DashboardCard title="Regiões" value={regioes.length} color="#4EA8FF" />
        <DashboardCard title="Críticos" value={criticos} color="#FF3B3B" />
        <DashboardCard title="Alertas altos" value={altos} color="#FF8C42" />
        <DashboardCard title="Temp. média" value={`${mediaTemp}°C`} color="#35D07F" />
      </View>

      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Distribuição de alertas</Text>

        <View style={styles.barItem}>
          <Text style={styles.label}>Crítico</Text>
          <View style={styles.barBg}>
            <View style={[styles.bar, { width: `${criticos * 25}%`, backgroundColor: '#FF3B3B' }]} />
          </View>
          <Text style={styles.number}>{criticos}</Text>
        </View>

        <View style={styles.barItem}>
          <Text style={styles.label}>Alto</Text>
          <View style={styles.barBg}>
            <View style={[styles.bar, { width: `${altos * 25}%`, backgroundColor: '#FF8C42' }]} />
          </View>
          <Text style={styles.number}>{altos}</Text>
        </View>

        <View style={styles.barItem}>
          <Text style={styles.label}>Moderado</Text>
          <View style={styles.barBg}>
            <View style={[styles.bar, { width: `${moderados * 25}%`, backgroundColor: '#FFD447' }]} />
          </View>
          <Text style={styles.number}>{moderados}</Text>
        </View>

        <View style={styles.barItem}>
          <Text style={styles.label}>Baixo</Text>
          <View style={styles.barBg}>
            <View style={[styles.bar, { width: `${baixos * 25}%`, backgroundColor: '#35D07F' }]} />
          </View>
          <Text style={styles.number}>{baixos}</Text>
        </View>
      </View>

      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Resumo da missão</Text>
        <Text style={styles.text}>
          O NextSpace simula o uso de satélites para identificar riscos de enchentes,
          calor extremo e desastres ambientais em regiões monitoradas.
        </Text>
      </View>

      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Histórico local</Text>
        <Text style={styles.text}>{historico.length} alertas salvos no dispositivo.</Text>
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
    marginBottom: 14,
  },
  text: {
    color: '#AAB3D6',
    lineHeight: 22,
  },
  barItem: {
    marginBottom: 12,
  },
  label: {
    color: '#AAB3D6',
    marginBottom: 6,
  },
  barBg: {
    height: 10,
    backgroundColor: '#252C4A',
    borderRadius: 10,
    overflow: 'hidden',
  },
  bar: {
    height: 10,
    borderRadius: 10,
  },
  number: {
    color: '#FFFFFF',
    marginTop: 4,
    fontWeight: 'bold',
  },
});