var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const BST = bst.BST;


const tree = new BST();
const brick0 = new Brick(4, "blue");

tree.insert(brick0);

console.log(tree.root.data);
