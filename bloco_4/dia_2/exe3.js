// Exercicios 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let totalNumbers=0;

for(let index=0; index < numbers.length; index++){
    totalNumbers += numbers[index];
}

let media= totalNumbers / numbers.length

console.log(`A media aritmetica é ${media}`)

