var page = require('page');
var empty = require('empty-element');
var main = document.getElementById('main-container');
var template = require('./template');

page('/signup' , function (ctx, next){
       empty(main).appendChild(template);
})