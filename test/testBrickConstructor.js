var assert = require('assert');
var lego = require('../legos');
const Brick = lego.Brick;

describe('createLego', function () {
    it('should create a lego with specified size and color', function () {
      const brick0 = new Brick(3, "blue");

      assert.equal(brick0.size, 3);
      assert.equal(brick0.color, "blue");

    });
});
