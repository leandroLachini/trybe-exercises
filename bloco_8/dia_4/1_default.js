const person = {
    name: "João",
    lastName: "Jr",
    age: 34
};

const { nationality1 = "Brazilian" } = person;
console.log(nationality1); // Brazilian
console.log(person);


const nationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`

const person1 = {
    firstName: "João",
    lastName: "Jr II"
};

const otherPerson = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
};

console.log(nationality(otherPerson)); // Ivan is Russian
console.log(nationality(person1));