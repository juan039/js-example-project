describe("Home site", function() {
  var webVariables;

  beforeEach(function() {
    webVariables = new WebVariables();
  });


  describe("when we want to go the site", function() {
    beforeEach(function() {

    });

    it("should indicate that the web site can saludate", function() {
      expect(webVariables.title).toBe("JS jasmine example");
    });
});
});
