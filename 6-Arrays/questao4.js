function addArraysElements(lista1, lista2) {
    const arrayResultante = [];
    
    for (let i = 0; i < lista1.length; i++) {
      arrayResultante.push(lista1[i] + lista2[i]);
    }
    
    return arrayResultante;
  }
  