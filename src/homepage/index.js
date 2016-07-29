var page = require('page');
var empty = require('empty-element');
var main = document.getElementById('main-container');
var template = require('./template');
var title = require('title');
var request = require('superagent');
var header =require('../header');
var axios = require('axios');


page('/' ,header,loadPicturesFetch, function (ctx, next){
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
// function loadPictures(ctx, next){
// 	axios
// 		.get('/api/pictures')
// 		.then( function(res){
// 			ctx.pictures = res.data;
// 			next();
// 		})
// 		.catch(function(err){
// 			console.log(err);
// 		})
// }

//REQUEST USING NATIVE API
function loadPicturesFetch(ctx, next){
	fetch('/api/pictures')
		.then( function(res){
			return res.json();
		})
		.then(function(pictures){
			ctx.pictures = pictures;
			next();
		})
		.catch(function(err){
			console.log(err);
		})
}

//REQUEST USING NATIVE API
// async function asyncLoad(ctx, next){
// 	try {
// 		//await :detiene la ejecuion del proceso hasta q se cumplan las promesas
// 		ctx.pictures = await fetch('/api/pictures').then(res => res.json())
// 		next();
// 	} catch(err){
// 		return console.log(err);
// 	}
// }