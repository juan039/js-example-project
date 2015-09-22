var Browser = require('zombie');
var should = require('should');

var World = function(callback){
  this.browser = new Browser({
    runScripts: true,
    debug: false,
    waitDuration: 15*1000
  });
  callback();
};

exports.World = World;
