import { IPaymentMethod } from "../IPaymentMethod";

export class StripeUPIMethod implements IPaymentMethod {
  pay(amount: number): void {
    console.log(`✅ Stripe: Paid ₹${amount} via UPI`);
  }
}
