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

// now use the internal core JavaScript module
var events = require('events');
var emtr2 = new events();
emtr2.on('greet', function(){
	console.log('Somewhere, someone said hello.');
});
emtr2.on('greet', function(){
	console.log('A greeting occured!');
});
emtr2.emit('greet');
// the only thing different is the firstline and the variable emtr
// others are all the same, that how to use the internal core.