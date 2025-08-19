"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationContext = void 0;
class NotificationContext {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    processPayment(amount) {
        this.strategy.pay(500);
    }
}
exports.NotificationContext = NotificationContext;
