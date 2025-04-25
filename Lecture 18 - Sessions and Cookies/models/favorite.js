const mongoose = require("mongoose");
const { Schema } = mongoose;

const favoriteSchema = new Schema({
	houseId: {
		type: mongoose.Schema.Types.ObjectId,
		reg: "Home",
		required: true,
		unique: true,
	},
});

module.exports = mongoose.model("Favorite", favoriteSchema);
