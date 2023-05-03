let choreList = JSON.parse(localStorage.getItem("choreList")) || [];
let roommateList = JSON.parse(localStorage.getItem("roommateList")) || [];


window.addEventListener('DOMContentLoaded', () => {
  createCalendar(choreList, roommateList);
});


function createCalendar(choreList, roommateList) {
  const calendarBody = document.getElementById('calendar-body');

  let dayCounter = 1;
  for (let row = 0; row < 5; row++) {
    const calendarRow = document.createElement('div');
    calendarRow.className = 'calendar-row';

    for (let col = 0; col < 7; col++) {
      const calendarCell = document.createElement('div');
      calendarCell.className = 'calendar-cell';

      if (dayCounter <= 31) {
        const dayNumber = document.createElement('div');
        dayNumber.className = 'day-number';
        dayNumber.textContent = dayCounter;
        calendarCell.appendChild(dayNumber);

        choreList.forEach((choreItem, choreIndex) => {
          const frequency = parseInt(choreItem.frequency, 10);
          const interval = 31 / frequency;

          for (let i = 0; i < frequency; i++) {
            const choreDay = Math.ceil((i * interval) + 1);
            if (dayCounter === choreDay) {
              const choreContainer = document.createElement('div');
              choreContainer.className = 'chore-container';

              const choreTable = document.createElement('table');
              choreTable.className = 'chore-table';

              const choreRow = document.createElement('tr');
              const choreName = document.createElement('td');
              choreName.className = 'chore-name';
              choreName.textContent = choreItem.chore;
              choreRow.appendChild(choreName);

              const roommateIndex = (choreIndex + i) % roommateList.length;
              const roommateName = document.createElement('td');
              roommateName.textContent = roommateList[roommateIndex];
              choreRow.appendChild(roommateName);

              choreTable.appendChild(choreRow);
              choreContainer.appendChild(choreTable);
              calendarCell.appendChild(choreContainer);
            }
          }
        });

        dayCounter++;
      }

      calendarRow.appendChild(calendarCell);
    }

    calendarBody.appendChild(calendarRow);
  }
}

createCalendar();
