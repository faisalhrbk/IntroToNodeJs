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
	Favorite.getFavorite().then((favorites) => {
		favorites = favorites.map((fav) => fav.houseId);
		Home.fetchAll().then((registeredHomes) => {
			const favoriteHomes = registeredHomes.filter((home) =>
				favorites.includes(home._id.toString())
			);
			favorites.includes();
			res.render("store/favoriteList", {
				favoriteHomes: favoriteHomes,
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
	console.log(req.body);

	const homeId = req.body.id;
	const fav = new Favorite(homeId);
	fav
		.save()
		.then(() => console.log("added to fav"))
		.catch(() => console.log("error while adding to fav"))
		.finally(() => res.redirect("/favorites"));
};
exports.postRemoveFavorite = (req, res) => {
	const homeId = req.params.homeId;
	console.log( 'home id is', homeId);

	Favorite.removeFavorite(homeId)
		.then(() => console.log("fav removed success"))
		.catch(() => console.log("error while removing fav "))
		.finally(() => res.redirect("/favorites"));
};
