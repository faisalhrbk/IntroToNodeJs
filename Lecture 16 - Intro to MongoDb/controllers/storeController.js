const Favorite = require("../models/favorite");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
	Home.fetchAll().then((registeredHomes) => {
		res.render("store/index", {
			registeredHomes,
			pageTitle: "airbnb",
			currentPage: "index",
		});
	});
};
exports.getHomes = (req, res, next) => {
	Home.fetchAll().then((registeredHomes) => {
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
	Favorite.getFavorite((favorites) => {
		Home.fetchAll().then((registeredHomes) => {
			const favoritesWithDetails = favorites.map((homeId) =>
				registeredHomes.find((home) => home._id == homeId)
			);
			res.render("store/favoriteList", {
				favoriteHomes: favoritesWithDetails,
				pageTitle: "My Favorites",
				currentPage: "favorites",
			});
		});
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
			});
		}
	});
};
exports.postAddToFavorite = (req, res, next) => {
	console.log(req.body.id);
	Favorite.addFavorite(req.body.id, (err) => {
		if (err) {
			console.log("error while marking fave");
		}
		res.redirect("/favorites");
	});
};
exports.postRemoveFavorite = (req, res) => {
	const { homeId } = req.params;

	Favorite.removeFavorite(homeId, (err) => {
		if (err) {
			console.log("Error while removing from favorites:", err);
		}
		res.redirect("/favorites");
	});
};
