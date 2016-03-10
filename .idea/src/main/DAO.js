/**
 * Created by chanyeon on 16. 3. 9.
 */

var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

exports.initThis = function (req, res) {
    mongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected correctly to server");
            console.log("This log");
            insert(db, function(){
            console.log("This log");
            db.close();
            res.send("");
        });
    });
}

exports.test = function() {
    console.log("TEST 123");
}

var insert = function(db, callback) {
    db.collection('restaurants').insertOne( {
        "address" : {
            "street" : "2 Avenue",
            "zipcode" : "10075",
            "building" : "1480",
            "coord" : [ -73.9557413, 40.7720266 ]
        },
        "borough" : "Manhattan",
        "cuisine" : "Italian",
        "grades" : [
            {
                "date" : new Date("2014-10-01T00:00:00Z"),
                "grade" : "A",
                "score" : 11
            },
            {
                "date" : new Date("2014-01-16T00:00:00Z"),
                "grade" : "B",
                "score" : 17
            }
        ],
        "name" : "Vella",
        "restaurant_id" : "41704620"
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the restaurants collection.");
        callback();
    });
};
