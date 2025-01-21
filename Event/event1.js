const Event = require('events');
const myEmitter = new Event;

//event listener
myEmitter.on('event1',()=>{
    console.log('An event occurred')
});

myEmitter.emit('event1');

myEmitter.on('event2',(msg)=>{
    console.log('An event occured');
    console.log(msg,'From First on');
})
    
// myEmitter.emit('event2','Hello Anuj');

myEmitter.on('event2',(msg)=>{
    console.log(msg,'From second on');
})

myEmitter.emit('event2',"Hello");