var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/course', function(err, db) {
    if(err) throw err;

    var query = { 'grade' : {'$gt' : 69, '$lt' : 80 }};

    db.collection('grades').find(query).toArray(function(err, docs) {
        if(err) throw err;

        console.dir(docs);

        db.close();
    });
});


/*MongoClient.connect('mongodb://localhost:27017/course', function(err, db) 
{
     if(err) throw err;

     var query = { 'grade' : 100};

     function callback(err, doc) {
          if(err) throw err;

          console.dir(doc);

          db.close();
     } 
     
     db.collection('grades').findOne(query, callback);
});*/
