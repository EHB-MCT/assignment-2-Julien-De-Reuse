function updateRoomNumbers() {
	const roomType = document.getElementById("roomType").value;
	const roomNumber = document.getElementById("roomNumber");

	// Clear previous options
	roomNumber.innerHTML = "";

	let options = [];
	if (roomType === "classroom") {
		options = [
			"B046", "B101", "B102a", "B102b-c", "B108", "B103", "B113", "B119",
			"B120", "Expertlab", "B201", "B205", "B206", "B208a", "not in the list"
		];
	} else if (roomType === "auditorium") {
		options = [
			"Aula 1", "Aula 2", "Aula 3", "Aula 4", "Aula 5", "Aula 6", "Aula 7", "Aula 8","not in the list"
		];
	} else if (roomType === "else") {
		options = ["Fablab", "MediaLab", "not in the list"];
	}

	options.forEach((number) => {
		const option = document.createElement("option");
		option.value = number;
		option.textContent = number;
		roomNumber.appendChild(option);
	});
}

// Initialize room numbers on page load
window.onload = function() {
	updateRoomNumbers();
	
	// Add event listener for roomType changes
	document.getElementById("roomType").addEventListener("change", updateRoomNumbers);
};

let userEmail = "";

document.getElementById("login-form").addEventListener("submit", function (event) {
	event.preventDefault();
	const emailInput = document.getElementById("email");
	userEmail = emailInput.value;
	console.log("User email:", userEmail); // Debug log
	document.getElementById("login-container").style.display = "none";
	document.getElementById("form-container").style.display = "block";
});

document.getElementById("comfortForm").addEventListener("submit", async function (event) {
	event.preventDefault();

	const formData = new FormData(this);
	const data = {};
	formData.forEach((value, key) => {
		data[key] = value;
	});
	data.email = userEmail; // Add email to form data
	console.log("Form data to be submitted:", data); // Debug log

	try {
		const response = await fetch("https://assignment-2-julien-de-reuse-dev5.onrender.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (response.ok) {
			alert("Mercikes voor het invullen.");
		} else {
			alert("Er is fout gebeurt");
		}
	} catch (error) {
		console.error("Error:", error);
		alert("Error submitting survey");
	}
});
