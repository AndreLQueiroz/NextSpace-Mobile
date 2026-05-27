import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import StatusBadge from './StatusBadge';
import { colors } from '../styles/theme';

export default function RegionCard({ regiao }) {
  return (
    <View style={styles.card}>
      <View style={styles.top}>
        <View style={styles.cityArea}>
          <View style={styles.cityIcon}>
            <Ionicons name="location" size={18} color={colors.blue} />
          </View>

          <View>
            <Text style={styles.city}>{regiao.cidade}</Text>
            <Text style={styles.sub}>Sinal orbital estável</Text>
          </View>
        </View>

        <StatusBadge status={regiao.alerta} />
      </View>

      <View style={styles.signalBar}>
        <View style={styles.signalFill} />
      </View>

      <View style={styles.metrics}>
        <Metric icon="rainy" label="Chuva" value={`${regiao.chuva}mm`} />
        <Metric icon="thermometer" label="Temp." value={`${regiao.temperatura}°C`} />
        <Metric icon="water" label="Umidade" value={`${regiao.umidade}%`} />
      </View>
    </View>
  );
}

function Metric({ icon, label, value }) {
  return (
    <View style={styles.metric}>
      <Ionicons name={icon} size={16} color={colors.blue} />
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 26,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },

  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    alignItems: 'center',
  },

  cityArea: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  cityIcon: {
    width: 38,
    height: 38,
    borderRadius: 14,
    backgroundColor: colors.card2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },

  city: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '900',
  },

  sub: {
    color: colors.muted,
    fontSize: 12,
    marginTop: 3,
  },

  signalBar: {
    height: 8,
    backgroundColor: colors.card2,
    borderRadius: 99,
    marginTop: 16,
    overflow: 'hidden',
  },

  signalFill: {
    width: '78%',
    height: 8,
    backgroundColor: colors.blue,
    borderRadius: 99,
  },

  metrics: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 16,
  },

  metric: {
    flex: 1,
    backgroundColor: colors.card2,
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },

  metricValue: {
    color: colors.text,
    fontWeight: '900',
    fontSize: 16,
    marginTop: 8,
  },

  metricLabel: {
    color: colors.muted,
    fontSize: 11,
    marginTop: 4,
  },
});