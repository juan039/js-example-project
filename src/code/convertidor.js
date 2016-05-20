var Convertidor = function(){


  this.convertirACelcius = function(fahrenheint){
    if (typeof fahrenheint === 'number') {
      return Number(((fahrenheint-32) * 5/9).toFixed(4));
    }
    else if(fahrenheint === undefined){
      return 'ingrese un numero';
    }
    else{
      return 'error de formato';
    }

  }

}