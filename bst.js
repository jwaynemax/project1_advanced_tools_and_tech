module.exports.Node = Node;
module.exports.BST = BST;

function Node(data, left, right) {
   this.data = data;
   this.left = left;
   this.right = right;
   this.show = show;
}

function show() {
   return this.data;
}

function BST() {
   this.root = null;
   this.insert = insert;
   this.inOrder = inOrder;
   this.find = find;
   this.count = count;
}

function insert(data) {
   var n = new Node(data.size, null, null);
   if (this.root === null) {
      this.root = n;
   }
   else {
      var current = this.root;
      var parent;
      while (true) {
         parent = current;
         if (data.size < current.data) {
            current = current.left;
            if (current === null) {
               parent.left = n;
               break;
            }
         }
         else {
            current = current.right;
            if (current === null) {
               parent.right = n;
               break;
            }
         }
      }
   }
}

function inOrder(node) {
   if (node !== null) {
      inOrder(node.left);
      console.log(node.show() + " ");
      inOrder(node.right);
   }
}

function find(data) {
     var current = this.root;
     while (current && current.data != data) {
        if (data < current.data) {
           current = current.left;
        }
        else {
           current = current.right;
        }
     }
     return current;
}

function count() {
  var node = this.root;

  var total = countSubtree(node);

  function countSubtree(node) {
    if (node !== null) {
       return 1 + countSubtree(node.left) + countSubtree(node.right);
    } else {
      return 0;
    }
  }

  return total;
}
