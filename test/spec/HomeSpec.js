describe("Convertidor de grados", function() {
  
  var miConvertidor;

  beforeEach(function() {
    miConvertidor = new Convertidor();
  });


  describe("cuando convierto de far a celcius", function() {
     beforeEach(function() {

    });

    it("los grados F son 32, deben ser 0 celcius", function() {
      resultado = miConvertidor.convertirACelcius(32);
      expect(resultado).toBe(0);
    });

    it("los grados F son 50, deben ser 10 celcius", function() {
      resultado = miConvertidor.convertirACelcius(50);
      expect(10).toBe(resultado);
    });

    it("los grados F son -50, deben ser -45.5556 celcius", function() {
      resultado = miConvertidor.convertirACelcius(-50);
      expect(-45.5556).toBe(resultado);
    });

    it("los grados F son 'hola', deben ser 'error de formato'", function() {
      resultado = miConvertidor.convertirACelcius('hola');
      expect('error de formato').toBe(resultado);
    });
    it("los grados F son es vacio, deben ser 'ingrese un numero'", function() {
      resultado = miConvertidor.convertirACelcius();
      expect("ingrese un numero").toBe(resultado);
    });
    
});
});
