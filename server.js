const EventEmitter = require('events')
const eventEmitter = new EventEmitter()




eventEmitter.on('start', (num) => console.log(`Es geht los ${num}`))




eventEmitter.emit('start', 132)