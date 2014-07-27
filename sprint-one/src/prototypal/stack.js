var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.currrentsize = 0;

  return someInstance;
};

var stackMethods = {
	push: function(value){
		this.storage[this.currrentsize] = value;
		this.currrentsize++;
	},

	pop: function(){
		if(this.currrentsize>0){
			this.currrentsize--;
		}

		return this.storage[this.currrentsize];
	},

	size: function(){
		return this.currrentsize;
	}
};