function frequenciaNoArray(lista) {
    const frequenciaMap = new Map();
    
    for (let num of lista) {
      frequenciaMap.set(num, (frequenciaMap.get(num) || 0) + 1);
    }
    
    let valorMaisRepetido;
    let qtdaRepeticao = 0;
    
    for (let [num, frequencia] of frequenciaMap) {
      if (frequencia > qtdaRepeticao) {
        qtdaRepeticao = frequencia;
        valorMaisRepetido = num;
      }
    }
    
    return valorMaisRepetido;
  }
  