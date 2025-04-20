const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
	res.render("host/editHome", {
		pageTitle: "airbnb Home",
		currentPage: "addHome",
		editing: false,
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
	res.redirect("host/home-list");
};
exports.getEditHome = (req, res, next) => {
	const homeId = req.params.homeId;
	const editing = req.query.editing === "true";
	Home.findById(homeId, (home) => {
		if (!home) {
			console.log("home not found");
			return res.redirect("/host/home-list");
		}
		// console.log(homeId, editing, home);
		res.render("host/editHome", {
			pageTitle: "edit your  Home",
			currentPage: "hostHomeList",
			editing,
			home,
		});
	});
};

exports.postEditHome = (req, res, next) => {
	console.log(req.body);
	const { id, houseName, price, location, rating, photoUrl } = req.body;
	const home = new Home(houseName, price, location, rating, photoUrl);
	home.id = id;

	home.save();
	res.redirect("host/homeList");
};
