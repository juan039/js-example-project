(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Animal = function(edad){
  this.edad = edad;
}

Animal.prototype.crecer = function(){
  this.edad = this.edad + 1;
  return this.edad;
}

var Felino = function(edad,colorDeOjos){
  this.edad = edad;
  this.colorDeOjos = colorDeOjos;

}

Felino.prototype = new Animal();
Felino.prototype.constructor = Felino;

Felino.prototype.maullar = function(){
  console.log("miiiauuuuuu");
}

var Canino = function(){

}

Canino.prototype = new Animal(0);
Canino.prototype.constructor = Canino;

Canino.prototype.ladrar = function(){
  console.log("guau guau");
}

var spock= new Felino(0,"azul");
var violeta = new Canino();

spock.maullar();
console.log("Spock crece: " +spock.crecer());
console.log("Violeta crece: "+ violeta.crecer());

//console.log("Violeta muallar?: "+ violeta.maullar());
violeta.ladrar();

console.log(spock instanceof Animal);
console.log(spock instanceof Felino);
console.log(spock instanceof Canino);

console.log(spock);
console.log(violeta);
















},{}]},{},[1]);
