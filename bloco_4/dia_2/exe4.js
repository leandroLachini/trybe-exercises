// Exercicios 4

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

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

