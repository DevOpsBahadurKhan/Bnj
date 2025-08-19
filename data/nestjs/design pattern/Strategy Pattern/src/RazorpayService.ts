export class RazorpayService {
  orders() {
    return (amount: number) => {
      console.log(`🛒 Creating Razorpay order for ₹${amount}`);
      return { orderId: `rzp_${Date.now()}`, amount };
    };
  }
}
