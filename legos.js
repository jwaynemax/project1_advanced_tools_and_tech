module.exports.Brick = Brick;
module.exports.LegoPile = LegoPile;
var bst = require('./bst');
const BST = bst.BST;

function Brick (size, color) {
  return {
    size: size,
    color: color
  }
}

function LegoPile () {
  this.legoColors = {
    "Red": new BST(),
    "Green": new BST(),
    "Blue": new BST(),
    "Yellow": new BST(),
    "Black": new BST(),
    "White": new BST()
  }
  this.insert = insert;
}

function insert(brick) {
  var current = brick.color;
  if (current == "Red") {
    this.legoColors["Red"].insert(brick);
  }
  if (current == "Green") {
    this.legoColors["Green"].insert(brick);
  }
  if (current == "Blue") {
    this.legoColors["Blue"].insert(brick);
  }
  if (current == "Yellow") {
    this.legoColors["Yellow"].insert(brick);
  }
  if (current == "Black") {
    this.legoColors["Black"].insert(brick);
  }
  if (current == "White") {
    this.legoColors["White"].insert(brick);
  }
}

const legoPile = new LegoPile();
legoPile.insert(new Brick(4, "Red"));

console.log(legoPile.legoColors["Red"].root.data);
