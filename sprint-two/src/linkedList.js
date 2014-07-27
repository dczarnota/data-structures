var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);

    if(list.head === null){
      list.head = node;
      list.tail = node;
    }
    
    list.head.next = node;
    list.tail = node;

  };

  list.removeHead = function(){
    var node = this;
    var removedHead = this.head.value;

    node.head = node.head.next;
    return removedHead;
  };

  list.contains = function(target){
    var node = this.head;
    var result = false;

    var containsNode = function(target, node, result){
      if(node.value === target){
        result = true;
        return result;
      }

      node = node.next;
      if(node){
        return containsNode(target, node, result);
      }

      return result;
    };

    return containsNode(target, node, result);

  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
