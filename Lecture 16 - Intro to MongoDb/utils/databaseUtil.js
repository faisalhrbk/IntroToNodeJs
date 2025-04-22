import { MongoClient } from "mongodb";

const mongoClient = new MongoClient(
	"mongodb+srv://root:root@first-cluster.rtaxwgo.mongodb.net/?retryWrites=true&w=majority&appName=first-cluster"
);

const mongoConnect = (callback) => {
	mongoClient
		.connect()
		.then((client) => {
			console.log(client);
			callback(client);
		})
		.catch((err) => console.log(err));
};

module.exports = mongoConnect;