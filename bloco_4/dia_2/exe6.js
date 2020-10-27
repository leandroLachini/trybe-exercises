// Exercicios 6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numImpar = 0;

for(let index=0; index < numbers.length; index++){
    if(numbers[index] % 2 !== 0){
        numImpar += 1;
    }
}

if(numImpar === 0){
    console.log(`Nenhum numero impar encontrado`)
} else {
    console.log(`Quantidade de numeros impar(es) é/são: ${numImpar}`)
}

