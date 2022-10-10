const EventEmitter = require('node:events');

const emitter = new EventEmitter();

emitter.on('firstEvent', ()=> {
    console.log('this is my first node Event');
});

emitter.on('secondEvent', (e)=> {
    console.log('this is my second node Event with an jsObject', e.name, e.position);
});


emitter.emit('firstEvent');
emitter.emit('secondEvent', {name: 'Md. Omar Faruk', position: 'JavaScript Developer'});