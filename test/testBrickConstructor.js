var assert = require('assert');
var lego = require('../legos');
const Brick = lego.Brick;

describe('createLego', function () {
    it('should create a lego with specified size and color', function () {

      assert.equal(Brick(3, "blue"), "size is: 3, color is: blue");
    });
});
