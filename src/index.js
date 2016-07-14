//load page dependecy with browserify
var page = require('page');
var moment = require('moment');

require('moment/locale/es');
moment.locale('es');

require('./homepage');
require('./signup');
require('./signin');

page();











//var numeros = [400, 200,1,-23];


//function that executes for each element of the array

//with vanilla JS
// var numerosPlus1 = numeros.map(function(numero){
// 	return numero + 1;
// })

//Ecma script 5

//var numerosPlus1 = numeros.map(n => n+1);


//console.log(numerosPlus1);

