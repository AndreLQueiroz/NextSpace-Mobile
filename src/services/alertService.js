export function calcularAlerta(chuva, temperatura, umidade) {
  if (chuva >= 100 || temperatura >= 42 || umidade <= 20) {
    return 'Crítico';
  }

  if (chuva >= 70 || temperatura >= 38 || umidade <= 30) {
    return 'Alto';
  }

  if (chuva >= 40 || temperatura >= 34 || umidade <= 40) {
    return 'Moderado';
  }

  return 'Baixo';
}

export function getCorAlerta(alerta) {
  switch (alerta) {
    case 'Crítico':
      return '#FF3B3B';
    case 'Alto':
      return '#FF8C42';
    case 'Moderado':
      return '#FFD447';
    default:
      return '#35D07F';
  }
}