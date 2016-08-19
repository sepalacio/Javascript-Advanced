var page  =require ('page');
var header = require('../header');
var title = require ('title');
var empty = require ('empty-element');
var axios = require('axios');
var template = require ('./template');

page('/:username', header, loadUser, function (ctx, next){
	var main = document.getElementById('main-container');
	title(`Platzigram - ${ctx.params.username}`);
	empty(main).appendChild(template(ctx.user));
})
function loadUser(ctx, next){
	
	axios
		.get('/api/user/${ctx.params.username}')
		.then( function(res){
			console.log(JSON.stringify(res.data));
	 		ctx.user = res.data;
	 		next();
		})
		.catch(function(err){
			console.log(err);
		})


	// try{
	// 	ctx.user =  await fetch(`/api/user/${ctx.params.username}`).then(function (res){
	// 		console.log(res.json());
	// 		return res.json();
	// 	})
	// 	// ctx.user = await fetch(`/api/user/${ctx.params.username}`).then(res => res.json())
	// 	next();
	// } catch (err){
	// 	console.log(err);
	// }
}