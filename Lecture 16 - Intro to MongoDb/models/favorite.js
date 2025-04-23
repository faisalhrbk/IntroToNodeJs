const { getDB } = require("../utils/databaseUtil");
module.exports = class Favorite {
	constructor(houseId) {
		this.houseId = houseId;
	}
	save() {
		const db = getDB();
		return db.collection("favorites").insertOne(this);
	}
	static addFavorite(homeId, callback) {}
	static getFavorite() {
		const db = getDB();
		return db.collection("favorites").find().toArray();
	}

	static removeFavorite(delHomeId, callback) {}
};
