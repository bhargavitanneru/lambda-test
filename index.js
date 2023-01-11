const { MongoClient } = require("mongodb");

exports.handler = async (event) => {
	const filter = {
		'orderNumber': '123'
	};
	const client = await MongoClient.connect(
		'mongodb+srv://btanneru:Bhani4chinni@dev0.aar2e.mongodb.net/test?authSource=admin&replicaSet=dev0-shard-0&readPreference=primary&ssl=true',
		{ useNewUrlParser: true, useUnifiedTopology: true }
	);
	const coll = client.db('smartCell_Commons').collection('order');
	const cursor = coll.find(filter);
	const result = await cursor.toArray();
	console.log(`result:: ${result}`);
	await client.close();
	return result;
};