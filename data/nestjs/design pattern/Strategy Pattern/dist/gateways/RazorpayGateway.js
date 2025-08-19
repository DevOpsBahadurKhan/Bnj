"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RazorpayGateway = void 0;
class RazorpayGateway {
    setMethod(method) {
        this.method = method;
    }
    process(amount) {
        console.log("🔁 Razorpay Gateway Selected");
        this.method.pay(amount);
    }
}
exports.RazorpayGateway = RazorpayGateway;
