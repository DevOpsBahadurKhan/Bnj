const nums = [1, 7, 3, 6, 5, 6];

function sum() {
    let tot = 0;
    for (let i = 0; i < nums.length; i++) {
        tot += nums[i];
    }
    console.log(tot);
}

// sum()

console.log(nums.reduce((cur, acc) => cur + acc));


function findMax() {
    let max = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[max]
        }
    }
    console.log(max);

    return -1;
}

// findMax()

console.log(Math.max(...nums));

function findMin() {
    let min = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
    }
    return min;
}

console.log(findMin());

console.log(Math.min(...nums));

function reverseArray() {
    let result = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        result.push(nums[i])
    }

    return result;
}

console.log(reverseArray());
console.log(nums.reverse());

function findPeak(array) {
    let peaks = [];
    for (let i = 1; i < array.length - 1; i++) {
        if (array[i] > array[i - 1]) {
            peaks += array[i];
        }
    }
    if (peaks) { return peaks } else return -1;
}

console.log(findPeak([1, 3, 2, 4, 1]));

function findAdjDuplicateElement(arr) {
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] === arr[i - 1]) {
            console.log(`This is index of adj Duplicate ele: ${i} and it's element: ${arr[i]}`);
        }
    }
}

findAdjDuplicateElement([1, 2, 2, 3, 4, 4, 5])


function findPivot(arr) {

    let tot = arr.reduce((cur, acc) => cur + acc, 0);
    let leftSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let rightSum = tot - leftSum - arr[i];

        if (leftSum === rightSum) return i;
        leftSum += arr[i];
    }

    return -1;
}

// console.log("this is a pivot: " + findPivot([1, 2, 3, 1, 2, 4, 2, 2]));


function findPivotWithBruteForce(arr) {
    for (let i = 0; i < arr.length; i++) {

        let LeftSum = 0;
        let RightSum = 0;

        for (let j = 0; j < i; j++) {
            LeftSum += arr[j];
        }

        for (let j = i + 1; j < arr.length; j++) {
            RightSum += arr[j];
        }

        if (LeftSum === RightSum) {
            return arr[i];
        }

    }
    return -1;




}

console.log(findPivotWithBruteForce([1, 2, 3, 1, 2, 4, 2, 2]));


function findDuplicate(bucket) {

    if (!bucket.length) {
        return "Invalid bucket"
    }

    for (let i = 0; i < bucket.length; i++) {
        for (let j = i; j < bucket.length; j++) {
            if (bucket[i] === bucket[j + 1]) {
                return true;
            }

        }
    }
    return false
}

// console.log(findDuplicate([9,8,7,1,2,3]));


function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr;
}
//Qudratic time somplexity O(n²);
// console.log(bubbleSort([9, 8, 7, 1, 2, 3]));


function jumpSearch(arr, key) {

    let n = arr.length;
    let step = Math.floor(Math.sqrt(n));
    let prev = 0;

    while (arr[Math.min(step, n) - 1] < key) {
        prev = step;
        step += Math.floor(Math.sqrt(n));
        if (prev >= n) return -1;
    }

    for (let i = prev; i < Math.min(step, n); i++) {
        if (arr[i] === key) {
            return i;
        }
    }

    return -1;
}


function removeDuplicate(arr) {
    let uniqueItems = [];

    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;

        for (let j = 0; j < arr.length; j++) {

            if (arr[i] === uniqueItems[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueItems.push(arr[i]);
        }
    }
    return uniqueItems;
}


console.log(removeDuplicate([1, 1, 2, 2, 3, 3])); // Output: [1,2,3]
// Two nested loop that's why Qudratic time Complexity
//O(n) x O(n) = O(n²)

// How can i solve this in O(n) linear time

function rmDupsInN(arr) {
    
    if (arr.length === 0) { return "Invalid length" }

    let seen = {}; // to track value if already been added or not
    let uniqueItems = []; // to store unique items only
    

    for (let i = 0; i < arr.length; i++) {
        if (!seen[arr[i]]) {
            seen[arr[i]] = true;
            uniqueItems.push(arr[i]);
        }
    }
    return uniqueItems;
}

console.log(rmDupsInN([1, 1, 2, 2, 3, 3])); // Output: [1,2,3]

// this is done within the linear time complexity