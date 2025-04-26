const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
	res.render("host/editHome", {
		pageTitle: "airbnb Home",
		currentPage: "addHome",
		editing: false,
		isLoggedIn: req.isLoggedIn,

		user: req.session.user,
	});
};
exports.getHostHomes = (req, res, next) => {
	Home.find().then((registeredHomes) => {
		// console.log(registeredHomes);

		res.render("host/hostHomeList", {
			registeredHomes: registeredHomes,
			pageTitle: " Host Home List",
			currentPage: "hostHomeList",
			isLoggedIn: req.isLoggedIn,
			user: req.session.user,
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
		user: req.session.user,
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

		res.render("host/editHome", {
			pageTitle: "edit your  Home",
			currentPage: "hostHomeList",
			editing,
			home,
			isLoggedIn: req.isLoggedIn,
			user: req.session.user,
		});
	});
};

exports.postEditHome = (req, res, next) => {
	const { id, houseName, price, location, rating, photoUrl, description } =
		req.body;

	Home.findById(id)
		.then((home) => {
			home.houseName = houseName;
			home.price = price;
			home.location = location;
			home.rating = rating;
			home.photoUrl = photoUrl;
			home.description = description;
			home
				.save()
				.then((result) => {
					console.log("home Updated success");
				})
				.catch((err) => {
					console.log("could not able to update home", err);
				});
			res.redirect("/host/home-list", {
				user: req.session.user,
			});
		})
		.catch((err) => {
			console.log("err while finding home", err);
		});
};

exports.postDeleteHome = (req, res) => {
	const { homeId } = req.params;
	if (!homeId)
		return res.redirect("/host/home-list", {
			user: req.session.user,
		});
	Home.findByIdAndDelete(homeId)
		.then(() => {
			res.redirect("/host/home-list", {
				user: req.session.user,
			});
		})
		.catch((err) => console.log("error while deleting", err));
};
