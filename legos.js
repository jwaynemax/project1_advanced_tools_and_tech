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
  this.hasBrick = hasBrick;
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

function hasBrick(size, color) {
  var found = (this.legoColors[color].find(size));
  if (found !== null) {
     return true
  }
  else {
     return false;
  }
}

var legoPile = new LegoPile();
legoPile.insert(new Brick(4, "Blue"));
legoPile.insert(new Brick(2, "Blue"));
legoPile.insert(new Brick(5, "Blue"));
legoPile.insert(new Brick(6, "Blue"));

console.log(legoPile.legoColors["Blue"].count());
