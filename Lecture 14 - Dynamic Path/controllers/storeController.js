const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
	Home.fetchAll((registeredHomes) => {
		res.render("store/index", {
			registeredHomes,
			pageTitle: "airbnb",
			currentPage: "index",
		});
	});
};
exports.getHomes = (req, res, next) => {
	Home.fetchAll((registeredHomes) => {
		res.render("store/homeList", {
			registeredHomes,
			pageTitle: "Home List",
			currentPage: "home",
		});
	});
};

exports.getBookings = (req, res, next) => {
	res.render("store/bookings", {
		pageTitle: "My Bookings",
		currentPage: "bookings",
	});
};
exports.getFavoriteList = (req, res, next) => {
	Home.fetchAll((registeredHomes) => {
		res.render("store/favoriteList", {
			registeredHomes,
			pageTitle: "My Favorites",
			currentPage: "favorites",
		});
	});
};
