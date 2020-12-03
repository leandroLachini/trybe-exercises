const numbers = [1, 2, 3];

const newArray = [4, 5, 6, ...numbers];
console.log(newArray); // [ 1, 2, 3, 4, 5, 6 ];
console.log(numbers); // [ 1, 2, 3 ];

//----------------------------------------------------------

// Copiar
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'abacaxi', 'manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'morango', 'leite condensado'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));