function contarLetra(palavra, letra) {
    const regex = new RegExp(letra, "gi");
    const matches = palavra.match(regex);
    
    return matches ? matches.length : 0;
  }
  