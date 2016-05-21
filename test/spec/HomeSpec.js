describe("Calculador de precios", function() {
  var calculadorDePrecios;

  beforeEach(function() {
    calculadorDePrecios = new CalculadorDePrecios();
  });

  it("al comprar 1 item de 500 en Colombia, el valor debe ser de 580", function() {
      var precio = calculadorDePrecios.calcular(1,500,'Colombia');  
      expect(precio).toBe(580);
    });
    it("al comprar 5 item de 500 en Colombia, el valor debe ser de 2755", function() {
      var precio = calculadorDePrecios.calcular(5,500,'Colombia');  
      expect(precio).toBe(2755);
    });
    it("al comprar 12 item de 500 en Colombia, el valor debe ser de 6472.8", function() {
      var precio = calculadorDePrecios.calcular(12,500,'Colombia');  
      expect(precio).toBe(6472.8);
    });
    it("al comprar 21 item de 500 en Colombia, el valor debe ser de 10962", function() {
      var precio = calculadorDePrecios.calcular(21,500,'Colombia');  
      expect(precio).toBe(10962);
    });
    it("al comprar 41 item de 500 en Colombia, el valor debe ser de 20213", function() {
      var precio = calculadorDePrecios.calcular(41,500,'Colombia');  
      expect(precio).toBe(20213);
    });
    it("al comprar 41 item de 500 en Perú, el valor debe ser de 19690.25", function() {
      var precio = calculadorDePrecios.calcular(41,500,'Perú');  
      expect(precio).toBe(19690.25);
    });
    it("al comprar 41 item de 500 en Mexico, el valor debe ser de 20910", function() {
      var precio = calculadorDePrecios.calcular(41,500,'Mexico');  
      expect(precio).toBe(20910);
    });
    it("al comprar 41 item de 500 en Argentina, el valor debe ser de 18470.5", function() {
      var precio = calculadorDePrecios.calcular(41,500,'Argentina');  
      expect(precio).toBe(18470.5);
    });
    it("al comprar 41 item de 500 en Panama, el valor debe ser de 19167.5", function() {
      var precio = calculadorDePrecios.calcular(41,500,'Panama');  
      expect(precio).toBe(19167.5);
    });

});


