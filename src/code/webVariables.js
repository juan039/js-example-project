var Tablero = function(coordenadas){

  this.tablero = [
                  [0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0] 
                  ];

  for(var i = 0; i < coordenadas.length; i++){ 
    this.tablero[coordenadas[i][0]][coordenadas[i][1]] = "b";
  }
}

Tablero.prototype.dibujarTablero = function(){

    for(var fila = 0 ; fila <this.tablero.length ; fila++ ){
      var filaUno = " ";

      for(var col = 0 ; col<this.tablero[fila].length ; col++){
        filaUno+=(this.tablero[fila][col] + " ");

      }
        console.log(filaUno);
      
    }
}


var Jugador = function(coordenadas){
  this.tableroEnemigo;
  this.tableroPropio = new Tablero(coordenadas);
  
}

Jugador.prototype.disparar = function(fila,col){
  if (this.tableroEnemigo.tablero[fila][col]===0){
    this.tableroEnemigo.tablero[fila][col]="x";
  }
  else if(this.tableroEnemigo.tablero[fila][col]==="b"){
    this.tableroEnemigo.tablero[fila][col]="P";
  }
  this.tableroEnemigo.dibujarTablero();
}


var BatallaNaval= function (){
   this.jugador1 ;
   this.jugador2 ;

};
BatallaNaval.prototype.prepararJuego=function(coordenadasJ1,coordenadasJ2){
  this.jugador1 = new Jugador(coordenadasJ1);
  this.jugador2 = new Jugador(coordenadasJ2);

  this.jugador1.tableroEnemigo=this.jugador2.tableroPropio;
  this.jugador2.tableroEnemigo=this.jugador1.tableroPropio;
};



var juego= new BatallaNaval();

juego.prepararJuego([[2,3],[3,1]],[[2,1],[2,2]]);

juego.jugador1.disparar(3,2);
juego.jugador2.disparar(2,3);




















































