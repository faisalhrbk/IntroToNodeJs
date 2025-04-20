const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/rootDir");

const homeDataPath = path.join(rootDir, "data", "homes.json");

module.exports = class Home {
	constructor(houseName, price, location, rating, photoUrl) {
		this.houseName = houseName;
		this.price = price;
		this.location = location;
		this.rating = rating;
		this.photoUrl = photoUrl;
	}
	save() {
		Home.fetchAll((registeredHomes) => {
			if (this.id) {
				registeredHomes = registeredHomes.map((home) =>
					home.id == this.id ? this : home
				);
			} else {
				this.id = Math.random().toString();
				registeredHomes.push(this);
			}

			fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) =>
				console.log("File write concluded", error)
			);
		});
	}
	static fetchAll(callback) {
		fs.readFile(homeDataPath, (err, data) => {
			callback(!err ? JSON.parse(data) : []);
		});
	}
	static findById(homeId, callback) {
		this.fetchAll((homes) => {
			const homeFound = homes.find((home) => home.id == homeId);
			callback(homeFound);
		});
	}

	static deleteHome(homeId, callback) {
		this.fetchAll((homes) => {
				Favorite.removeFavorite(delHomeId);
			homes = homes.filter((home) => home.id != homeId);
			fs.writeFile(homeDataPath, JSON.stringify(updatedHomes), callback);
		});
	}
};
