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
		if (!homeId) {
			return callback("Home ID is required.");
		}

		this.fetchAll((registeredHomes) => {
			const homeExists = registeredHomes.some((home) => home.id == homeId);
			if (!homeExists) {
				return callback("No home found with given ID.");
			}

			const updatedHomes = registeredHomes.filter((home) => home.id != homeId);

			fs.writeFile(homeDataPath, JSON.stringify(updatedHomes), (error) => {
				if (error) {
					return callback("Error writing to file.");
				}
				callback(null, "Home deleted successfully.");
			});
		});
	}
};
