// use the function constructor
var Emitter = require('./emitter');

// make new emitter from the function constructor
var emtr = new Emitter();

// add the property and function to the array of the property
emtr.on('greet', function(){
	console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function(){
	console.log('A greeting occured!');
});
// now we have two listener will response went 'greet' happen

// now, it happens
emtr.emit('greet');