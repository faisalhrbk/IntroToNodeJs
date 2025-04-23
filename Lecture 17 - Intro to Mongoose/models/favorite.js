
module.exports = class Favorite {
	constructor(houseId) {
		this.houseId = houseId;
	}

	save() {
		const db = getDB();
		return db
			.collection("favorites")
			.findOne({houseId: this.houseId })
			.then((fav) => {
				if (fav) {
					throw new Error("Already in favorites");
				}
				return db.collection("favorites").insertOne(this);
			});
	}

	static addFavorite(homeId, callback) {}
	static getFavorite() {
		const db = getDB();
		return db.collection("favorites").find().toArray();
	}

	static removeFavorite(delHomeId) {
		const stringId = String(delHomeId);

		const db = getDB();
		return db.collection("favorites").deleteOne({ houseId: stringId });
	}
};
