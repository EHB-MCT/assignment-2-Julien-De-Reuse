const password = require("./password.js");
const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient } = require("mongodb");

const client = new MongoClient(`mongodb+srv://Julder:${password}@webii.ftxid82.mongodb.net/?retryWrites=true&w=majority&appName=WebII`);
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.post("/submit", async (req, res) => {
	try {
		await client.connect();
		const database = client.db("DEV5-Challenge_2");
		const surveys = database.collection("data");

		const survey = req.body;
		console.log("Received survey data:", survey); // Log the received data

		const result = await surveys.insertOne(survey);
		console.log("Insert result:", result); // Log the result of the insert operation

		res.status(200).send("Survey submitted successfully");
	} catch (error) {
		console.error("Error submitting survey:", error);
		res.status(500).send("Server error");
	} finally {
		await client.close();
	}
});

app.get("/data", async (req, res) => {
	try {
		await client.connect();
		const database = client.db("DEV5-Challenge_2");
		const surveys = database.collection("data");

		const data = await surveys.find({}).toArray();
		console.log("Retrieved data:", data); // Log the retrieved data

		res.status(200).json(data);
	} catch (error) {
		console.error("Error retrieving data:", error);
		res.status(500).send("Server error");
	} finally {
		await client.close();
	}
});

app.get("/average-temperature", async (req, res) => {
	try {
		await client.connect();
		const database = client.db("DEV5-Challenge_2");
		const surveys = database.collection("data");

		const data = await surveys.find({}).toArray();
		console.log("Retrieved data:", data); // Log the retrieved data

		// Calculate average temperature per room
		const roomTemperatures = {};
		data.forEach((survey) => {
			const room = survey.roomNumber;
			const temperature = parseFloat(survey.temperature);

			if (room && !isNaN(temperature)) {
				if (!roomTemperatures[room]) {
					roomTemperatures[room] = { total: 0, count: 0 };
				}
				roomTemperatures[room].total += temperature;
				roomTemperatures[room].count += 1;
			}
		});

		const averageTemperatures = {};
		for (const room in roomTemperatures) {
			averageTemperatures[room] = roomTemperatures[room].total / roomTemperatures[room].count;
		}

		console.log("Average temperatures:", averageTemperatures); // Log the average temperatures

		res.status(200).json(averageTemperatures);
	} catch (error) {
		console.error("Error retrieving data:", error);
		res.status(500).send("Server error");
	} finally {
		await client.close();
	}
});

app.get("/average-airquality", async (req, res) => {
	try {
		await client.connect();
		const database = client.db("DEV5-Challenge_2");
		const surveys = database.collection("data");

		const data = await surveys.find({}).toArray();
		console.log("Retrieved data:", data); // Log the retrieved data

		// Calculate average air quality per room
		const roomAirQuality = {};
		data.forEach((survey) => {
			const room = survey.roomNumber;
			const airQuality = parseFloat(survey.airQuality);

			if (room && !isNaN(airQuality)) {
				if (!roomAirQuality[room]) {
					roomAirQuality[room] = { total: 0, count: 0 };
				}
				roomAirQuality[room].total += airQuality;
				roomAirQuality[room].count += 1;
			}
		});

		const averageAirQuality = {};
		for (const room in roomAirQuality) {
			averageAirQuality[room] = roomAirQuality[room].total / roomAirQuality[room].count;
		}

		console.log("Average air quality:", averageAirQuality); // Log the average air quality

		res.status(200).json(averageAirQuality);
	} catch (error) {
		console.error("Error retrieving data:", error);
		res.status(500).send("Server error");
	} finally {
		await client.close();
	}
});

app.get("/average-noise", async (req, res) => {
	try {
		await client.connect();
		const database = client.db("DEV5-Challenge_2");
		const surveys = database.collection("data");

		const data = await surveys.find({}).toArray();
		console.log("Retrieved data:", data); // Log the retrieved data

		// Calculate average noise per room
		const roomNoise = {};
		data.forEach((survey) => {
			const room = survey.roomNumber;
			const noise = parseFloat(survey.noise);

			if (room && !isNaN(noise)) {
				if (!roomNoise[room]) {
					roomNoise[room] = { total: 0, count: 0 };
				}
				roomNoise[room].total += noise;
				roomNoise[room].count += 1;
			}
		});

		const averageNoise = {};
		for (const room in roomNoise) {
			averageNoise[room] = roomNoise[room].total / roomNoise[room].count;
		}

		console.log("Average noise:", averageNoise); // Log the average noise

		res.status(200).json(averageNoise);
	} catch (error) {
		console.error("Error retrieving data:", error);
		res.status(500).send("Server error");
	} finally {
		await client.close();
	}
});

