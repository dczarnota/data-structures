var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = [];

  if(this._storage.get(i) === undefined){
  	bucket.push([k ,v]);
  	this._storage.set(i, bucket);
  }

  bucket = this._storage.get(i);
  var foundTuple = false;
  for(var j=0; j<bucket.length; j++){
  	var tuple = bucket[j]
  	if(tuple[0] === k){
  		tuple = [k ,v];
  		foundTuple = true;
  		break;
  	}
  }

  if(!foundTuple){
  	bucket.push([k ,v]);	
  }
  
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);

  if(!bucket){
  	return null;
  }

  for(var j=0; j<bucket.length; j++){
  	if(bucket[j][0] === k){
  		return bucket[j][1];
  	}
  }

  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);
  if(!bucket){
  	return null;
  }

  for(var j=0; j<bucket.length; j++){
  	var tuple = bucket[j];
  	if(tuple[0] === k){
  		bucket.splice(j);
  	}
  }
  return null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
