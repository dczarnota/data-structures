var makeBinarySearchTree = function(value){
	var newTree = Object.create(treePrototype);
	newTree.value = value;
	newTree.left = null;
	newTree.right = null;

	return newTree;
};

var treePrototype = {};

treePrototype.insert = function(value){
	var node = makeBinarySearchTree(value);
	var parent = this;

	var insertNode = function(parent, value){
		//if node > parent, check for children on parent's right
		if(value > parent.value){
			//if no children then push node to right side, else recursion
			if(parent.right === null){
				parent.right = node;
				return parent.right;
			}
			parent = parent.right;
			insertNode(parent, value);
		}
		//if node < parent, check for children on parent's left
		if(value < parent.value){
			//if no children then push node to right side, else recursion
			if(parent.left === null){
				parent.left = node;
				return parent.left;
			}
			parent = parent.left;
			insertNode(parent, value);
		}
	};

	insertNode(parent, value);
};

treePrototype.contains = function(target){
	var node = this;
	var result = false;
	
	var checkNode = function(node, target){
		if(node.value === target){
			result = true;
			return result;
		}

		if(node.right === null && node.left === null && node.value !== target){
			return result;
		}

		if(node.value < target){
			node = node.right;
			checkNode(node, target);
		}

		if(node.value > target){
			node = node.left;
			checkNode(node, target);
		}

		return result;
	};

	return checkNode(node, target);
};

treePrototype.depthFirstLog = function(callback){

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