app.get("/average-seating", async (req, res) => {
	try {
		await client.connect();
		const database = client.db("DEV5-Challenge_2");
		const surveys = database.collection("data");

		const data = await surveys.find({}).toArray();
		console.log("Retrieved data:", data); // Log the retrieved data

		// Calculate average seating per room
		const roomSeating = {};
		data.forEach((survey) => {
			const room = survey.roomNumber;
			const seating = parseFloat(survey.seating);

			if (room && !isNaN(seating)) {
				if (!roomSeating[room]) {
					roomSeating[room] = { total: 0, count: 0 };
				}
				roomSeating[room].total += seating;
				roomSeating[room].count += 1;
			}
		});

		const averageSeating = {};
		for (const room in roomSeating) {
			averageSeating[room] = roomSeating[room].total / roomSeating[room].count;
		}

		console.log("Average seating:", averageSeating); // Log the average seating

		res.status(200).json(averageSeating);
	} catch (error) {
		console.error("Error retrieving data:", error);
		res.status(500).send("Server error");
	} finally {
		await client.close();
	}
});

app.get("/average-people", async (req, res) => {
	try {
		await client.connect();
		const database = client.db("DEV5-Challenge_2");
		const surveys = database.collection("data");

		const data = await surveys.find({}).toArray();
		console.log("Retrieved data:", data); // Log the retrieved data

		// Calculate average people quantity per room
		const roomPeopleQuantity = {};
		data.forEach((survey) => {
			const room = survey.roomNumber;
			const peopleQuantity = parseFloat(survey.peopleQuantity);

			if (room && !isNaN(peopleQuantity)) {
				if (!roomPeopleQuantity[room]) {
					roomPeopleQuantity[room] = { total: 0, count: 0 };
				}
				roomPeopleQuantity[room].total += peopleQuantity;
				roomPeopleQuantity[room].count += 1;
			}
		});

		const averagePeopleQuantity = {};
		for (const room in roomPeopleQuantity) {
			averagePeopleQuantity[room] = roomPeopleQuantity[room].total / roomPeopleQuantity[room].count;
		}

		console.log("Average people quantity:", averagePeopleQuantity); // Log the average people quantity

		res.status(200).json(averagePeopleQuantity);
	} catch (error) {
		console.error("Error retrieving data:", error);
		res.status(500).send("Server error");
	} finally {
		await client.close();
	}
});

app.get("/average-peopleQuantity", async (req, res) => {
    try {
        await client.connect();
        const database = client.db("DEV5-Challenge_2");
        const surveys = database.collection("data");

        const data = await surveys.find({}).toArray();
        console.log("Retrieved data:", data); // Log the retrieved data

        // Calculate average people quantity per room
        const roomPeopleQuantity = {};
        data.forEach((survey) => {
            const room = survey.roomNumber;
            const peopleQuantity = parseFloat(survey.peopleQuantity);

            if (room && !isNaN(peopleQuantity)) {
                if (!roomPeopleQuantity[room]) {
                    roomPeopleQuantity[room] = { total: 0, count: 0 };
                }
                roomPeopleQuantity[room].total += peopleQuantity;
                roomPeopleQuantity[room].count += 1;
            }
        });

        const averagePeopleQuantity = {};
        for (const room in roomPeopleQuantity) {
            averagePeopleQuantity[room] = roomPeopleQuantity[room].total / roomPeopleQuantity[room].count;
        }

        console.log("Average people quantity:", averagePeopleQuantity); // Log the average people quantity

        res.status(200).json(averagePeopleQuantity);
    } catch (error) {
        console.error("Error retrieving data:", error);
        res.status(500).send("Server error");
    } finally {
        await client.close();
    }
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
