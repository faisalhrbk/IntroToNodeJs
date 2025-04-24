const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
	res.render("host/editHome", {
		pageTitle: "airbnb Home",
		currentPage: "addHome",
		editing: false,
	});
};
exports.getHostHomes = (req, res, next) => {
	Home.find().then((registeredHomes) => {
		// console.log(registeredHomes);

		res.render("host/hostHomeList", {
			registeredHomes: registeredHomes,
			pageTitle: " Host Home List",
			currentPage: "hostHomeList",
		});
	});
};

exports.postAddHome = (req, res, next) => {
	// console.log(req.body);
	const { houseName, price, location, rating, photoUrl, description } =
		req.body;
	const home = new Home({
		houseName,
		price,
		location,
		rating,
		photoUrl,
		description,
	});
	home.save().then(() => console.log("home created successfully"));
	res.redirect("/host/home-list");
};
exports.getEditHome = (req, res, next) => {
	const homeId = req.params.homeId;
	const editing = req.query.editing === "true";
	Home.findById(homeId).then((home) => {
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
	// console.log(req.body);
	const { id, houseName, price, location, rating, photoUrl, description } =
		req.body;
	const home = new Home(
		houseName,
		price,
		location,
		rating,
		photoUrl,
		description,
		id
	);

	home.save().then(() => console.log("home update success"));
	res.redirect("/host/home-list");
};

exports.postDeleteHome = (req, res) => {
	const { homeId } = req.params;
	if (!homeId) return res.redirect("/host/home-list");
	Home.deleteById(homeId)
		.then(() => {
			res.redirect("/host/home-list");
		})
		.catch((err) => console.log("error while deleting", err));
};
