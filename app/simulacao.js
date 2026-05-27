import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { calcularAlerta, getCorAlerta } from '../src/services/alertService';
import { useApp } from '../src/context/AppContext';

export default function Simulacao() {
  const { adicionarHistorico } = useApp();

  const [cidade, setCidade] = useState('');
  const [chuva, setChuva] = useState('');
  const [temperatura, setTemperatura] = useState('');
  const [umidade, setUmidade] = useState('');
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState('');

  async function gerarAlerta() {
    if (!cidade || !chuva || !temperatura || !umidade) {
      setErro('Preencha todos os campos.');
      return;
    }

    const chuvaNum = Number(chuva);
    const tempNum = Number(temperatura);
    const umidadeNum = Number(umidade);

    if (isNaN(chuvaNum) || isNaN(tempNum) || isNaN(umidadeNum)) {
      setErro('Use apenas números nos dados climáticos.');
      return;
    }

    const alerta = calcularAlerta(chuvaNum, tempNum, umidadeNum);

    const novoAlerta = {
      id: Date.now().toString(),
      cidade,
      chuva: chuvaNum,
      temperatura: tempNum,
      umidade: umidadeNum,
      alerta,
      data: new Date().toLocaleString('pt-BR'),
    };

    setResultado(novoAlerta);
    setErro('');
    await adicionarHistorico(novoAlerta);

    setCidade('');
    setChuva('');
    setTemperatura('');
    setUmidade('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simular Alerta</Text>

      <TextInput
        style={styles.input}
        placeholder="Cidade"
        placeholderTextColor="#6F789D"
        value={cidade}
        onChangeText={setCidade}
      />

      <TextInput
        style={styles.input}
        placeholder="Chuva em mm"
        placeholderTextColor="#6F789D"
        keyboardType="numeric"
        value={chuva}
        onChangeText={setChuva}
      />

      <TextInput
        style={styles.input}
        placeholder="Temperatura °C"
        placeholderTextColor="#6F789D"
        keyboardType="numeric"
        value={temperatura}
        onChangeText={setTemperatura}
      />

      <TextInput
        style={styles.input}
        placeholder="Umidade %"
        placeholderTextColor="#6F789D"
        keyboardType="numeric"
        value={umidade}
        onChangeText={setUmidade}
      />

      {erro ? <Text style={styles.erro}>{erro}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={gerarAlerta}>
        <Text style={styles.buttonText}>Gerar alerta</Text>
      </TouchableOpacity>

      {resultado && (
        <View style={styles.resultado}>
          <Text style={styles.resultTitle}>Resultado</Text>
          <Text style={[styles.alerta, { color: getCorAlerta(resultado.alerta) }]}>
            {resultado.alerta}
          </Text>
          <Text style={styles.text}>{resultado.cidade}</Text>
        </View>
      )}
    </View>
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
  input: {
    backgroundColor: '#11162A',
    color: '#FFFFFF',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#1E2A5A',
  },
  button: {
    backgroundColor: '#4EA8FF',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#080B1A',
    fontWeight: 'bold',
    fontSize: 16,
  },
  erro: {
    color: '#FF3B3B',
    marginBottom: 8,
  },
  resultado: {
    backgroundColor: '#11162A',
    padding: 18,
    borderRadius: 16,
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#1E2A5A',
  },
  resultTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  alerta: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 8,
  },
  text: {
    color: '#AAB3D6',
    marginTop: 6,
  },
});