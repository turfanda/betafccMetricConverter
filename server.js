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

let units={"kg":"kilograms","lbs":"pound","gal":"galons","l":"liters","mi":"miles","km":"kilometers"};

app.get('/',function(req,res){
res.sendFile(process.cwd()+"/views/index.html");
});

app.get("/api/convert",function(req,res){

  let input = parseUnit(req.query.input)
  res.json(calcOutput(input));

});

const parseUnit = function(val){
  
let regex = /([^a-zA-Z]+)([a-zA-Z]+)/g;
let result=null;
var match = regex.exec(val);

if (!units.hasOwnProperty(match[2])&& !typeof(eval(match[1]))!=="number") {
   result=""
}
  
return({"initNum":eval(match[1]),initUnit:match[2],result:result});
  
}

const calcOutput = function(input) {
let inVal = input.initNum;
let inUnit = input.initUnit.toLowerCase();
let outVal,outUnit;

console.log(units);
  switch(inUnit){
    case "kg":
    outVal=inVal/ 0.453592;
    console.log(outVal);
    outUnit="lbs"
    break;
    case "lbs":
    outVal=inVal*0.453592;
    outUnit="kg"
    break;
    case "gal":
    outVal=inVal*3.78541;
    outUnit="L"
    break;
    case "L":
    outVal=inVal/3.78541;
    outUnit="gal"
    break;
    case "mi":
    outVal=inVal*1.60934;
    outUnit="km"
    break;
    case "km":
    outVal=inVal/1.60934;
    outUnit="mi"
    break;
  }
  return({"initNum":input.initNum,initUnit:input.initUnit,returnNum:outVal,returnUnit:outUnit,string:inVal+" "+units[inUnit]+" converts to "+outVal+" "+units[outUnit]});
}

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
