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
  this.count = count;
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

function count() {
  var red = this.legoColors["Red"].count();
  var green = this.legoColors["Green"].count();
  var blue = this.legoColors["Blue"].count();
  var yellow = this.legoColors["Yellow"].count();
  var black = this.legoColors["Black"].count();
  var white = this.legoColors["White"].count();

  var count = red + green + blue + yellow + black + white;

  return count;
}
