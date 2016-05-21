var CalculadorDePrecios = function(){
  this.descuentos=[0.95,0.93,0.90,0.85];
  this.rangos =[ 1000,5000,10000,20000];
  this.impuestos = {
        "Colombia":1.16,
        "Perú":1.13,
        "Mexico":1.2,
        "Argentina":1.06,
        "Panama":1.1
  };
}



CalculadorDePrecios.prototype.calcularImpuesto = function(precioTotal,pais){
      return Math.round((precioTotal * this.impuestos[pais])*100)/100;
  };

CalculadorDePrecios.prototype.calcularDescuento = function(cantidad,precioUnitario){
    var total = cantidad*precioUnitario;
      for (var i= this.descuentos.length - 1; i >= 0; i--){
          if (total>this.rangos[i]){
            total = total * this.descuentos[i];
            break;
          }
      }
      return total;
  };
CalculadorDePrecios.prototype.calcular = function(cantidad,precioUnitario,pais){
   
      var precioTotal= this.calcularDescuento(cantidad,precioUnitario);   
      return this.calcularImpuesto(precioTotal,pais);
};

