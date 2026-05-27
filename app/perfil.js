import { ScrollView, Text, View, StyleSheet } from 'react-native';

export default function Perfil() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Sobre o NextSpace</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Proposta</Text>
        <Text style={styles.text}>
          O NextSpace é um aplicativo mobile desenvolvido em React Native + Expo
          para simular o monitoramento climático com dados espaciais.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Objetivo</Text>
        <Text style={styles.text}>
          A solução ajuda a visualizar riscos de desastres naturais, como enchentes,
          ondas de calor e eventos climáticos extremos.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Tecnologias</Text>
        <Text style={styles.item}>React Native</Text>
        <Text style={styles.item}>Expo</Text>
        <Text style={styles.item}>Expo Router</Text>
        <Text style={styles.item}>Context API</Text>
        <Text style={styles.item}>AsyncStorage</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Integrantes</Text>
        <Text style={styles.item}>Amdre Luiz Fernandes de Queiroz | RM: 554503</Text>
        <Text style={styles.item}>Paulo Poças | RM: 556080</Text>
        <Text style={styles.item}>Rafael Bocchi  | RM:  557603</Text>
        <Text style={styles.item}>Rafael  Oliveira | RM: 554736</Text>
        <Text style={styles.item}>Marcus Vinicius  | RM: 555490</Text>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080B1A',
    padding: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#11162A',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#1E2A5A',
  },
  cardTitle: {
    color: '#4EA8FF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    color: '#AAB3D6',
    lineHeight: 22,
  },
  item: {
    color: '#AAB3D6',
    marginTop: 6,
  },
});