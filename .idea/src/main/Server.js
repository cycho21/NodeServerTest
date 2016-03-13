/**
 * Created by chanyeon on 16. 3. 8.
 */

var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
var dao = require('./DAO');
var queryMongo = dao.queryMongo;

app.use('/files', express.static(__dirname + '/files'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.redirect('/files/test.html');
});

app.get('/test2', function(req, res) {
    res.redirect('/files/test2.html');
    init();
});

app.post('/execute', function(req, res){
    dao.queryMongo(req, res, req.body.selectpicker, req.body.query2);
    res.redirect('/files/test.html');
})

app.listen(3000, function () {
});