'use strict'
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/////////////LANDING PAGE///////////////////////
    app.get('/', function(req,res){
        res.send("Welcome to Node API");
    });
/////////////404 CATCH TRACKING/////////////////
    app.get('*', function(req, res) {
        console.log("---------------------------");
        console.log("GET:");
        console.log(req.params);
        console.log("---------------------------");
        res.sendStatus(404);
    });
    app.post('*', function(req, res) {
        console.log("---------------------------");
        console.log("POST:");
        console.log(req.params);
        console.log("---------------------------");
        res.sendStatus(404);
    });
/////////////PORT INFORMATION///////////////////
    var port = process.env.PORT || 1337;
    app.listen(port);
    console.log('Running on port ' + port)

