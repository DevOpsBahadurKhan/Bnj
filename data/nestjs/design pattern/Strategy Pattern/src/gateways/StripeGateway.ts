import { IPaymentGateway } from "./IPaymentGateway";
import { IPaymentMethod } from "../methods/IPaymentMethod";

export class StripeGateway implements IPaymentGateway {
  private method!: IPaymentMethod;

  setMethod(method: IPaymentMethod): void {
    this.method = method;
  }

  process(amount: number): void {
    console.log("🔁 Stripe Gateway Selected");
    this.method.pay(amount);
  }
}
