function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  // exercicio 1
  function createCalendarDays() {
    let getDaysList = document.querySelector('#days');
    
    for (let index = 0 ; index < dezDaysList.length; index += 1) {
        let daysList = document.createElement('li');
        let day = dezDaysList[index];

        if (day === 24 | day === 31){
            daysList.className = 'day holiday';
            daysList.innerHTML = day;
            getDaysList.appendChild(daysList);   
        } else if (day === 4 | day === 11 | day === 18) {
            daysList.className = 'day friday';
            daysList.innerHTML = day;
            getDaysList.appendChild(daysList);
        } else if (day === 25) {
            daysList.className = 'day holiday friday';
            daysList.innerHTML = day;
            getDaysList.appendChild(daysList);
        } else {
            daysList.className = 'day';
            daysList.innerHTML = day;
            getDaysList.appendChild(daysList);
        }
    }
  }   
  createCalendarDays();

  // exercicio 2
  function createHollidayButton(buttonName){
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonId = 'btn-holiday';

    newButton.innerHTML = buttonName;
    newButton.id = newButtonId;
    buttonContainer.appendChild(newButton);
  }

  createHollidayButton('Feriados');