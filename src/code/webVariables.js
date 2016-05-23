var juego;

window.onload = function(){
  

  juego= new BatallaNaval();
  juego.prepararJuego([[2,3],[3,1]],[[2,1],[2,2]]);
  juego.jugador1.tableroEnemigo.dibujarTablero();

  var tds = document.getElementsByTagName("td");
  for(var i = 0; i<tds.length; i++){
    tds[i].onclick = shoot;
  }
}

var shoot = function(event){

  var id = event.target.id;
  var coordenadas = id.split("-");
  juego.jugador1.disparar(coordenadas[1],coordenadas[2]);
  

}


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

    var tabla = document.getElementById("jugador1");
    var filas = tabla.getElementsByTagName("tr");
    
    for(var i = 0; i < filas.length; i++){

      var casillas = filas[i].getElementsByTagName("td");
      
      for(var j = 0; j < casillas.length; j++){
        if(juego.jugador1.tableroEnemigo.tablero[i][j]==="x"){
          casillas[j].className = "disparoFallido";  
        }else if(juego.jugador1.tableroEnemigo.tablero[i][j]==="p"){
          casillas[j].className = "disparo"; 
        }else{
          casillas[j].className = "mar"; 
        }
      }
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
    this.tableroEnemigo.tablero[fila][col]="p";
  }
  this.tableroEnemigo.dibujarTablero();
}


var BatallaNaval = function (){
   this.jugador1 ;
   this.jugador2 ;

};
BatallaNaval.prototype.prepararJuego=function(coordenadasJ1,coordenadasJ2){
  this.jugador1 = new Jugador(coordenadasJ1);
  this.jugador2 = new Jugador(coordenadasJ2);

  this.jugador1.tableroEnemigo=this.jugador2.tableroPropio;
  this.jugador2.tableroEnemigo=this.jugador1.tableroPropio;

  
};


























































