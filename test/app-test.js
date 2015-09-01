/*globals mocha, chai, describe, it */
(function () {
  'use strict';

  mocha.traceIgnores = ['mocha.js', 'chai.js'];
  mocha.setup('bdd');
  var assert = chai.assert;

  describe('Demo', function () {
    it('returns hello world', function () {
      assert.equal(window.sayHelloWorld(), 'hello world');
    });
  });

  mocha.run();
}());
