import { StripeService } from "./StripeService";
import { RazorpayService } from "./RazorpayService";

export interface IGateway {
  process(amount: number, strategy: IMethod): any;
}

export interface IMethod {
  pay(amount: number): any;
}


// ---------- Payment Methods (Strategy) ----------
export class UpiMethod implements IMethod {
  constructor(private upiId: string) { }

  pay(amount: number) {
    console.log(`💰 Paying ₹${amount} via UPI (${this.upiId})`);
    return {
      method: 'UPI',
      status: 'paid',
      upiId: this.upiId
    };
  }
}

export class CardMethod implements IMethod {
  constructor(private cardNumber: string, private cvv: string) { }

  pay(amount: number) {
    console.log(`💳 Paying ₹${amount} via Card ending in ${this.cardNumber.slice(-4)}`);
    return {
      method: 'Card',
      status: 'paid',
      last4: this.cardNumber.slice(-4)
    };
  }
}

// ---------- Razorpay Adapter (Gateway) ----------
export class RazorpayGateway implements IGateway {
  private razorpayService = new RazorpayService();

  process(amount: number, strategy: IMethod): any {
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

export class StripeGateway implements IGateway {
  private stripeService = new StripeService();

  process(amount: number, strategy: IMethod): any {
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


export class GatewayFactory {
  static create(gateway: string): IGateway {
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

export class MethodFactory {
  static create(method: string, details: any): IMethod {
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

// ---------- Payment Processor (Orchestrator) ----------
export class PaymentProcessor {
  static processPayment(config: {
    gateway: string;
    method: string;
    amount: number;
    details: any;
  }) {
    const gateway = GatewayFactory.create(config.gateway);
    const method = MethodFactory.create(config.method, config.details);
    return gateway.process(config.amount, method);
  }


}


