function calculaFatorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * calculaFatorial(num - 1);
    }
  }
  
  