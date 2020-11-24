const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

console.log('requesito 1');
const addTurno = (objetc, key, valor) => {
  objetc[key] = valor;
}
addTurno(lesson2, 'turno', 'manhã');
console.log(lesson2);

console.log('-------------------');
console.log('requesito 2');
const listKeys = (objetc) => {
  const listKeysResult = Object.keys(objetc);
  return listKeysResult;
}
console.log(listKeys(lesson2));

console.log('-------------------');
console.log('requesito 3');
const sizeObject = (objetc) => {
  const size = Object.keys(objetc).length;
  return size;
}
console.log(sizeObject(lesson3));

console.log('-------------------');
console.log('requesito 4');
const listValueObject = (objetc) => {
  const listValue = Object.values(objetc);
  return listValue;
}
console.log(listValueObject(lesson3));

console.log('-------------------');
console.log('requesito 5');
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

console.log('-------------------');
console.log('requesito 6');
const getNumeroEstudades = (objetc) => {
  let contaEstudandes = 0;
  const arrayObject = Object.keys(objetc);
  for (i in arrayObject) {
    contaEstudandes += objetc[arrayObject[i]].numeroEstudantes;
  }
  return contaEstudandes;
}
console.log(getNumeroEstudades(allLessons));
