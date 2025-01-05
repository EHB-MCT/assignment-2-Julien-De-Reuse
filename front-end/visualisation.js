document.addEventListener("DOMContentLoaded", () => {
	const radios = document.querySelectorAll('input[name="color"]');
	const svgElements = document.querySelectorAll('rect, polygon'); // Select both rect and polygon elements

	radios.forEach((radio) => {
		radio.addEventListener("change", async () => {
			const dataType = radio.value;
			console.log(`Selected data type: ${dataType}`); // Log the selected data type

			try {
				const response = await fetch(`https://assignment-2-julien-de-reuse-dev5.onrender.com/average-${dataType}`);
				console.log(`Fetching data from https://assignment-2-julien-de-reuse-dev5.onrender.com/average-${dataType}`); // Log the fetch request

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();
				console.log(`Fetched data for ${dataType}:`, data); // Log the fetched data

				svgElements.forEach((element) => {
					let roomNumber = element.getAttribute("id");
					if (roomNumber) {
						roomNumber = roomNumber.replace(/_/g, ' '); // Normalize the room number by replacing underscores with spaces
						console.log(`Checking room: ${roomNumber}`); // Log the room id
						if (!element.classList.contains("Contour")) {
							// Exclude elements with class "Contour"
							const average = data[roomNumber];
							console.log(`Room: ${roomNumber}, Average: ${average}`); // Log the room and average value

							const color = average !== undefined ? getColorFromValue(average) : "black";
							console.log(`Setting color for ${roomNumber}: ${color}`); // Log the color being set
							element.style.fill = color;
						}
					} else {
						console.warn('Element without id attribute found:', element);
					}
				});
			} catch (error) {
				console.error(`Error fetching data for ${dataType}:`, error);
			}
		});
	});

	function getColorFromValue(value) {
		if (value < 2) return "blue";
		if (value < 4) return "green";
		return "red";
	}
});
