var express = require('express'); 
var app = express(); //express is used for creating serverand handle http request like get ,put,delete,post
var bodyParser = require('body-parser');
//body-parser extract the entire body portion of an incoming request stream and exposes it on req.body
var multer = require('multer');
var xlstojson = require("xls-to-json-lc");
//"xls-to-json-lc" module is used to convert xls file to json fle
var xlsxtojson = require("xlsx-to-json-lc"); 
//"xlsx-to-json-lc" module is used to convert xlsx file to json file
app.get('/',function(req,res){//to render the index.html file 
    res.sendFile(__dirname + "/Index.html");
});
//server listen on port number 3000
app.listen('3000', function(){
    console.log('running on 3000...');
});
