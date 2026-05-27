import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScreenHeader from '../src/components/ScreenHeader';
import { colors } from '../src/styles/theme';

export default function Perfil() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ScreenHeader
        tag="PROJETO GLOBAL SOLUTION"
        title="NextSpace"
        subtitle="Dashboard mobile para prevenção de desastres naturais usando dados espaciais simulados."
      />

      <View style={styles.heroCard}>
        <View style={styles.logoCircle}>
          <Ionicons name="planet" size={42} color={colors.blue} />
        </View>

        <Text style={styles.heroTitle}>
          Space Data for Earth Safety
        </Text>

        <Text style={styles.heroText}>
          O NextSpace conecta tecnologia espacial, dados climáticos e análise de
          risco para apoiar decisões em regiões vulneráveis.
        </Text>
      </View>

      <Section
        icon="rocket"
        title="Missão"
        text="Transformar dados simulados de satélites em alertas visuais para antecipar enchentes, calor extremo e riscos ambientais."
      />

      <Section
        icon="earth"
        title="Conexão com o tema"
        text="A solução se conecta ao ecossistema espacial ao usar o conceito de monitoramento orbital aplicado aos impactos climáticos na Terra."
      />

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Tecnologias utilizadas</Text>

        <Tech name="React Native" />
        <Tech name="Expo" />
        <Tech name="Expo Router" />
        <Tech name="Context API" />
        <Tech name="AsyncStorage" />
        <Tech name="JavaScript" />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Integrantes</Text>

        <Text style={styles.member}>
          Andre Luiz Fernandes de Queiroz | RM: 554503
        </Text>

        <Text style={styles.member}>
          Paulo Poças | RM: 556080
        </Text>

        <Text style={styles.member}>
          Rafael Bocchi | RM: 557603
        </Text>

        <Text style={styles.member}>
          Rafael Oliveira | RM: 554736
        </Text>

        <Text style={styles.member}>
          Marcus Vinicius | RM: 555490
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          NextSpace • Global Solution 2026.1
        </Text>
      </View>
    </ScrollView>
  );
}

function Section({ icon, title, text }) {
  return (
    <View style={styles.card}>
      <View style={styles.sectionHeader}>
        <View style={styles.iconBox}>
          <Ionicons name={icon} size={20} color={colors.blue} />
        </View>

        <Text style={styles.cardTitle}>{title}</Text>
      </View>

      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

function Tech({ name }) {
  return (
    <View style={styles.techItem}>
      <Ionicons
        name="checkmark-circle"
        size={18}
        color={colors.green}
      />

      <Text style={styles.techText}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: 20,
  },

  heroCard: {
    backgroundColor: colors.card,
    borderRadius: 28,
    padding: 22,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    marginBottom: 16,
  },

  logoCircle: {
    width: 86,
    height: 86,
    borderRadius: 999,
    backgroundColor: colors.card2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.blue,
    marginBottom: 16,
  },

  heroTitle: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '900',
    textAlign: 'center',
  },

  heroText: {
    color: colors.muted,
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 10,
  },

  card: {
    backgroundColor: colors.card,
    borderRadius: 24,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: colors.card2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },

  cardTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '900',
  },

  text: {
    color: colors.muted,
    lineHeight: 23,
  },

  techItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card2,
    borderRadius: 14,
    padding: 12,
    marginTop: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },

  techText: {
    color: colors.text,
    marginLeft: 10,
    fontWeight: '700',
  },

  member: {
    color: colors.muted,
    backgroundColor: colors.card2,
    borderRadius: 14,
    padding: 12,
    marginTop: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },

  footer: {
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 30,
  },

  footerText: {
    color: colors.muted,
    fontSize: 12,
  },
});