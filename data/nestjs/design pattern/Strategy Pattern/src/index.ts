import { PaymentProcessor } from "./main";

// ---------- ✅ Execution ----------
const result = PaymentProcessor.processPayment({
  gateway: 'stripe',
  method: 'card', // change to 'upi' to test UPI
  amount: 499,
  details: {
    cardNumber: '1234567890123456',
    cvv: '123'
    // For UPI: upiId: 'user@upi'
  }
});

console.log('\n✅ Final Payment Result:', result);