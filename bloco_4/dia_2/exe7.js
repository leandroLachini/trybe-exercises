// Exercicios 7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorNumber = maiorNumber;

for(let index=0; index < numbers.length; index++){
    if(numbers[index] < menorNumber){
        menorNumber = numbers[index];
    }
}

console.log(`O MENOR número encontrado é ${menorNumber}`)

