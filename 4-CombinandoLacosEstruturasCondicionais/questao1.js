function imprimirSofTex() {
    for (let i = 1; i <= 50; i++) {
      if (i % 3 === 0) {
        console.log("Sof");
      } else if (i % 5 === 0) {
        console.log("Tex");
      } else {
        console.log(i);
      }
    }
  }
  