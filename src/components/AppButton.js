import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../styles/theme';

export default function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 18,
    alignItems: 'center',
    marginTop: 8,
    backgroundColor: colors.blue,
  },
  text: {
    fontWeight: '900',
    fontSize: 15,
    color: colors.bg,
  },
});