var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.currentsize = 0;
  someInstance.index = 0;
  someInstance.front = 0;

  return someInstance;
};

var queueMethods = {
	enqueue: function(value){
		this.storage[this.index] = value;
		this.currentsize++;
		this.index++;
	},

	dequeue: function(){
		if(this.currentsize>0){
			this.currentsize--;
		}

		var result = this.storage[this.front];
		delete this.storage[this.front];
		this.front++;

		return result;
	},

	size: function(){
		return this.currentsize;
	}
};


