// const oddsAndEvens = (array) => {
//   const ascendingNum = array.sort();
//   return ascendingNum;
// };

// Seu código aqui.

// console.log(ascendingNum);

// const x = oddsAndEvens([13, 3, 4, 10, 7, 2]);
// console.log(x);


const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  oddsAndEvens.sort((a, b) => a - b); 
  console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente !`);
  