const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
	res.render("host/editHome", {
		pageTitle: "airbnb Home",
		currentPage: "addHome",
	});
};
exports.getHostHomes = (req, res, next) => {
	Home.fetchAll((registeredHomes) => {
		res.render("host/hostHomeList", {
			registeredHomes,
			pageTitle: " Host Home List",
			currentPage: "hostHomeList",
		});
	});
};

exports.postAddHome = (req, res, next) => {
	console.log(req.body);
	const { houseName, price, location, rating, photoUrl } = req.body;
	const home = new Home(houseName, price, location, rating, photoUrl);
	home.save();
	res.render("host/homeAdded", {
		pageTitle: "airbnb home",
		currentPage: "homeAdded",
	});
};
