// notification/notificationService.js
// notification factory
let email = require('./email');
let sms = require('./sms');
let pushNotification = require('./pushNotification');

function sendNotification(type) {
    switch (type) {
        case 'email':
            return email;
        case 'sms':
            return sms;
        case 'push':
            return pushNotification;
        default:
            throw new Error('❌ Unknown notification type: ' + type);
    }
}

module.exports = { sendNotification };