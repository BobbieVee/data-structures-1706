function Queue() {
	var value = 0;
	this.array = [];

	this.enqueue = function(value){
		this.array.push(value);
		this.size(1)
	};

	this.dequeue = function(){
		this.size(-1);	
		return this.array.shift(value);
	};

	this.size = function(amount){
		if (amount === -1 && value === 0) return 0;
		if (amount) {
			return value = value + amount;
		}
		return value;
	};
}