const mongoose  = require('mongoose');

const homeSchema = mongoose.Schema({
	houseName: {type: String, }
})




























// module.exports = class Home {
// 	constructor(houseName, price, location, rating, photoUrl, description, _id) {
// 		this.houseName = houseName;
// 		this.price = price;
// 		this.location = location;
// 		this.rating = rating;
// 		this.photoUrl = photoUrl;
// 		this.description = description;
// 		if (_id) {
// 			this._id = _id;
// 		}
// 	}
// 	save() {
// 		const db = getDB();

// 		if (this._id) {
// 			console.log("Updating home with _id:", this._id);

// 			const updatedFields = {
// 				houseName: this.houseName,
// 				price: this.price,
// 				location: this.location,
// 				rating: this.rating,
// 				photoUrl: this.photoUrl,
// 				description: this.description,
// 			};
// 			return db
// 				.collection("homes")
// 				.updateOne(
// 					{ _id: new ObjectId(String(this._id)) },
// 					{ $set: updatedFields }
// 				);
// 		} else {
// 			console.log('creating new home');
			
// 			return db.collection("homes").insertOne(this);
// 		}
// 	}
// 	static findById(homeId) {
// 		// console.log(homeId);

// 		const db = getDB();
// 		return db
// 			.collection("homes")
// 			.find({ _id: new ObjectId(String(homeId)) })
// 			.next();
// 	}
// 	static fetchAll() {
// 		const db = getDB();
// 		return db.collection("homes").find().toArray();
// 	}

// 	static deleteById(homeId) {
// 		const db = getDB();
// 		return db
// 			.collection("homes")
// 			.deleteOne({ _id: new ObjectId(String(homeId)) });
// 	}
// };
