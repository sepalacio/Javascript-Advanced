var express = require('express');
var app = express();


app.get('/', function (req, res){
	res.send('Hello world');
})

app.listen(3000, function(err){
	if (err) return console.log("There is a mistake"), process.exit(1);

	console.log("Listening on port 3000");
})
