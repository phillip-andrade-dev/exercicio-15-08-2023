function contarVogais(palavra) {
    const vogais = "aeiouAEIOU";
    let contador = 0;
    
    for (let char of palavra) {
      if (vogais.includes(char)) {
        contador++;
      }
    }
    
    return contador;
  }
  
  