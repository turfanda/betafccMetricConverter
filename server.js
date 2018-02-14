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
res.sendFile(process.cwd()+"views/index.html");
});

app.get('/api/convert/:data',function(req,res){
console.log(req.body.data);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
