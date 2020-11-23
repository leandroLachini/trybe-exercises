// longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

const longestWord = (phrase) => {
  const arrayWords = phrase.split(' ');
  let longestWordChecked = arrayWords[0];
  for (let index = 0; index < arrayWords.length; index += 1) {
    if (arrayWords[index] > arrayWords[0]) {
      longestWordChecked = arrayWords[index];
    }
  }
  return longestWordChecked;
  // console.log(arrayWords);
  // console.log(arrayWords[1].length);
  // console.log(longestWordChecked);
}

const phraseInsert = longestWord("Antônio foi no banheiro e não sabemos o que aconteceu");
console.log(phraseInsert);