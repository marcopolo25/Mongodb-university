var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/enron', function (err, db) {
	if(err) throw err;

	db.collection('messages').find({}).each(function(err, doc) {
		if(err) throw err;
			db.close();

		console.dir(doc);

	});
})

/*db.messages.aggregate([
	{$unwind : "$headers.To"},
	{$group: {_id: {"to":"$headers.To", "from":"$headers.From"}}}
])

db.*/