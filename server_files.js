var express = require('express');
var path = require('path');
var cors = require('cors');

var app = express();
var dir = path.join(__dirname, 'public');

app.use(cors());
app.use(express.static(dir));


app.listen(3000);