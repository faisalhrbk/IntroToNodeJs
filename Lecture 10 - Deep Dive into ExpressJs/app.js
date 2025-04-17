//external module
const express = require("express");
//local modules

const app = express();
//middleware 
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
	res.send(`<h1> Welcome to airbnb</h1>
		<a href="/add-home">Add Home</a>
		`);
});
app.get("/add-home", (req, res, next) => {
	res.send(`<h1> Register your Home Here!</h1>
	<form action="/add-home" method="post">
	<input type="text" name="houseName" placeholder="Enter Your House Name" />
	<input type="submit" />
    </form>`);
});
app.post("/add-home", (req, res, next) => {
	res.send(`home registered successfully </br> 
		<a href="/">Go to Home</a> `);
});
app.listen(3000, () =>
	console.log("server running on address http://localhost:3000")
);
