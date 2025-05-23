const Favorite = require("../models/favorite");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
	Home.find().then((registeredHomes) => {
		res.render("store/index", {
			registeredHomes,
			pageTitle: "airbnb",
			currentPage: "index",
			isLoggedIn: req.isLoggedIn,
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
		});
	});
};

exports.getBookings = (req, res, next) => {
	res.render("store/bookings", {
		pageTitle: "My Bookings",
		currentPage: "bookings",
		isLoggedIn: req.isLoggedIn,
	});
};
exports.getFavoriteList = async (req, res, next) => {
	Favorite.find()
		.populate("houseId")
		.then((favorites) => {
		const	favoriteHomes = favorites.map((fav => fav.houseId.toString()));
			res.render("store/favoriteList", {
				favoriteHomes: favoriteHomes,
				pageTitle: "My Favorites",
				currentPage: "favorites",
				isLoggedIn: req.isLoggedIn,
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
				isLoggedIn: req.isLoggedIn,
			});
		}
	});
};
exports.postAddToFavorite = async (req, res, next) => {
	const homeId = req.body.id;

	try {
		const fav = await Favorite.findOne({ houseId: homeId });

		if (fav) {
			console.log("already marked fav");
		} else {
			const newFav = new Favorite({ houseId: homeId });
			await newFav.save();
			console.log("fav added success");
		}
		res.redirect("/favorites");
	} catch (err) {
		console.log("error while marking fav");
		next(err);
	}
};
exports.postRemoveFavorite = (req, res, next) => {
	const homeId = req.params.homeId.trim(); // 👈 remove extra space

	console.log("home id is", homeId);

	Favorite.findOneAndDelete({ houseId: homeId })
		.then(() => {
			console.log("fav removed success");
			res.redirect("/favorites");
		})
		.catch((error) => {
			console.log("error while removing fav:");
			next(error);
		});
};
