const { getDB } = require("../utils/databaseUtil");
module.exports = class Home {
	constructor(houseName, price, location, rating, photoUrl, description, _id) {
		this.houseName = houseName;
		this.price = price;
		this.location = location;
		this.rating = rating;
		this.photoUrl = photoUrl;
		this.description = description;
		if(_id){
this.id = _id;
		}
		
	}
	save() {
		const db = getDB();
		return db.collection("homes").insertOne(this);
	}
	static findById(homeId) {
			const db = getDB();
			return db.collection("homes").find(__dirname, homeId).next();
	}
	static fetchAll() {
		const db = getDB();
		return db.collection("homes").find().toArray();
	}

	static deleteById(homeId) {}
};
//odm
