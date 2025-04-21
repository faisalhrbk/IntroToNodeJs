const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
	res.render("host/editHome", {
		pageTitle: "airbnb Home",
		currentPage: "addHome",
		editing: false,
	});
};
exports.getHostHomes = (req, res, next) => {
	Home.fetchAll().then(([registeredHomes, fields]) => {
		res.render("host/hostHomeList", {
			registeredHomes,
			pageTitle: " Host Home List",
			currentPage: "hostHomeList",
		});
	});
};

exports.postAddHome = (req, res, next) => {
	console.log(req.body);
	const { houseName, price, location, rating, photoUrl , description} = req.body;
	const home = new Home(houseName, price, location, rating, photoUrl, description);
	home.save();
	res.redirect("/host/home-list");
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
	const { id, houseName, price, location, rating, photoUrl, description} = req.body;
	const home = new Home(houseName, price, location, rating, photoUrl, description, id);
	

	home.save();
	res.redirect("/host/home-list");
};


exports.postDeleteHome = (req, res) => {
	const { homeId } = req.params;

	if (!homeId) return res.redirect("/host/home-list");

	Home.deleteHome(homeId, (err, msg) => {
		if (err) console.error(err);
		else console.log(msg || "Home deleted");
		res.redirect("/host/home-list");
	});
};

