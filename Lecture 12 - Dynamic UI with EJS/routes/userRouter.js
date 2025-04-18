const express = require("express");
const userRouter = express.Router();
const { registeredHomes } = require("./hostRouter");

userRouter.get("/", (req, res, next) => {
	console.log(registeredHomes)
	res.render('home', {registeredHomes, pageTitle: 'airbnb home'});
});

module.exports = userRouter;
