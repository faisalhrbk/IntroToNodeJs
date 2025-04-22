const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

const mongo_url =
	"mongodb+srv://root:root@first-cluster.rtaxwgo.mongodb.net/?retryWrites=true&w=majority&appName=first-cluster";
let _db;
const mongoConnect = (callback) => {
	MongoClient.connect(mongo_url)
		.then((client) => {
			_db = client.db('airbnb')
			callback();
		})
		.catch((err) => console.log(err));
};
const getDB = () => {
	if(!_db){
		throw new Error('Mongo not connected')
	}
	return _db;
}

module.exports = mongoConnect;
module.getDB = getDB;