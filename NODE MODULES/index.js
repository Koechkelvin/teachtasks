
const EventEmitter = require('events');
const logEvents = require('./LogEvents');
class myevent extends EventEmitter{}
const eventLogger = new myevent();

eventLogger.on('log', async (message) => {
    await logEvents(message);
});

setInterval(() => {
    eventLogger.emit('log', 'New event ID and date emitted');
}, 2000);
