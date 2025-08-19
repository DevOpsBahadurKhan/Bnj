"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeCardMethod = void 0;
class StripeCardMethod {
    pay(amount) {
        console.log(`✅ Stripe: Paid ₹${amount} via Card`);
    }
}
exports.StripeCardMethod = StripeCardMethod;
