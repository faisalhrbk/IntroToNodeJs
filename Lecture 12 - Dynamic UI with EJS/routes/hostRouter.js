const express = require("express");
const path = require("path");
const hostRouter = express.Router();
const view = require("../utils/viewsPath");

hostRouter.get("/add-home", (req, res, next) => {

	res.sendFile(view("addHome.html"));
});

const registeredHomes = [];
hostRouter.post("/add-home", (req, res, next) => {
	registeredHomes.push({houseName: req.body.houseName})
	res.sendFile(view("homeAdded.html"));
});
exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
