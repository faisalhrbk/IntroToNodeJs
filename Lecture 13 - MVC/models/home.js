const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/rootDir");

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
	static fetchAll(callback) {
		const fileContent = fs.readFile(homeDataPath, (err, data) => {
			if (!err) {
				registeredHomes = JSON.parse(data);
			}
            callback(registeredHomes);
		});
	}
};
