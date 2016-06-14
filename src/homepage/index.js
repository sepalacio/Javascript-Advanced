var page = require('page');
var main = document.getElementById('main-container');

page('/', function (ctx, next){
	main.innerHTML = '<a href="/signup">SignUp</a>';
})