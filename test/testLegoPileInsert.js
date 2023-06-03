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

describe('testInsertOneBrickOfEachColor', function () {
    it('validates one brick inserted into LegoPile for each color', function () {
      const legoPile = new LegoPile();
      const brick0 = new Brick(4, "Red");
      const brick1 = new Brick(4, "Green");
      const brick2 = new Brick(4, "Blue");
      const brick3 = new Brick(4, "Yellow");
      const brick4 = new Brick(4, "Black");
      const brick5 = new Brick(4, "White");
      legoPile.insert(brick0);
      legoPile.insert(brick1);
      legoPile.insert(brick2);
      legoPile.insert(brick3);
      legoPile.insert(brick4);
      legoPile.insert(brick5 );

      assert.equal(legoPile.legoColors["Red"].root.data, brick0.size);
      assert.equal(legoPile.legoColors["Green"].root.data, brick1.size);
      assert.equal(legoPile.legoColors["Blue"].root.data, brick2.size);
      assert.equal(legoPile.legoColors["Yellow"].root.data, brick3.size);
      assert.equal(legoPile.legoColors["Black"].root.data, brick4.size);
      assert.equal(legoPile.legoColors["White"].root.data, brick5.size);
    });
});

describe('testInsertSeveralBricksOfOneColor', function () {
    it('validates several bricks of one color in LegoPile', function () {
      const legoPile = new LegoPile();
      const brick0 = new Brick(4, "Red");
      const brick1 = new Brick(2, "Red");
      const brick2 = new Brick(5, "Red");
      legoPile.insert(brick0);
      legoPile.insert(brick1);
      legoPile.insert(brick2);

      assert.equal(legoPile.legoColors["Red"].root.data, brick0.size);
      assert.equal(legoPile.legoColors["Red"].root.left.data, brick1.size);
      assert.equal(legoPile.legoColors["Red"].root.right.data, brick2.size);
    });
});
