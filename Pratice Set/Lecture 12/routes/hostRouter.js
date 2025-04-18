const express = require("express");
const path = require("path");
const hostRouter = express.Router();
const view = require("../utils/viewsPath");

hostRouter.get("/add-home", (req, res, next) => {

	res.render('addHome', {pageTitle: 'airbnb Home'});
});

const registeredHomes = [];
hostRouter.post("/add-home", (req, res, next) => {
	console.log(req.body)
	registeredHomes.push(req.body)
	res.render('homeAdded', {pageTitle: "airbnb home"});
});
exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
