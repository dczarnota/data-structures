//PSEUDOCLASSICAL PATTERN
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.currentsize = 0;
  this.storage = {};
};

Stack.prototype.push = function(value){
	this.storage[this.currentsize] = value;
	this.currentsize++;
};

Stack.prototype.pop = function(){
	if(this.currentsize>0){
		this.currentsize--;
	}

	var result = this.storage[this.currentsize];
	delete this.storage[this.currentsize];

	return result;
};

Stack.prototype.size = function(){
	return this.currentsize;
};