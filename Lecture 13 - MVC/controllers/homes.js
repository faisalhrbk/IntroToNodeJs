const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
	res.render("addHome", { pageTitle: "airbnb Home", currentPage: "addHome" });
};

exports.postAddHome = (req, res, next) => {
	console.log(req.body);
	const { houseName, price, location, rating, photoUrl } = req.body;
	const home = new Home(houseName, price, location, rating, photoUrl);
	home.save();
	res.render("homeAdded", {
		pageTitle: "airbnb home",
		currentPage: "homeAdded",
	});
};
exports.getHomes = (req, res, next) => {
    const registeredHomes = Home.fetchAll();
	console.log(registeredHomes);
	res.render("home", {
		registeredHomes,
		pageTitle: "airbnb home",
		currentPage: "home",
	});
};
