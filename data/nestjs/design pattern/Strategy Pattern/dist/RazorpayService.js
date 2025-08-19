"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RazorpayService = void 0;
class RazorpayService {
    orders() {
        return (amount) => {
            console.log(`🛒 Creating Razorpay order for ₹${amount}`);
            return { orderId: `rzp_${Date.now()}`, amount };
        };
    }
}
exports.RazorpayService = RazorpayService;
