import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScreenHeader from '../src/components/ScreenHeader';
import RegionCard from '../src/components/RegionCard';
import { useApp } from '../src/context/AppContext';
import { colors } from '../src/styles/theme';

export default function Monitoramento() {
  const { regioes } = useApp();

  const criticos = regioes.filter((r) => r.alerta === 'Crítico').length;
  const altos = regioes.filter((r) => r.alerta === 'Alto').length;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ScreenHeader
        tag="MONITORAMENTO ORBITAL"
        title="Regiões"
        subtitle="Acompanhamento de áreas vulneráveis com dados climáticos simulados."
      />

      <View style={styles.overview}>
        <View style={styles.overviewIcon}>
          <Ionicons name="planet" size={32} color={colors.blue} />
        </View>

        <View style={styles.overviewContent}>
          <Text style={styles.overviewTitle}>Rede ativa</Text>
          <Text style={styles.overviewText}>
            {regioes.length} regiões rastreadas • {criticos + altos} em atenção
          </Text>
        </View>
      </View>

      <View style={styles.sectionTop}>
        <Text style={styles.sectionTitle}>Áreas monitoradas</Text>
        <Text style={styles.sectionCount}>{regioes.length}</Text>
      </View>

      {regioes.map((regiao) => (
        <RegionCard key={regiao.id} regiao={regiao} />
      ))}

      <View style={styles.bottomSpace} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: 20,
  },

  overview: {
    backgroundColor: colors.card,
    borderRadius: 28,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
  },

  overviewIcon: {
    width: 64,
    height: 64,
    borderRadius: 22,
    backgroundColor: colors.card2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },

  overviewContent: {
    flex: 1,
  },

  overviewTitle: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '900',
  },

  overviewText: {
    color: colors.muted,
    marginTop: 4,
    lineHeight: 20,
  },

  sectionTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },

  sectionTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '900',
  },

  sectionCount: {
    color: colors.bg,
    backgroundColor: colors.blue,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    fontWeight: '900',
  },

  bottomSpace: {
    height: 30,
  },
});