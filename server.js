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

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
