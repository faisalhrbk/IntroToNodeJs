const db = require("../utils/databaseUtil");

module.exports = class Home {
	constructor(houseName, price, location, rating, photoUrl) {
		this.houseName = houseName;
		this.price = price;
		this.location = location;
		this.rating = rating;
		this.photoUrl = photoUrl;
	}
	save() {}
	static fetchAll() {
	return 	db.execute("select * from homes")
	}

	static deleteHome(homeId, callback) {}
};
