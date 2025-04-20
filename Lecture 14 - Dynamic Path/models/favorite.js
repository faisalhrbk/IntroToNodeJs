const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/rootDir");

const favoriteDataPath = path.join(rootDir, "data", "favorite.json");

module.exports = class Favorite {
	static addFavorite(homeId, callback) {
		Favorite.getFavorite((favorites) => {
			if (favorites.includes(homeId)) {
				callback("home is already marked fav");
			} else {
				favorites.push(homeId);
				fs.writeFile(favoriteDataPath, JSON.stringify(favorites), callback);
			}
		});
	}
	static getFavorite(callback) {
		fs.readFile(favoriteDataPath, (err, data) => {
			callback(!err ? JSON.parse(data) : []);
		});
	}

	static removeFavorite(delHomeId, callback) {
		Favorite.getFavorite((homeIds) => {
		
			const updatedHomeIds = homeIds.filter((homeId) => delHomeId != homeId);
			fs.writeFile(favoriteDataPath, JSON.stringify(updatedHomeIds), callback);
		});
	}
};
