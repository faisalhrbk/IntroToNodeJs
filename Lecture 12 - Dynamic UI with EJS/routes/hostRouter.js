const express = require("express");
const path = require("path");
const hostRouter = express.Router();
const view = require("../utils/viewsPath");

hostRouter.get("/add-home", (req, res, next) => {

	res.render(view("addHome.ejs"));
});

const registeredHomes = [];
hostRouter.post("/add-home", (req, res, next) => {
	registeredHomes.push({houseName: req.body.houseName})
	res.render(view("homeAdded.ejs"));
});
exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
