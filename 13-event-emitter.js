// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')
const { method } = require('lodash')

const customerEmitter = new EventEmitter()

//on and emit methods
//keep track of the order 
//additional arguments
//built-in modules utilize it 
customerEmitter.on('response', (name,id)=> {
    console.log(`data received user ${name} with id ${id}`)
})

customerEmitter.on('response', ()=>{
    console.log('some other logic here')
})

customerEmitter.emit('response', 'john', 34)