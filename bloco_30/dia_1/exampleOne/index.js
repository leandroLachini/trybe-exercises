const GRADE_DICT = {
  0.9: 'A',
  0.8: 'B',
  0.7: 'C',
  0.6: 'D',
  0.1: 'E',
};

const gradeKeys = Object.keys(GRADE_DICT);

// console.log(gradeKeys);

/* Função menor para remover o uso excessivo de `if{}else`s */
const getGradeLetter = (gradeNumber) => {
  let letterGrade = 'F';

  for (let i = 0; i < gradeKeys.length; i += 1) {
    if (gradeNumber >= gradeKeys[i]) {
      letterGrade = GRADE_DICT[gradeKeys[i]];
      break;
    }
  }

  return letterGrade;
};

/* Coletar notas */
const getLetterGrades = ({ name, grade }) => ({
  name,
  grade,
  letterGrade: getGradeLetter(grade) });

/* "Converter" */
const percentageGradesIntoLetters = ({ name, disciplines }) => ({
  name,
  disciplines: disciplines.map(getLetterGrades) });
  

/* "Converter" */
// const percentageGradesIntoLetters = ({ name, disciplines }) => ({
//   name,
//   disciplines: disciplines.map(({ name, grade }) => {
//     // console.log(disciplines);
//     let letterGrade;

//     if (grade >= 0.9) letterGrade = 'A';
//     else if (grade >= 0.8) letterGrade = 'B';
//     else if (grade >= 0.7) letterGrade = 'C';
//     else if (grade >= 0.6) letterGrade = 'D';
//     else if (grade >= 0.1) letterGrade = 'E';
//     else letterGrade = 'F';

//     const result = { name, grade, letterGrade };
//     console.log(result);
//     return result;

//     // return { name, grade, letterGrade };
//   })});

// /* "Determinar" */
// const approvedStudents = ({ disciplines }) => {
//   const result = disciplines.every(({ grade }) => grade > 0.7);
//   console.log(result);
//   return result;
// };

// /* "Atualizar" */
// const updateApprovalData = ({ name: studentName, disciplines }) => {
//   console.log(`A pessoa com nome ${studentName} foi aprovada!`);

//   disciplines.map(({ name, letterGrade }) =>
//     console.log(`${name}: ${letterGrade}`));
// };

function setApproved(students) {
  console.log(students);
  students
    .map(percentageGradesIntoLetters);
    // .filter(approvedStudents)
    // .map(updateApprovalData);
}

/* Exemplo de execução */
const students = [
  {
    name: 'Lee',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.6 },
    ],
  },
  {
    name: 'Clementine',
    disciplines: [
      { name: 'matemática', grade: 0.8 },
      { name: 'história', grade: 0.9 },
    ],
  },
];

setApproved(students);

/*
  Não se esqueça que é necessário exportar ao final as
  funções para que você possa testa-las de forma unitária
*/
module.exports = {
  percentageGradesIntoLetters,
  // approvedStudents,
  // updateApprovalData,
  setApproved,
};
