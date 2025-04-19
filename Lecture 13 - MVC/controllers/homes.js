exports.getAddHome =  (req, res, next) => {
	res.render("addHome", { pageTitle: "airbnb Home", currentPage: "addHome" });
};
