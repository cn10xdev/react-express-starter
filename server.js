const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/api/customers", (req, res) => {
	const customers = [
		{ id: 1, name: "Sarthak" },
		{ id: 2, name: "Sagar" },
		{ id: 3, name: "Manan" },
		{ id: 4, name: "Himanshu" },
		{ id: 5, name: "Prashant" },
		{ id: 6, name: "Ayuj" },
	];
	res.json(customers);
});

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
