const Home = require("../models/home");

exports.getHomes = (req, res, next) => {
	Home.fetchAll((registeredHomes) => {
		res.render("store/homeList", {
			registeredHomes,
			pageTitle: "airbnb home",
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
