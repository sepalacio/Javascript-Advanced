var page = require('page');
var empty = require('empty-element');
var main = document.getElementById('main-container');
var template = require('./template');
var title = require('title');

page('/signin' , function (ctx, next){
	title('Platzigram - Signin');
    empty(main).appendChild(template);
})