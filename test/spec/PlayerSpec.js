describe("Player", function() {
  var player;

  beforeEach(function() {
    player = new Player();
  });


  describe("when we want to play", function() {
    beforeEach(function() {

    });

    it("should indicate that the player can saludate", function() {
      expect("Hello world").toBe(player.phrase);
    });

    it("should indicate that the player it's ready", function() {

      player.play();
      expect("lets go!").toBe(player.phrase);
    });
});
});
