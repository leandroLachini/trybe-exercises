const oddsAndEvens = (n) => {
  if (n === 0) {
    return 1;
  }
  let valorFatorial = 1;
  for (let index = 1; index <= n; index += 1) {
    valorFatorial *= index;
  }
  return valorFatorial;
};

const resultado = oddsAndEvens(5);
console.log(resultado);


const fatorialUmaLinha = (n) => fatorial(n);
const resultado2 = fatorialUmaLinha(5);
console.log(fatorialUmaLinha);