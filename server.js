// server.js
// where your node app starts

// init project
var express = require('express');
var helmet = require("helmet");
var app = express();

app.use(express.static('public'));
app.use(helmet());
app.use(helmet.noSniff());
app.use(helmet.xssFilter());

app.get('/',function(req,res){
res.sendFile(process.cwd()+"/views/index.html");
});

app.get("/api/convert",function(req,res){

  let input = parseUnit(req.query.input)
  let output = parseOutput(input);

});

const parseUnit = function(val){
  
let regex = /([^a-zA-Z]+)([a-zA-Z]+)/g;

var match = regex.exec(val);
  
return({"initNum":match[1],initUnit:match[2]});
  
}

const parseOutput = function(input) {

console.log(input.initNum);
console.log(input.initUnit);

  
}

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
