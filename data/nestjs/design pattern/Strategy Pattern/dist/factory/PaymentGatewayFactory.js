"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentGatewayFactory = void 0;
const StripeGateway_1 = require("../gateways/StripeGateway");
const RazorpayGateway_1 = require("../gateways/RazorpayGateway");
class PaymentGatewayFactory {
    static create(gateway) {
        switch (gateway.toLowerCase()) {
            case "stripe":
                return new StripeGateway_1.StripeGateway();
            case "razorpay":
                return new RazorpayGateway_1.RazorpayGateway();
            default:
                throw new Error("❌ Unsupported payment gateway");
        }
    }
}
exports.PaymentGatewayFactory = PaymentGatewayFactory;
