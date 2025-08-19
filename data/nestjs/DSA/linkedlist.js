function isPrime(n) {
    if (n < 2) return;
    for (let i = 2; i * i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}



function allPairs(ar = [1, 2, 3, 4, 5]) {

    let n = ar.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let product = ar[i] * ar[j];
            if (Math.sqrt(product) * Math.sqrt(product) === product) {
                console.log(ar[i], ar[j]);
            }
        }
    }
}


function tossUp(tosses = 10) {
    let head = 0;
    let tail = 0;
    for (let i = 0; i < tosses; i++) {
        let result = Math.random() < 0.5 ? "Head" : "Tail";
        if (result === 'Head') {
            head++;
        }
        else {
            tail++;
        }
    }
    let headProb = (head / tosses * 100).toFixed(2)
    let tailProb = ((tail / tosses) * 100).toFixed(2);

    return { head, tail, probHead: `${headProb} %`, probTail: `${tailProb} %` }
}

// console.log(tossUp());


function checkColorProbbality(red, green) {
    let total = red + green;
    let redProb = ((red / total) * 100).toFixed(2);
    console.log(redProb + " % ");

}






function distributeCandies(candies = 152, emps = 52) {

    let eachWillget = Math.floor(candies / emps);
    let extra = (candies % emps);
    let distribution = [];
    for (let i = 0; i < extra; i++) {

        if (i < extra) {
            distribution.push(eachWillget + 1)
        } else {
            distribution.push(eachWillget)
        }
    }

    console.log(`Each will get at least: ${eachWillget} candies`);
    console.log(`Extra candies distributed to first ${extra} employees`);
    console.log("Final Distribution:", distribution);
    console.log(distribution.length);


}


function isPrime(n) {

    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false
        }
    }
    return true;
}

console.log(isPrime(25));

