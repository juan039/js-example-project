describe("Calculadora", function() {
  var miCalculadora;

  beforeEach(function() {
    miCalculadora = new Calculadora();
  });


  describe("cuando sume:", function() {
    beforeEach(function() {

    });

    it("2 + 2 el resultado debera ser 4", function() {

      var resultado = miCalculadora.sumar(2,2);

      expect(resultado).toBe(4);
    });

    it("7 + 3 el resultado debera ser 10", function() {

      var resultado = miCalculadora.sumar(7,3);

      expect(resultado).toBe(10);
    });

    it("1/3 + 2/5 el resultado debera ser 0.7333", function() {

      var resultado = miCalculadora.sumar(1/3,2/5);

      expect(resultado).toBe(0.7333);
    });

    it("-5 + 7 el resultado debera ser 2", function() {

      var resultado = miCalculadora.sumar(-5,7);

      expect(resultado).toBe(2);
    });
});

  describe("cuando divida:",function(){

    it(" 10 / 5 debera resultar en 2",function(){
      var resultado = miCalculadora.dividir(10,5);
      expect(resultado).toBe(2);
    });

    it(" 5 / 0 debera resultar en error",function(){
      var resultado = miCalculadora.dividir(5,0);
      expect(resultado).toBe('error');
    });

  });
});
