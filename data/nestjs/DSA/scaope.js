

function otpManager() {
    let otp;
    return {
        gen: () => {
            return otp = Math.floor(1000 + Math.random() * 9000); // Random 4-digit OTP
        },
        verify: (otpByUser) => {

            if (otp == otpByUser) {
                console.log("✅ OTP is valid");
            } else {
                console.log("❌ Invalid OTP");
            }

        }
    }
}
let otpmgr = otpManager();
console.log(`Your OTP : ${otpmgr.gen()}`);

otpmgr.verify(otpmgr.gen())