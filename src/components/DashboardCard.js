import { View, Text, StyleSheet } from 'react-native';

export default function DashboardCard({ title, value, color }) {
  return (
    <View style={[styles.card, { borderColor: color }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={[styles.value, { color }]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#11162A',
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    width: '48%',
    marginBottom: 12,
  },
  title: {
    color: '#AAB3D6',
    fontSize: 13,
  },
  value: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 8,
  },
});