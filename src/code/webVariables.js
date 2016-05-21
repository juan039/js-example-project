var CalculadorDePrecios = function(){
  var descuentos=[0.95,0.93,0.90,0.85];
  var rangos =[ 1000,5000,10000,20000];
  var impuestos = {
        "Colombia":1.16,
        "Perú":1.13,
        "Mexico":1.2,
        "Argentina":1.06,
        "Panama":1.1
  };
  //PUBLICO
  this.calcular = function(cantidad,precioUnitario,pais){
   
      var precioTotal= calcularDescuento(cantidad,precioUnitario);   
      return calcularImpuesto(precioTotal,pais);
  };
  //PRIVADO
  var calcularImpuesto=function(precioTotal,pais){
      return Math.round((precioTotal * impuestos[pais])*100)/100;
  };
  var calcularDescuento = function(cantidad,precioUnitario){
    var total = cantidad*precioUnitario;
      for (var i= descuentos.length - 1; i >= 0; i--){
          if (total>rangos[i]){
            total = total * descuentos[i];
            break;
          }
      }
      return total;
  };
  
}

var cal= [];
for(var i = 0;i< 1000000;i++){
  cal.push(new CalculadorDePrecios());
}