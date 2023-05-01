let choreList = JSON.parse(localStorage.getItem("choreList")) || [];
let roommateList = JSON.parse(localStorage.getItem("roommateList")) || [];


window.addEventListener("DOMContentLoaded", () => {
  createCalendar(choreList);
});

function createCalendar() {
  const calendarBody = document.getElementById('calendar-body');

  /*
  // Hardcoded choreList for testing
  const choreList = [
    { chore: "Do dishes", frequency: "4" },
    { chore: "Clean bathroom", frequency: "2" },
  ];
  */
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

        const choreContainer = document.createElement('div'); // Add this line
        choreContainer.className = 'chore-container'; // Add this line

        choreList.forEach((choreItem) => {
          const frequency = parseInt(choreItem.frequency, 10);
          const interval = 31 / frequency;

          for (let i = 0; i < frequency; i++) {
            const choreDay = Math.ceil((i * interval) + 1);
            if (dayCounter === choreDay) {
              const chore = document.createElement('div');
              chore.className = 'chore';
              chore.textContent = choreItem.chore;
              //calendarCell.appendChild(chore);
              choreContainer.appendChild(chore); // Update this line
            }
          }
        });
        calendarCell.appendChild(choreContainer);
        dayCounter++;
      }

      calendarRow.appendChild(calendarCell);
    }

    calendarBody.appendChild(calendarRow);
  }
}

createCalendar();
