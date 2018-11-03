// establish something like event emitter in node.js by myself

// use a function constructor -> can create multiple application
function Emitter(){
	this.events = {};
}

// add a prototype function with type and listener
Emitter.prototype.on = function(type, listener){
	// make sure that property is existed and it will be an array
	this.events[type] = this.events[type] || [];

	// then push the listener function into the array
	this.events[type].push(listener);
	/*
		it will be something like this
		{
			gotSomethingFromInternet: [function(){}, function(){}]
		}
	*/
}

// a function emit that represent something happen
Emitter.prototype.emit = function(type){
	// if I have the property, I'll loop over the function in the array
	if(this.events[type]){
		this.events[type].forEach(function(listener){
			listener();
		});
	}
}

module.exports = Emitter;