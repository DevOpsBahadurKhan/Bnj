"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentProcessor = exports.MethodFactory = exports.GatewayFactory = exports.StripeGateway = exports.RazorpayGateway = exports.CardMethod = exports.UpiMethod = void 0;
const StripeService_1 = require("./StripeService");
const RazorpayService_1 = require("./RazorpayService");
// ---------- Payment Methods (Strategy) ----------
class UpiMethod {
    constructor(upiId) {
        this.upiId = upiId;
    }
    pay(amount) {
        console.log(`💰 Paying ₹${amount} via UPI (${this.upiId})`);
        return {
            method: 'UPI',
            status: 'paid',
            upiId: this.upiId
        };
    }
}
exports.UpiMethod = UpiMethod;
class CardMethod {
    constructor(cardNumber, cvv) {
        this.cardNumber = cardNumber;
        this.cvv = cvv;
    }
    pay(amount) {
        console.log(`💳 Paying ₹${amount} via Card ending in ${this.cardNumber.slice(-4)}`);
        return {
            method: 'Card',
            status: 'paid',
            last4: this.cardNumber.slice(-4)
        };
    }
}
exports.CardMethod = CardMethod;
// ---------- Razorpay Adapter (Gateway) ----------
class RazorpayGateway {
    constructor() {
        this.razorpayService = new RazorpayService_1.RazorpayService();
    }
    process(amount, strategy) {
        const createOrder = this.razorpayService.orders();
        const methodResult = strategy.pay(amount);
        const order = createOrder(amount);
        return {
            gateway: 'Razorpay',
            methodResult,
            order
        };
    }
}
exports.RazorpayGateway = RazorpayGateway;
class StripeGateway {
    constructor() {
        this.stripeService = new StripeService_1.StripeService();
    }
    process(amount, strategy) {
        const createOrder = this.stripeService.orders();
        const methodResult = strategy.pay(amount);
        const order = createOrder(amount);
        return {
            gateway: 'Stripe',
            methodResult,
            order
        };
    }
}
exports.StripeGateway = StripeGateway;
class GatewayFactory {
    static create(gateway) {
        switch (gateway.toLowerCase()) {
            case 'razorpay':
                return new RazorpayGateway();
            case 'stripe':
                return new StripeGateway(); // future extension
            default:
                throw new Error(`❌ Unsupported gateway: ${gateway}`);
        }
    }
}
exports.GatewayFactory = GatewayFactory;
class MethodFactory {
    static create(method, details) {
        switch (method.toLowerCase()) {
            case 'upi':
                return new UpiMethod(details.upiId);
            case 'card':
                return new CardMethod(details.cardNumber, details.cvv);
            default:
                throw new Error(`❌ Unsupported method: ${method}`);
        }
    }
}
exports.MethodFactory = MethodFactory;
// ---------- Payment Processor (Orchestrator) ----------
class PaymentProcessor {
    static processPayment(config) {
        const gateway = GatewayFactory.create(config.gateway);
        const method = MethodFactory.create(config.method, config.details);
        return gateway.process(config.amount, method);
    }
}
exports.PaymentProcessor = PaymentProcessor;
