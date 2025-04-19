const express = require("express");
const path = require("path");
const hostRouter = express.Router();
const view = require("../utils/viewsPath");

hostRouter.get("/add-home", );

const registeredHomes = [];
hostRouter.post("/add-home", (req, res, next) => {
	console.log(req.body);
	registeredHomes.push(req.body);
	res.render("homeAdded", {
		pageTitle: "airbnb home",
		currentPage: "homeAdded",
	});
});
exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
