import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScreenHeader from '../src/components/ScreenHeader';
import StatusBadge from '../src/components/StatusBadge';
import { useApp } from '../src/context/AppContext';
import { colors } from '../src/styles/theme';

export default function Historico() {
  const { historico } = useApp();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ScreenHeader
        tag="REGISTROS LOCAIS"
        title="Histórico"
        subtitle="Alertas gerados pelas simulações e armazenados localmente no dispositivo."
      />

      <View style={styles.summaryCard}>
        <View style={styles.summaryIcon}>
          <Ionicons name="time" size={28} color={colors.blue} />
        </View>

        <View>
          <Text style={styles.summaryNumber}>{historico.length}</Text>
          <Text style={styles.summaryText}>alertas registrados</Text>
        </View>
      </View>

      {historico.length === 0 ? (
        <View style={styles.emptyCard}>
          <Ionicons name="file-tray-outline" size={42} color={colors.muted} />
          <Text style={styles.emptyTitle}>Nenhum alerta ainda</Text>
          <Text style={styles.emptyText}>
            Gere uma simulação para que o registro apareça nesta tela.
          </Text>
        </View>
      ) : (
        historico.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardTop}>
              <View>
                <Text style={styles.city}>{item.cidade}</Text>
                <Text style={styles.date}>{item.data}</Text>
              </View>

              <StatusBadge status={item.alerta} />
            </View>

            <View style={styles.metrics}>
              <Metric icon="rainy" label="Chuva" value={`${item.chuva}mm`} />
              <Metric icon="thermometer" label="Temp." value={`${item.temperatura}°C`} />
              <Metric icon="water" label="Umidade" value={`${item.umidade}%`} />
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
}

function Metric({ icon, label, value }) {
  return (
    <View style={styles.metric}>
      <Ionicons name={icon} size={17} color={colors.blue} />
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: 20,
  },

  summaryCard: {
    backgroundColor: colors.card,
    borderRadius: 26,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },

  summaryIcon: {
    width: 58,
    height: 58,
    borderRadius: 20,
    backgroundColor: colors.card2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },

  summaryNumber: {
    color: colors.text,
    fontSize: 30,
    fontWeight: '900',
  },

  summaryText: {
    color: colors.muted,
    marginTop: 2,
  },

  emptyCard: {
    backgroundColor: colors.card,
    borderRadius: 26,
    padding: 28,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },

  emptyTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '900',
    marginTop: 14,
  },

  emptyText: {
    color: colors.muted,
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 8,
  },

  card: {
    backgroundColor: colors.card,
    borderRadius: 24,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },

  cardTop: {
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

  date: {
    color: colors.muted,
    marginTop: 4,
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