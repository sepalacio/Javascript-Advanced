var page = require('page');
var empty = require('empty-element');
var main = document.getElementById('main-container');
var template = require('./template');
var title = require('title');
var request = require('superagent');
var header =require('../header');
var axios = require('axios');


page('/' ,header,loadPictures, function (ctx, next){
	title('Platzigram');


    empty(main).appendChild(template(ctx.pictures));
})

//HTTP REQUEST USING CALLBACKS
// function loadPictures(ctx, next){
// 	request
// 		.get('/api/pictures')
// 		.end( function(err, res){
// 			if(err) return console.log(err);
// 			ctx.pictures = res.body;
// 			next();
// 		})
// }

//HTTP REQUEST USING PROMISES
function loadPictures(ctx, next){
	axios
		.get('/api/pictures')
		.then( function(res){
			ctx.pictures = res.data;
			next();
		})
		.catch(function(err){
			console.log(err);
		})
}