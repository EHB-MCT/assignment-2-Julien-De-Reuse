function updateRoomNumbers() {
	const roomType = document.getElementById("roomType").value;
	const roomNumber = document.getElementById("roomNumber");

	// Clear previous options
	roomNumber.innerHTML = "";

	let options = [];
	if (roomType === "classroom") {
		options = ["B046", "101", "102a", "102b", "102c", "108", "103", "113", "119", "120", "123 (Expertlab)", "201", "205", "206", "208a", "not in the list"];
	} else if (roomType === "auditorium") {
		options = ["Aula 1", "Aula 2", "Aula 3", "Aula 4", "Aula 5", "Aula 6", "Aula 7", "not in the list"];
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
window.onload = updateRoomNumbers;

document.getElementById("comfortForm").addEventListener("submit", async function (event) {
	event.preventDefault();

	const formData = new FormData(this);
	const data = {};
	formData.forEach((value, key) => (data[key] = value));

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
