var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const BST = bst.BST;


const tree = new BST();
const brick0 = new Brick(4, "blue");
const brick1 = new Brick(3, "blue");
const brick2 = new Brick(5, "blue");
const brick3 = new Brick(2, "blue");
const brick4 = new Brick(6, "blue");
const brick5 = new Brick(7, "blue");


tree.insert(brick0);
tree.insert(brick1);
tree.insert(brick2);
tree.insert(brick3);
tree.insert(brick4);
tree.insert(brick5);



describe('testBSTInsert', function () {
    it('validates the correct root node', function () {

      assert.equal(tree.root.data, brick0.size);
    });
});

describe('testLeftNode', function () {
    it('root plus a left child', function () {

      assert.equal(tree.root.data, brick0.size);
      assert.equal(tree.root.left.data, brick1.size);
    });
});

describe('testRightNode', function () {
    it('root plus a left child', function () {

      assert.equal(tree.root.data, brick0.size);
      assert.equal(tree.root.right.data, brick2.size);
    });
});

describe('testLeftRightNode', function () {
    it('root plus a left child', function () {

      assert.equal(tree.root.data, brick0.size);
      assert.equal(tree.root.left.data, brick1.size);
      assert.equal(tree.root.right.data, brick2.size);
    });
});

describe('testNodesOnBST', function () {
    it('nodes sorted on tree', function () {

      assert.equal(tree.root.data, brick0.size);
      assert.equal(tree.root.left.data, brick1.size);
      assert.equal(tree.root.right.data, brick2.size);
      assert.equal(tree.root.left.left.data, brick3.size);
      assert.equal(tree.root.right.right.data, brick4.size);
      assert.equal(tree.root.right.right.right.data, brick5.size);
    });
});
