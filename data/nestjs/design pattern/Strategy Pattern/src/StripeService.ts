export class StripeService {
    orders() {
        return (amount: number) => {
            console.log(`🛒 Creating Stripe order for ₹${amount}`);
            return { orderId: `rzp_${Date.now()}`, amount };
        };
    }
}
