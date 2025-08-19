"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
// ---------- ✅ Execution ----------
const result = main_1.PaymentProcessor.processPayment({
    gateway: 'stripe',
    method: 'card', // change to 'upi' to test UPI
    amount: 499,
    details: {
        cardNumber: '1234567890123456',
        cvv: '123'
        // For UPI: upiId: 'user@upi'
    }
});
console.log('\n✅ Final Payment Result:', result);
