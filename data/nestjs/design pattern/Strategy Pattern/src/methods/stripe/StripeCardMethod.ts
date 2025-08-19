import { IPaymentMethod } from "../IPaymentMethod";

export class StripeCardMethod implements IPaymentMethod {
    pay(amount: number): void {
        console.log(`✅ Stripe: Paid ₹${amount} via Card`);
    }
}
