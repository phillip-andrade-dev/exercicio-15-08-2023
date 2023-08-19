function mediadoArray(lista) {
    const soma = lista.reduce((total, num) => total + num, 0);
    return soma / lista.length;
  }
  