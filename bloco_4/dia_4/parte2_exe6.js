// PARTE 2 - Exercicio 6

function somaNumeros(numeros) {
  let total = 0;
  for (let index = 1; index <= numeros; index++) {
    total = total + index;
  }
  return total;
}
console.log(somaNumeros(5));