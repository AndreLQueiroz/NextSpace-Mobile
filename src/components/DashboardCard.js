import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/theme';

export default function DashboardCard({ title, value, color }) {
  return (
    <View style={[styles.card, { borderColor: color }]}>
      <View style={[styles.glow, { backgroundColor: color }]} />
      <Text style={styles.title}>{title}</Text>
      <Text style={[styles.value, { color }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderRadius: 22,
    padding: 16,
    width: '48%',
    marginBottom: 14,
    overflow: 'hidden',
  },
  glow: {
    width: 60,
    height: 60,
    borderRadius: 40,
    opacity: 0.16,
    position: 'absolute',
    right: -16,
    top: -16,
  },
  title: {
    color: colors.muted,
    fontSize: 13,
  },
  value: {
    fontSize: 28,
    fontWeight: '900',
    marginTop: 8,
  },
});