// Exercicios Aula Estudo

let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

for(let pos=0; pos<valores.length; pos++){
    console.log(`A posicao ${pos} tem um valor ${valores[pos]}`)
}


for(let pos in valores){
    console.log(valores[pos])
}

// Exercicios 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]


for(let index=0; index < numbers.length; index++){
    console.log(`A posicao ${index} tem um valor ${numbers[index]}`)
}

// Exercicios 2

let somaNumbers=0;

for(let index=0; index < numbers.length; index++){
    somaNumbers += numbers[index];
}
console.log(`A soma total é ${somaNumbers}`)

// Exercicios 3

let totalNumbers=0;

for(let index=0; index < numbers.length; index++){
    totalNumbers += numbers[index];
}

let media= totalNumbers / numbers.length

console.log(`A media aritmetica é ${media}`)


// Exercicios 4

let totNumbers=0;

for(let index=0; index < numbers.length; index++){
    totNumbers += numbers[index];
}

let media1= totNumbers / numbers.length

if (media1 > 20){
    console.log(`A media aritmetica é MAIOR que 20`)
} else{
    console.log(`A media aritmetica é MENOR ou IGUAL a 20`)
}

// Exercicios 5

let maiorNumber = 0;

for(let index=0; index < numbers.length; index++){
    if(numbers[index] > maiorNumber){
        maiorNumber = numbers[index];
    }
}

console.log(`O MAIOR número encontrado é ${maiorNumber}`)

// Exercicios 6

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


// Exercicios 7

let menorNumber = maiorNumber;

for(let index=0; index < numbers.length; index++){
    if(numbers[index] < menorNumber){
        menorNumber = numbers[index];
    }
}

console.log(`O MENOR número encontrado é ${menorNumber}`)

// Exercicios 8

let num1A25 = [];

for (let primeiroNum=1; primeiroNum<=25; primeiroNum +=1){
    num1A25.push(primeiroNum);
}

console.log(num1A25);

// Exercicios 9

for (let primeiroNum=0; primeiroNum<=num1A25.length; primeiroNum +=1){
    console.log(num1A25[primeiroNum] / 2);
}
