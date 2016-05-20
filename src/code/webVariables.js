var Calculadora = function(){

  this.sumar = function(valorUno,valorDos){
    return Number((valorUno + valorDos).toFixed(4));  
  }

  this.dividir = function(dividendo,divisor){
    if(divisor === 0){
      return 'error';
    }
    return dividendo / divisor;
  }
}