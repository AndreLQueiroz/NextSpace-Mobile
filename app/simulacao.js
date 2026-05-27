import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ScreenHeader from '../src/components/ScreenHeader';
import AppButton from '../src/components/AppButton';
import StatusBadge from '../src/components/StatusBadge';
import { calcularAlerta } from '../src/services/alertService';
import { useApp } from '../src/context/AppContext';
import { colors } from '../src/styles/theme';

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
      setErro('Preencha todos os campos para gerar o alerta.');
      return;
    }

    const chuvaNum = Number(chuva);
    const tempNum = Number(temperatura);
    const umidadeNum = Number(umidade);

    if (isNaN(chuvaNum) || isNaN(tempNum) || isNaN(umidadeNum)) {
      setErro('Chuva, temperatura e umidade precisam ser números.');
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
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ScreenHeader
        tag="SIMULAÇÃO DE RISCO"
        title="Gerar Alerta"
        subtitle="Insira dados climáticos simulados para calcular o nível de risco da região."
      />

      <View style={styles.formCard}>
        <Input
          icon="location"
          label="Cidade monitorada"
          placeholder="Ex: São Paulo"
          value={cidade}
          onChangeText={setCidade}
        />

        <View style={styles.row}>
          <Input
            icon="rainy"
            label="Chuva"
            placeholder="mm"
            value={chuva}
            onChangeText={setChuva}
            keyboardType="numeric"
            half
          />

          <Input
            icon="thermometer"
            label="Temperatura"
            placeholder="°C"
            value={temperatura}
            onChangeText={setTemperatura}
            keyboardType="numeric"
            half
          />
        </View>

        <Input
          icon="water"
          label="Umidade"
          placeholder="%"
          value={umidade}
          onChangeText={setUmidade}
          keyboardType="numeric"
        />

        {erro ? <Text style={styles.error}>{erro}</Text> : null}

        <AppButton title="Calcular alerta orbital" onPress={gerarAlerta} />
      </View>

      {resultado && (
        <View style={styles.resultCard}>
          <Text style={styles.resultTag}>RESULTADO DA ANÁLISE</Text>

          <View style={styles.resultTop}>
            <View>
              <Text style={styles.resultCity}>{resultado.cidade}</Text>
              <Text style={styles.resultDate}>{resultado.data}</Text>
            </View>

            <StatusBadge status={resultado.alerta} />
          </View>

          <View style={styles.metrics}>
            <Metric label="Chuva" value={`${resultado.chuva}mm`} />
            <Metric label="Temp." value={`${resultado.temperatura}°C`} />
            <Metric label="Umidade" value={`${resultado.umidade}%`} />
          </View>
        </View>
      )}
    </ScrollView>
  );
}

function Input({ icon, label, half, ...props }) {
  return (
    <View style={[styles.inputGroup, half && styles.half]}>
      <Text style={styles.inputLabel}>{label}</Text>

      <View style={styles.inputBox}>
        <Ionicons name={icon} size={18} color={colors.blue} />
        <TextInput
          {...props}
          placeholderTextColor="#69739C"
          style={styles.input}
        />
      </View>
    </View>
  );
}

function Metric({ label, value }) {
  return (
    <View style={styles.metric}>
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
  formCard: {
    backgroundColor: colors.card,
    borderRadius: 26,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  inputGroup: {
    marginBottom: 14,
  },
  half: {
    flex: 1,
  },
  inputLabel: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 7,
  },
  inputBox: {
    backgroundColor: colors.card2,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    color: colors.text,
    padding: 14,
    flex: 1,
    fontSize: 15,
  },
  error: {
    color: colors.red,
    marginBottom: 6,
    fontWeight: '700',
  },
  resultCard: {
    backgroundColor: colors.card,
    borderRadius: 26,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: 18,
    marginBottom: 30,
  },
  resultTag: {
    color: colors.blue,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.3,
    marginBottom: 12,
  },
  resultTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultCity: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '900',
  },
  resultDate: {
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
    fontSize: 17,
  },
  metricLabel: {
    color: colors.muted,
    fontSize: 11,
    marginTop: 4,
  },
});