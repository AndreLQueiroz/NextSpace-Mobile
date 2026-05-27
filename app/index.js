import { ScrollView, Text, View, StyleSheet } from 'react-native';
import DashboardCard from '../src/components/DashboardCard';
import ScreenHeader from '../src/components/ScreenHeader';
import { useApp } from '../src/context/AppContext';
import { colors } from '../src/styles/theme';

export default function Dashboard() {
  const { regioes, historico } = useApp();

  const criticos = regioes.filter((r) => r.alerta === 'Crítico').length;
  const altos = regioes.filter((r) => r.alerta === 'Alto').length;
  const moderados = regioes.filter((r) => r.alerta === 'Moderado').length;
  const baixos = regioes.filter((r) => r.alerta === 'Baixo').length;

  const mediaTemp = (
    regioes.reduce((total, r) => total + r.temperatura, 0) / regioes.length
  ).toFixed(1);

  const riscoGeral =
    criticos > 0
      ? 'Crítico'
      : altos > 0
      ? 'Alto'
      : moderados > 0
      ? 'Moderado'
      : 'Baixo';

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ScreenHeader
        tag="NEXTSPACE COMMAND CENTER"
        title="Painel Orbital"
        subtitle="Dashboard mobile para monitoramento climático com dados espaciais simulados."
      />

      <View style={styles.hero}>
        <View>
          <Text style={styles.heroLabel}>Status global</Text>
          <Text style={styles.heroTitle}>{riscoGeral}</Text>

          <Text style={styles.heroText}>
            {regioes.length} regiões monitoradas em tempo real simulado.
          </Text>
        </View>

        <View style={styles.orbit}>
          <View style={styles.planet} />
        </View>
      </View>

      <View style={styles.grid}>
        <DashboardCard
          title="Regiões"
          value={regioes.length}
          color={colors.blue}
        />

        <DashboardCard
          title="Críticos"
          value={criticos}
          color={colors.red}
        />

        <DashboardCard
          title="Alertas altos"
          value={altos}
          color={colors.orange}
        />

        <DashboardCard
          title="Temp. média"
          value={`${mediaTemp}°C`}
          color={colors.green}
        />
      </View>

      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Distribuição de alertas</Text>

        <RiskBar
          label="Crítico"
          value={criticos}
          total={regioes.length}
          color={colors.red}
        />

        <RiskBar
          label="Alto"
          value={altos}
          total={regioes.length}
          color={colors.orange}
        />

        <RiskBar
          label="Moderado"
          value={moderados}
          total={regioes.length}
          color={colors.yellow}
        />

        <RiskBar
          label="Baixo"
          value={baixos}
          total={regioes.length}
          color={colors.green}
        />
      </View>

      <View style={styles.missionPanel}>
        <Text style={styles.sectionTag}>OPERAÇÃO ATIVA</Text>

        <Text style={styles.missionTitle}>
          Rede orbital de prevenção
        </Text>

        <Text style={styles.missionText}>
          O NextSpace centraliza dados simulados de satélites para acompanhar
          regiões vulneráveis e antecipar riscos climáticos antes que eles se
          tornem desastres.
        </Text>

        <View style={styles.missionGrid}>
          <View style={styles.missionItem}>
            <Text style={styles.missionNumber}>
              {regioes.length}
            </Text>

            <Text style={styles.missionLabel}>
              regiões rastreadas
            </Text>
          </View>

          <View style={styles.missionItem}>
            <Text style={styles.missionNumber}>
              {historico.length}
            </Text>

            <Text style={styles.missionLabel}>
              alertas simulados
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function RiskBar({ label, value, total, color }) {
  const percent = total === 0 ? 0 : (value / total) * 100;

  return (
    <View style={styles.barItem}>
      <View style={styles.barTop}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.number}>{value}</Text>
      </View>

      <View style={styles.barBg}>
        <View
          style={[
            styles.bar,
            {
              width: `${percent}%`,
              backgroundColor: color,
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: 20,
  },

  hero: {
    backgroundColor: colors.card,
    borderRadius: 28,
    padding: 22,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },

  heroLabel: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '800',
  },

  heroTitle: {
    color: colors.text,
    fontSize: 36,
    fontWeight: '900',
    marginTop: 6,
  },

  heroText: {
    color: colors.muted,
    width: 210,
    marginTop: 8,
    lineHeight: 20,
  },

  orbit: {
    width: 86,
    height: 86,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.9,
  },

  planet: {
    width: 52,
    height: 52,
    borderRadius: 999,
    backgroundColor: colors.purple,
    borderWidth: 8,
    borderColor: colors.blue,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  panel: {
    backgroundColor: colors.card,
    padding: 18,
    borderRadius: 24,
    marginTop: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },

  panelTitle: {
    color: colors.text,
    fontSize: 19,
    fontWeight: '900',
    marginBottom: 14,
  },

  barItem: {
    marginBottom: 14,
  },

  barTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  label: {
    color: colors.muted,
    marginBottom: 7,
    fontWeight: '700',
  },

  number: {
    color: colors.text,
    fontWeight: '900',
  },

  barBg: {
    height: 11,
    backgroundColor: '#252C4A',
    borderRadius: 99,
    overflow: 'hidden',
  },

  bar: {
    height: 11,
    borderRadius: 99,
  },

  missionPanel: {
    backgroundColor: colors.card,
    padding: 20,
    borderRadius: 26,
    marginTop: 18,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 30,
  },

  sectionTag: {
    color: colors.blue,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.5,
    marginBottom: 8,
  },

  missionTitle: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 10,
  },

  missionText: {
    color: colors.muted,
    lineHeight: 23,
    fontSize: 14,
  },

  missionGrid: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 18,
  },

  missionItem: {
    flex: 1,
    backgroundColor: colors.card2,
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },

  missionNumber: {
    color: colors.text,
    fontSize: 26,
    fontWeight: '900',
  },

  missionLabel: {
    color: colors.muted,
    fontSize: 12,
    marginTop: 4,
  },
});