"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeUPIMethod = void 0;
class StripeUPIMethod {
    pay(amount) {
        console.log(`✅ Stripe: Paid ₹${amount} via UPI`);
    }
}
exports.StripeUPIMethod = StripeUPIMethod;
