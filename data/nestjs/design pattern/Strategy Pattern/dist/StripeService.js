"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeService = void 0;
class StripeService {
    orders() {
        return (amount) => {
            console.log(`🛒 Creating Stripe order for ₹${amount}`);
            return { orderId: `rzp_${Date.now()}`, amount };
        };
    }
}
exports.StripeService = StripeService;
