const button = document.getElementById('btn');
const divCount = document.getElementById('count');
console.log(button);
button.addEventListener('click', (event) => {
  if (event.target){
    let clickCount = 0;
    clickCount += 1;
    divCount.innerHTML = clickCount;
  }
  console.log(clickCount);
  return clickCount;
 });
