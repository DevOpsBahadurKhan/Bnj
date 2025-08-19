let arr = [1, 2, 3, 4, 5];
// 

function minMaxSum(arr) {
    let n = arr.length;
    let tototalSum = 0;
    for (let i = 0; i < n; i++) {
        tototalSum += arr[i];
    }

    return `minSum: ${tototalSum - arr[n-1]} MaxSum: ${tototalSum - arr[0]}`

}

console.log(minMaxSum(arr));
