// Save this as worker.js

self.onmessage = function (e) {
    const n = Number(e.data);
    const primes = [];

    for (let i = 2; i <= n; i++) {
        let prime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            primes.push(i);
        }
    }

    self.postMessage(`Primes up to ${n}: ${primes.join(", ")}`);
};
