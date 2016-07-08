var express = require('express');
var app = express();

app.set('view engine', 'pug');

//serve static files usign express framework
app.use(express.static('public'));

// Routes
app.get('/', function (req, res){
	res.render('index', {
		title: 'Platzigram'
	});
})

app.get('/signup', function (req, res){
	res.render('index', {
		title: 'Platzigram - Signup'
	});
})

app.get('/signin', function (req, res){
	res.render('index', {
		title: 'Platzigram - Signin'
	});
})

app.listen(3000, function(err){
	if (err) return console.log("There is a mistake"), process.exit(1);

	console.log("Listening on port 3000");
})
