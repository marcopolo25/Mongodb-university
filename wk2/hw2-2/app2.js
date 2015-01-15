var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/weather', function(err, db) {
    if(err) throw err;

    var newState = '';
    var docs = db.collection('data').find().sort([['State', 1], ["Temperature",-1]]);

    docs.each(function(err, doc) { 
        if(err) console.dir(err);
        if(doc == null){ }
        else if(newState != doc.State) {
            newState = doc.State;
            operator = {'$set':{'month_high':true}};

            db.collection('data').update({'_id' : doc._id}, operator, function (err, saved) {
                if(err) throw err;
                console.dir('Successfully saved ' + saved + ' months high'); 
                db.close();               
            });
        }
    });


});