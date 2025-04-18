const express = require("express");
const path = require("path");
const userRouter = express.Router();
const view = require("../utils/viewsPath");

userRouter.get("/", (req, res, next) => {
	res.sendFile(view("home.html"));
});

module.exports = userRouter;
