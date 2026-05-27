import { View, Text, StyleSheet } from 'react-native';
import { getCorAlerta } from '../services/alertService';
import { colors } from '../styles/theme';

export default function RegionCard({ regiao }) {
  const cor = getCorAlerta(regiao.alerta);

  return (
    <View style={styles.card}>
      <View style={styles.top}>
        <View>
          <Text style={styles.city}>{regiao.cidade}</Text>
          <Text style={styles.sub}>Monitoramento orbital ativo</Text>
        </View>

        <View style={[styles.badge, { backgroundColor: cor }]}>
          <Text style={styles.badgeText}>{regiao.alerta}</Text>
        </View>
      </View>

      <View style={styles.metrics}>
        <View style={styles.metric}>
          <Text style={styles.metricValue}>{regiao.chuva}</Text>
          <Text style={styles.metricLabel}>mm chuva</Text>
        </View>

        <View style={styles.metric}>
          <Text style={styles.metricValue}>{regiao.temperatura}°</Text>
          <Text style={styles.metricLabel}>temperatura</Text>
        </View>

        <View style={styles.metric}>
          <Text style={styles.metricValue}>{regiao.umidade}%</Text>
          <Text style={styles.metricLabel}>umidade</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 24,
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
  city: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '900',
  },
  sub: {
    color: colors.muted,
    fontSize: 12,
    marginTop: 4,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 999,
  },
  badgeText: {
    color: '#050816',
    fontWeight: '900',
    fontSize: 12,
  },
  metrics: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 18,
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
    fontSize: 18,
    fontWeight: '900',
  },
  metricLabel: {
    color: colors.muted,
    fontSize: 11,
    marginTop: 4,
  },
});