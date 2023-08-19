function palindromo(palavra) {
    const limparPalavra = palavra.toLowerCase().replace(/\s/g, "");
    const inverterPalavra = limparPalavra.split("").reverse().join("");
    
    return limparPalavra === inverterPalavra;
  }