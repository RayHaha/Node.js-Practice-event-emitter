// use the function constructor
var Emitter = require('./emitter');
// grab config
var eventConfig = require('./config').events;

// make new emitter from the function constructor
var emtr = new Emitter();

// add the property and function to the array of the property
emtr.on(eventConfig.GREET, function(){
	console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig.GREET, function(){
	console.log('A greeting occured!');
});
// now we have two listener will response went 'greet' happen

// now, it happens
emtr.emit(eventConfig.GREET);

// now use the internal core JavaScript module
var events = require('events');
var emtr2 = new events();
emtr2.on(eventConfig.GREET, function(){
	console.log('Somewhere, someone said hello.');
});
emtr2.on(eventConfig.GREET, function(){
	console.log('A greeting occured!');
});
emtr2.emit(eventConfig.GREET);
// the only thing different is the firstline and the variable emtr
// others are all the same, that how to use the internal core.