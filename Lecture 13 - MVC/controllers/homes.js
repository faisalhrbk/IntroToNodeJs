

exports.getAddHome = (req, res, next) => {
	res.render("addHome", { pageTitle: "airbnb Home", currentPage: "addHome" });
};

exports.postAddHome = (req, res, next) => {
	console.log(req.body);
	registeredHomes.push(req.body);
	res.render("homeAdded", {
		pageTitle: "airbnb home",
		currentPage: "homeAdded",
	});
};
exports.getHomes = (req, res, next) => {
	console.log(registeredHomes);
	res.render("home", {
		registeredHomes,
		pageTitle: "airbnb home",
		currentPage: "home",
	});
};
