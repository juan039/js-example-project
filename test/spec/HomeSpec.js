describe("Factorizador", function() {
  var miFactorizador;

  beforeEach(function() {
    miFactorizador = new Factorizador();
  });

  it("Los factores primos de 2, deben ser [2]", function() {

    var resultado = miFactorizador.calcular(2);
    expect(resultado.length).toBe(1);
    expect(resultado[0]).toBe(2);

  });

    it("Los factores primos de 3, deben ser [3]", function() {

    var resultado = miFactorizador.calcular(3);
    expect(resultado.length).toBe(1);
    expect(resultado[0]).toBe(3);
    
  });

     it("Los factores primos de 4, deben ser [2,2]", function() {

    var resultado = miFactorizador.calcular(4);
    expect(resultado.length).toBe(2);
    expect(resultado[0]).toBe(2);
    expect(resultado[1]).toBe(2);
    
  });

      it("Los factores primos de 432, deben ser [2,2,2,2,3,3,3]", function() {

    var resultado = miFactorizador.calcular(432);
    expect(resultado.length).toBe(7);
    expect(resultado[0]).toBe(2);
    expect(resultado[1]).toBe(2);
    expect(resultado[2]).toBe(2);
    expect(resultado[3]).toBe(2);
    expect(resultado[4]).toBe(3);
    expect(resultado[5]).toBe(3);
    expect(resultado[6]).toBe(3);

    
  });
});
