const express = require("express");
const path = require("path");
const hostRouter = express.Router();
const view = require("../utils/viewsPath");

hostRouter.get("/add-home", (req, res, next) => {

	res.sendFile(view("addHome.html"));
});

hostRouter.post("/add-home", (req, res, next) => {
	res.sendFile(view("homeAdded.html"));
});

module.exports = hostRouter;
