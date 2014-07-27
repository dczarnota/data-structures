//PSEUDOCLASSICAL PATTERN
var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.currentsize = 0;
  this.front = 0;
  this.index = 0;
};

Queue.prototype.enqueue = function(value) {
	this.storage[this.index] = value;
	this.currentsize++;
	this.index++;
};

Queue.prototype.dequeue = function() {
	if(this.currentsize>0){
		this.currentsize--;
	}

	var result = this.storage[this.front];
	delete this.storage[this.front];
	this.front++;

	return result;
};

Queue.prototype.size = function() {
	return this.currentsize;
};