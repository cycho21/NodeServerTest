/**
 * Created by chanyeon on 16. 3. 8.
 */

var express = require('express');
var fs = require('fs');
var app = express();
var dao = require('./DAO');
var test = dao.test;
var init = dao.init;

app.use('/files', express.static(__dirname + '/files'));

app.get('/', function (req, res) {
    res.redirect('/files/test.html');
});

app.get('/test2', function(req, res) {
    res.redirect('/files/test2.html');
    test();
    init();
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});