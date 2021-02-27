for (let i = 1; i <= 1000; i++) {
  if (i % 3 === 0 && i % 7 === 0) {
    console.log(i + ': ' + ' Je suis une multiple de 3 et de 7')
  } else {
    if (i % 3 === 0) {
      console.log(i + ': ' + ' Je suis un multiple de 3');
    }
    if (i % 7 === 0) {
      console.log(i + ': ' + ' Je suis un multiple de 7');
    }
  }
}