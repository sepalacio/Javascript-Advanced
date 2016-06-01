(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var numeros = [400, 200, 1, -23];

//function that executes for each element of the array

//with vanilla JS
// var numerosPlus1 = numeros.map(function(numero){
// 	return numero + 1;
// })

//Ecma script 6

var numerosPlus1 = numeros.map(n => n + 1);

console.log(numerosPlus1);

},{}]},{},[1]);
