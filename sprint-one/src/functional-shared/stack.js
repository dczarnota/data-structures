var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.currentsize = 0;

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
	push: function(value){
		this.storage[this.currentsize] = value;
		this.currentsize++;
	},
	pop: function(){
		if(this.currentsize>0){
			this.currentsize--;
		}
		var result = this.storage[this.currentsize];
		delete this.storage[this.currentsize];
		return result;
	},
	size: function(){ 
		return this.currentsize; 
	}
};