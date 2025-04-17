const express = require("express");
const hostRouter = express.Router();

hostRouter.get("/host/add-home", (req, res, next) => {
	res.send(`<h1> Register your Home Here!</h1>
	<form action="/host/add-home" method="post">
	<input type="text" name="houseName" placeholder="Enter Your House Name" />
	<input type="submit" />
    </form>`);
});

hostRouter.post("/host/add-home", (req, res, next) => {
	res.send(`<h1> You are Registered Successfully!</h1>
	<a href="/">Go Back Home</a>`);
});

module.exports = hostRouter;
