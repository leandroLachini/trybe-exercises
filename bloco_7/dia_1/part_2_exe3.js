const button = document.getElementById('btn');
const divCount = document.getElementById('count');
// console.log(button);
let clickCount = 0;
button.addEventListener('click', (event) => {
  if (event.target){
    clickCount += 1;
    divCount.innerHTML = clickCount;
  }
  // console.log(clickCount);
  return clickCount;
 });
