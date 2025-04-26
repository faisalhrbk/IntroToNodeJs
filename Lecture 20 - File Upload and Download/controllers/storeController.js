const Home = require("../models/home");
const User = require("../models/user");

exports.getIndex = (req, res, next) => {
	Home.find().then((registeredHomes) => {
		res.render("store/index", {
			registeredHomes,
			pageTitle: "airbnb",
			currentPage: "index",
			isLoggedIn: req.isLoggedIn,
			user: req.session.user,
		});
	});
};
exports.getHomes = (req, res, next) => {
	Home.find().then((registeredHomes) => {
		res.render("store/homeList", {
			registeredHomes,
			pageTitle: "Home List",
			currentPage: "home",
			isLoggedIn: req.isLoggedIn,
			user: req.session.user,
		});
	});
};

exports.getBookings = (req, res, next) => {
	res.render("store/bookings", {
		pageTitle: "My Bookings",
		currentPage: "bookings",
		isLoggedIn: req.isLoggedIn,
		user: req.session.user,
	});
};
exports.getFavoriteList = async (req, res, next) => {
	const userId = req.session.user._id;
	const user = await User.findById(userId).populate("favorites");
	res.render("store/favoriteList", {
		favoriteHomes: user.favorites,
		pageTitle: "My Favorites",
		currentPage: "favorites",
		isLoggedIn: req.isLoggedIn,
		user: req.session.user,
	});
};
exports.getHomeDetails = (req, res, next) => {
	const homeId = req.params.homeId;
	Home.findById(homeId).then((home) => {
		if (!home) {
			res.redirect("/homes");
		} else {
			res.render("store/homeDetail", {
				home: home,
				pageTitle: "Home Detail",
				currentPage: "home",
				isLoggedIn: req.isLoggedIn,
				user: req.session.user,
			});
		}
	});
};
exports.postAddToFavorite = async (req, res, next) => {
	const homeId = req.body.id;
	const userId = req.session.user._id;
	const user = await User.findById(userId);
	if (!user.favorites.includes(homeId)) {
		user.favorites.push(homeId);
		await user.save();
	}
	res.redirect("/favorites");
};
exports.postRemoveFavorite = async (req, res, next) => {
	const homeId = req.params.homeId.trim();
	const userId = req.session.user._id;

	await User.updateOne({ _id: userId }, { $pull: { favorites: homeId } });

	res.redirect("/favorites");
};
