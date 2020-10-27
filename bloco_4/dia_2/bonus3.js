// Exercicios BONUS 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let newNumbers = [];

for(let x=0; x < numbers.length; x +=1){
    if (numbers[x + 1]){
        newNumbers.push(numbers[x] * numbers[x + 1])
    } else {
        newNumbers.push(numbers[x] * 2)
    }
}

console.log(newNumbers);

