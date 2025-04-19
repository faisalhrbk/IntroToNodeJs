const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/rootDir");
const registeredHomes = [];
module.exports = class Home {
	constructor(houseName, price, location, rating, photoUrl) {
		this.houseName = houseName;
		this.price = price;
		this.location = location;
		this.rating = rating;
		this.photoUrl = photoUrl;
	}
	save() {
		registeredHomes.push(this);
		const homeDataPath = path.join(rootDir, "data", "homes.json");
		fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) =>
			console.log("File write concluded", error)
		);
	}
	static fetchAll() {
		return registeredHomes;
	}
};
