//These are required for the application
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Set up the port

var app = express();
var PORT = 3000;

//Had to find and paste but dont understanf fully

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//The two routes that are needed
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);

//make sure port is listening

app.listen(process.env.PORT || 3000, function(){
	console.log('App listening on PORT ' + process.env.PORT);
});