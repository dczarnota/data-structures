var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
	var tree = makeTree(value);
	this.children.push(tree);
};

treeMethods.contains = function(target){
	var node = this;
	var result = false;

	var checkNode = function(node, target){
		if(node.value === target){
			result = true;
			return result;
		}
		if(node.children.length > 0){
			for (var i = 0; i < node.children.length; i++) {
				checkNode(node.children[i], target);
			}
		}
    	return result;
	};

	checkNode(node, target);
	return result;

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
