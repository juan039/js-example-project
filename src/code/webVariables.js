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















