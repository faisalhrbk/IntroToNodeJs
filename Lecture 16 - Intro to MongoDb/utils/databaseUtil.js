const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

const mongo_url =
	"mongodb+srv://root:root@first-cluster.rtaxwgo.mongodb.net/?retryWrites=true&w=majority&appName=first-cluster";

const mongoConnect = (callback) => {
	MongoClient.connect(mongo_url)
		.then((client) => {
			callback(client);
		})
		.catch((err) => console.log(err));
};

module.exports = mongoConnect;
