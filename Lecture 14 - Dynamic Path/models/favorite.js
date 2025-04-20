const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/rootDir");

const favoriteDataPath = path.join(rootDir, "data", "favorite.json");

module.exports = class Favorite {
	static addToFavorite(homeId, callback) {
		Favorite.getFavorite((favorites) => {
			if (favorites.include(homeId)) {
				console.log("home is already marked fav");
			} else {
				favorites.push(homeId);
				fs.writeFile(favoriteDataPath, JSON.stringify(favorites), callback)
			}
		});
	}
	static getFavorite(id, callback) {
		fs.readFile(favoriteDataPath, (err, data) => {
			callback(!err ? JSON.parse(data) : []);
		});
	}
};
