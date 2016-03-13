/**
 * Created by chanyeon on 16. 3. 9.
 */

var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

exports.queryMongo = function (req, res, string, queryString) {

    mongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        switch(string) {
            case "insert":
                insert(db, function(){
                    console.log("insert operation");
                    db.close();
                    res.send("");
                }, queryString);
                break;
            case "find":
                findTest(db, function() {
                    console.log("find operation");
                    db.close();
                    res.send("");
                }, queryString);
                break;
            case "drop":
                dropCollection(db, function() {
                    db.close();
                    res.send("");
                }, queryString);
                break;
            case "findAll":
                findAll(db, function() {
                    console.log("find All operation")
                    db.close();
                    res.send("");
                });
                break;
            default:
                break;
        }
    });
}

var insert = function(db, callback, string) {
        db.collection('test').insertOne(JSON.parse(string), function(err, result) {
        assert.equal(err, null);
        callback();
    });
};

var dropCollection = function(db, callback, string) {
    db.collection(string).drop( function(err, response) {
        console.log(response);
        callback();
    });
};

var findAll = function(db, callback) {
    var cursor = db.collection('test').find();
    cursor.each(function(err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.dir(doc);
        } else {
            callback();
        }
    });
};

var findTest = function(db, callback, string) {
    var cursor =db.collection('test').find(JSON.parse(string));
    cursor.each(function(err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.dir(doc);
        } else {
            callback();
        }
    });
};