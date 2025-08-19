const { sendNotification } = require('./Notification/notificationService');
const { bookSlot } = require('./slotBooking/slotService');

function getAppointmentFactory(appointmentType, options = {}) {
    const slot = bookSlot(appointmentType);
    const notifier = sendNotification(options.notification);

    return {
        bookSlot: () => console.log(slot.book().msg),
        sendNotification: () => console.log(notifier.send().msg)
    };
}

// 🔸 Testing

console.log('🩺 PHYSICAL + SMS');
const physical = getAppointmentFactory('physical', { notification: 'sms' });
physical.bookSlot();
physical.sendNotification();

console.log('\n🌐 ONLINE + EMAIL');
const online = getAppointmentFactory('online', { notification: 'email' });
online.bookSlot();
online.sendNotification();

console.log('\n📱 ONLINE + PUSH');
const push = getAppointmentFactory('online', { notification: 'push' });
push.bookSlot();
push.sendNotification();
