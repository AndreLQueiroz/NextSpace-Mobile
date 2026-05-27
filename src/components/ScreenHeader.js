import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/theme';

export default function ScreenHeader({ title, subtitle, tag }) {
  return (
    <View style={styles.container}>
      {tag && <Text style={styles.tag}>{tag}</Text>}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    marginBottom: 22,
  },
  tag: {
    color: colors.blue,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1.4,
    marginBottom: 8,
  },
  title: {
    color: colors.text,
    fontSize: 34,
    fontWeight: '900',
  },
  subtitle: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
  },
});