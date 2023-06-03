var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const LegoPile = lego.LegoPile;
const BST = bst.BST;



describe('testInsertOneBrick', function () {
    it('validates one brick inserted into LegoPile', function () {
      const legoPile = new LegoPile();
      const brick0 = new Brick(4, "Red");
      legoPile.insert(brick0);

      assert.equal(legoPile.legoColors["Red"].root.data, brick0.size);
    });
});
