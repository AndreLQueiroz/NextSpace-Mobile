import { Text, View, StyleSheet } from 'react-native';
import { getCorAlerta } from '../services/alertService';

export default function StatusBadge({ status }) {
  const color = getCorAlerta(status);

  return (
    <View style={[styles.badge, { backgroundColor: color }]}>
      <Text style={styles.text}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 999,
  },
  text: {
    color: '#050816',
    fontSize: 12,
    fontWeight: '900',
  },
});