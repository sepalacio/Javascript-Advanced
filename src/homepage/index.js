var page = require('page');
var empty = require('empty-element');
var main = document.getElementById('main-container');
var template = require('./template');
var title = require('title');

page('/' , function (ctx, next){
	title('Platzigram');
	var pictures = [
		{
			user: {
				'username': 'sebas',
				'avatar':'http://zblogged.com/wp-content/uploads/2015/11/17.jpg'				
			},
			url:'office.jpg',
			likes: 10,
			liked: false
		},
		{
			user: {
				'username': 'sebas',
				'avatar':'http://zblogged.com/wp-content/uploads/2015/11/17.jpg'				
			},
			url:'office.jpg',
			likes: 25,
			liked: true
		}
	];
    empty(main).appendChild(template(pictures));
})