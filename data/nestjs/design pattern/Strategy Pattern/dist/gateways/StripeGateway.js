"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeGateway = void 0;
class StripeGateway {
    setMethod(method) {
        this.method = method;
    }
    process(amount) {
        console.log("🔁 Stripe Gateway Selected");
        this.method.pay(amount);
    }
}
exports.StripeGateway = StripeGateway;
