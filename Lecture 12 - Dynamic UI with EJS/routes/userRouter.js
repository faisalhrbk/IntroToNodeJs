const express = require("express");
const path = require("path");
const userRouter = express.Router();
const view = require("../utils/viewsPath");
const { registeredHomes } = require("./hostRouter");

userRouter.get("/", (req, res, next) => {
	console.log(registeredHomes)
	res.sendFile(view("home.html"));
});

module.exports = userRouter;
