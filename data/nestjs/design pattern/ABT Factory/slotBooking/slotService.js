// slotBooking/slotService.js
const physical = require('./physical');
const online = require('./online');

function bookSlot(type) {
    switch (type) {
        case 'physical': return physical;
        case 'online': return online;
        default: throw new Error('Unknown slot type');
    }
}
module.exports = { bookSlot };
