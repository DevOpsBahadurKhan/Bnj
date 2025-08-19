import { IPaymentGateway } from "../gateways/IPaymentGateway";
import { StripeGateway } from "../gateways/StripeGateway";
import { RazorpayGateway } from "../gateways/RazorpayGateway";

export class PaymentGatewayFactory {
    static create(gateway: string): IPaymentGateway {
        switch (gateway.toLowerCase()) {
            case "stripe":
                return new StripeGateway();
            case "razorpay":
                return new RazorpayGateway();
            default:
                throw new Error("❌ Unsupported payment gateway");
        }
    }
}
