
function isValidParenthesis(string) {

    const stack = [];

    for (let i = 0; i < string.length; i++) {
        const ch = string[i];
        if (ch === "(" || ch === "[" || ch === "{") {
            stack.push(ch);
        } else {
            if (stack.length === 0) {
                return false
            } else {
                let top = stack.pop();
                if (
                    (ch === ")" && top !== "(") ||
                    (ch === "]" && top !== "[") ||
                    (ch === "}" && top !== "{")
                ) {
                    return false;
                }
            }
        }
    }
    return stack.length === 0;
}


function removeDuplicates(string) {
    let stack = [];


    for (let i = 0; i < string.length; i++) {

        let curChar = string[i];

        if (stack.length > 0 && stack[stack.length - 1] === curChar) {
            stack.pop()
        } else {
            stack.push(curChar);
        }
    }

    return stack.join('');

}

console.log(removeDuplicates("abbaca"));


// What is palindrome
// Palindrone is a string which can read from both sides, it can either a number or string
// number= 121, 12321
// string= madam dad


function isPalindromeFor(string) {
    let n = string.length;
    for (let i = 0; i < n; i++) {
        if (string[i] !== string[n - i - 1]) {
            return false;
        }
    }
    return true;
}

// console.log(isPalindromeFor("123321"));

function isPalindromeWhile(string) {
    let n = string.length;
    let left = 0;
    let right = n - 1;

    while (left < right) {
        if (string[left] !== string[right]) {
            return false;
        }

        left++;
        right--;
    }
    return true;
}

console.log(isPalindromeWhile("dad"));

function isPalindromeRecursive(string, left = 0, right = string.length - 1) {
     if (left >= right) return true;
    if (string[left] !== string[right]) {
        return false;
    }
    return isPalindromeRecursive(string, left + 1, right - 1);
}

console.log(isPalindromeRecursive("12321"));
