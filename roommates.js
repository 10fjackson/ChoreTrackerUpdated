        var roommateList = [];

		function addRoommate() {
			var roommateInput = document.getElementById("roommate");
			var roommate = roommateInput.value;
			roommateList.push(roommate);
			roommateInput.value = "";
			updateRoommateList();
		}

		function clearList() {
			roommateList = [];
			updateRoommateList();
		}

		function updateRoommateList() {
			var roommateListElement = document.getElementById("roommateList");
			roommateListElement.innerHTML = "";
			for (var i = 0; i < roommateList.length; i++) {
				var roommateItem = document.createElement("li");
				roommateItem.textContent = roommateList[i];
				roommateListElement.appendChild(roommateItem);
			}
		}

        function submitForm(event) {
			event.preventDefault(); // Prevent the form's default submit behavior
			var form = document.getElementsByTagName("form")[0];
			localStorage.setItem("roommateList", JSON.stringify(roommateList));
			window.location.href = "calendar.html"; // Navigate to calendar.html without form submission
		  }

		function getRoomateList(){
			return roommateList;
		}
		  