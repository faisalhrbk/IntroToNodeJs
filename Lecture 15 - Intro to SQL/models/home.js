const db = require("../utils/databaseUtil");

module.exports = class Home {
	constructor(houseName, price, location, rating, photoUrl, description, id) {
		this.houseName = houseName;
		this.price = price;
		this.location = location;
		this.rating = rating;
		this.photoUrl = photoUrl;
		this.description = description;
		this.id = id;
	}
	save() {
		if (this.id) {
			return db.execute(
				`UPDATE homes SET houseName = ?, price = ?, location = ?, rating = ?, photoUrl = ?, description = ? WHERE id = ?`,
				[
					this.houseName,
					this.price,
					this.location,
					this.rating,
					this.photoUrl,
					this.description,
					this.id
				])
		} else {
			return db.execute(
				`INSERT INTO homes (houseName, price, location, rating, photoUrl, description) VALUES (?, ?, ?, ?, ?, ?)`,
				[
					this.houseName,
					this.price,
					this.location,
					this.rating,
					this.photoUrl,
					this.description,
				]
			);
		}
	}
	static findById(homeId) {
		return db.execute("select * from homes where id=?", [homeId]);
	}
	static fetchAll() {
		return db.execute("select * from homes");
	}

	static deleteById(homeId) {
		return db.execute("delete from homes where id=?", [homeId]);
	}
};

// GITHUBSTUDENT50 - B7R46X;
