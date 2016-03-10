/**
 * Created by chanyeon on 16. 3. 8.
 */

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(8082, function (){
    console.log('Example app listening port 8082');
})