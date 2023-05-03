var choreList = [];

	/*	
	function addChore() {
		var choreInput = document.getElementById("chore");
		var frequencyInput = document.getElementById("frequency");
		var chore = choreInput.value;
		var frequency = parseInt(frequencyInput.value, 10);
		choreList.push({chore: chore, frequency: frequency});
		choreInput.value = "";
		frequencyInput.selectedIndex = 0;
		updateChoreList();
		console.log("Updated Chore List:", choreList);
 	}
  

	 function addChore() {
		// Get the chore input and frequency input
		var choreInput = document.getElementById("chore");
		var frequencyInput = document.getElementById("frequency");
	
		// Get the chore and frequency values
		var chore = choreInput.value;
		var frequency = frequencyInput.value;
	
		// Create a new chore object with chore, frequency, and index
		var newChore = {
			chore: chore,
			frequency: frequency,
			index: choreList.length, // Set the index to the current length of the choreList
		};
	
		// Add the new chore object to the choreList
		choreList.push(newChore);
	
		// Clear the input fields
		choreInput.value = "";
		frequencyInput.value = "";
	
		// Update the chore list display
		updateChoreList();
	}
	*/

	function addChore() {
		// Get the chore input and frequency input
		var choreInput = document.getElementById("chore");
		var frequencyInput = document.getElementById("frequency");
	  
		// Get the chore and frequency values
		var chore = choreInput.value;
		var frequency = parseInt(frequencyInput.value, 10); // Make sure the frequency value is a number
	  
		// Create a new chore object with chore, frequency, and index
		var newChore = {
		  chore: chore,
		  frequency: frequency,
		  index: choreList.length, // Set the index to the current length of the choreList
		};
	  
		// Add the new chore object to the choreList
		choreList.push(newChore);
	  
		// Clear the input fields
		choreInput.value = "";
		frequencyInput.value = "";
	  
		// Update the chore list display
		updateChoreList();
	  }
	  
		function clearList() {
			choreList = [];
			updateChoreList();
		}

		function updateChoreList() {
			var choreListElement = document.getElementById("choreList");
			choreListElement.innerHTML = "";
			for (var i = 0; i < choreList.length; i++) {
			  var choreItem = document.createElement("li");
			  choreItem.innerHTML = choreList[i].chore + " (needs to be completed " + getFrequencyText(choreList[i].frequency) + ")";
			  choreListElement.appendChild(choreItem);
			}
		  }
		  

		  function getFrequencyText(frequency) {
			switch (frequency) {
			  case 31:
				return "Daily";
			  case 15:
				return "Every other day";
			  case 8:
				return "Twice a week";
			  case 4:
				return "Once a week";
			  case 2:
				return "Bi-weekly";
			  case 1:
				return "Once a month";
			  default:
				return "";
			}
		  }
		  
		  


		function getChoreList(){
			console.log("Returning Chore List:", choreList);
			return choreList;
		}
		function submitForm(event) {
			event.preventDefault(); // Prevent the form's default submit behavior
			var form = document.getElementsByTagName("form")[0];
			localStorage.setItem("choreList", JSON.stringify(choreList));
			window.location.href = "roomates.html"; // Navigate to roommates.html without form submission
		  }
		  