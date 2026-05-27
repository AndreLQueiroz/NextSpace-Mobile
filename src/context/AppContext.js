import { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { regioesIniciais } from '../data/mockData';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [regioes, setRegioes] = useState(regioesIniciais);
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    carregarHistorico();
  }, []);

  async function carregarHistorico() {
    const dados = await AsyncStorage.getItem('@nextspace_historico');

    if (dados) {
      setHistorico(JSON.parse(dados));
    }
  }

  async function adicionarHistorico(alerta) {
    const novoHistorico = [alerta, ...historico];

    setHistorico(novoHistorico);
    await AsyncStorage.setItem('@nextspace_historico', JSON.stringify(novoHistorico));
  }

  return (
    <AppContext.Provider value={{ regioes, setRegioes, historico, adicionarHistorico }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}