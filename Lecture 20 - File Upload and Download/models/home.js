const mongoose = require("mongoose");

const homeSchema = mongoose.Schema({
	houseName: { type: String, required: true },
	price: { type: Number, required: true },
	location: { type: String, required: true },
	rating: { type: Number, required: true },
	photo: String,
	description: String,
});

homeSchema.pre("findOneAndDelete", async (next) => {
	const homeId = this.getQuery()._id;
	await favorite.deleteMany({ houseId: homeId });
	next();
});
module.exports = mongoose.model("Home", homeSchema);
