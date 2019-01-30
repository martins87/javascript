var tree = [];
var uniqueCategoryNames = [];

function Node(name, parent) {

  this.name = name;
  this.children = [];
  this.parent = parent;
  
  uniqueCategoryNames.push(name)
  
  this.isValidName = function(name, parent) {
    var i;
    
    for(i = 0; i < uniqueCategoryNames.length; i++) {
      if(uniqueCategoryNames[i] == name) {
        return false;
      }
    }
    
    for(i = 0; uniqueCategoryNames[i] != parent; i++);
    
    if(i == uniqueCategoryNames.length) {
      return false;
    }
    
    return true;
  }
  
  this.getName = function() {
    return this.name;
  }
  
  this.getChildren = function() {
    return this.children;
  }
  
  this.getParent = function() {
    return this.parent;
  }
  
  this.findNode = function(element, name) {
    if(element.name == name) {
      return element;
    } else if (element.children.length > 0) {
      var result = null;
      for(let i = 0; result === null && i < element.children.length; i++) {
        result = this.findNode(element.children[i], name);
      }
      return result;
    }
    
    return null;
  }
  
  this.addCategory = function(name, parent) {
    
    if(!this.isValidName(name, parent)) {
      throw new Error("InvalidArgumentException");
    }
    
    if (parent === null) {
      tree.push(new Node(name, null));
    } else {
      var parentNode = this.findNode(this, parent);
      parentNode.children.push(new Node(name, parent));
    }
  }
  
}

tree.push(new Node('A', null));
tree.push(new Node('G', null));

tree[0].addCategory('B', 'A');
tree[0].addCategory('C', 'A');
tree[0].addCategory('D', 'C');
tree[0].addCategory('E', 'C');
tree[0].addCategory('F', 'C');
tree[0].addCategory('Z', 'F');

tree[1].addCategory('H', 'G');

for(let i = 0; i < tree.length; i++) {
  console.log('Tree: ' + tree[i].getName());
  console.log('Children:');
  console.log(tree[i].getChildren())
}
