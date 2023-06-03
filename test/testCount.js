var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const LegoPile = lego.LegoPile;
const BST = bst.BST;


describe('testBstCount', function () {
    it('validate count of nodes in single BST', function () {
      const legoPile = new LegoPile();
      legoPile.insert(new Brick(4, "Blue"));
      legoPile.insert(new Brick(2, "Blue"));
      legoPile.insert(new Brick(5, "Blue"));
      legoPile.insert(new Brick(6, "Blue"));

      assert.equal(legoPile.legoColors["Blue"].count(), 4);
    });
});

describe('testTotalCount', function () {
    it('validate count of nodes in all color BSTs', function () {
      const legoPile = new LegoPile();
      legoPile.insert(new Brick(4, "Blue"));
      legoPile.insert(new Brick(2, "Yellow"));
      legoPile.insert(new Brick(5, "Green"));
      legoPile.insert(new Brick(6, "Blue"));
      legoPile.insert(new Brick(6, "Red"));


      assert.equal(legoPile.count(), 5);
    });
});
