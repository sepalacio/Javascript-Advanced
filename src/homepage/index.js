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
			url:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQwD_ZOkV3ALOJBAsKTlz82nyU2tBh7r-1YgsL1K2PdobJpeUgbuQ',
			likes: 0,
			liked: false,
			createdAt: new Date()
		},
		{
			user: {
				'username': 'sebas',
				'avatar':'http://zblogged.com/wp-content/uploads/2015/11/17.jpg'				
			},
			url:'office.jpg',
			likes: 1,
			liked: true,
			createdAt: new Date().setDate(new Date().getDate()-10)
		}
	];
    empty(main).appendChild(template(pictures));
})