let str = "[{()}]"; // Output: true
function isValidParenthesis(string) {
    let stack = [];
    for (let i = 0; i < string.length; i++) {
        let ch = string[i];
        if (ch == "{" || ch == "[" || ch == "(") {
            stack.push(ch);
        } else {
            if (stack.length === 0) return false;

            let top = stack.pop();
            if ((ch == ')' && top !== '(') ||
                (ch == ']' && top !== '[') ||
                (ch == '}' && top !== '{')) {
                return false;
            }
        }
    }
    return stack.length == 0
}

function blanceParenthesis(s) {
    let stack = [];
    let map = {
        ')': '(',
        ']': '[',
        '}': '{',
    }


    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (ch == '(' || ch == '[' || ch == '{') {
            stack.push(ch);
        } else {
            if (stack.pop() !== map[ch]) {
                return false;
            }
        }
    }
    return stack.length == 0;
}

// console.log(blanceParenthesis('[{(})]'));

function calculateSpan(prices) {
    // Step 1: Bana lo ek empty stack aur ek span array (same size)
    const stack = [];
    const span = new Array(prices.length);

    // Step 2: Traverse every price one by one
    for (let i = 0; i < prices.length; i++) {
        // Step 3: Jab tak stack non-empty hai
        // aur stack ke top wale index ka price current price se chhota ya barabar hai
        // tab tak stack se nikaal do (pop)
        while (stack.length > 0 && prices[stack[stack.length - 1]] <= prices[i]) {
            stack.pop();
        }

        // Step 4: Agar stack empty ho gaya, iska matlab koi bhi bada price nahi mila pehle
        // Toh span hoga i + 1
        // Warna span hoga i - stack ke top index
        if (stack.length === 0) {
            span[i] = i + 1;
        } else {
            span[i] = i - stack[stack.length - 1];
        }

        // Step 5: Har baar current index ko stack me daal do
        stack.push(i);
    }

    return span;
}


const prices = [100, 80, 60, 70, 60, 75, 85];
console.log(calculateSpan(prices));
