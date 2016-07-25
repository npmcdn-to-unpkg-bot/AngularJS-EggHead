var http = require('http');
var fs = require('fs');
var settings = require('./settings');
var express = require('express');
//___________________________________

var app = express();
var server = http.createServer(app);

server.listen(settings.PORT,settings.ADDRESS,startListeningInfo);

app.use(express.static('public'));

app.get('/',function(req,res,next){
    console.log("GET request");
    res.send("Hello, friend!");
});
app.post('/',function(req,res,next){
    console.log("POST request");
    res.send("Hello, friend!");
});
app.delete('/',function(req,res,next){
    console.log("DELETE request");
    res.send("Hello, friend!");
});
app.put('/',function(req,res,next){
    console.log("PUT request");
    res.send("Hello, friend!");
});

//0
function startListeningInfo(){
    console.log("server is listening: cwd = " + process.cwd() + ", port = "+settings.PORT+", address = "+settings.ADDRESS+"; good luck :-)");
}
//1
function specificError(){
    Error.apply(this);
    this._specificMessage = "smth";
    speciricError.prototype.__proto__ = Error.prototype;
}
//2

//3

//4

//5

//6

//7

//8

//9

//10

//11

//12

//13

//14

//15

//16

//17

//18

//19

//20
