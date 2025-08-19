
let input = "";

function press(val) {
    input += val;
    let display = document.getElementById("display");
    display.value = input;
}

function clearDisplay() {
    let display = document.getElementById("display");
    display.value = "";
    input = "";
}

function calculate() {
    let display = document.getElementById("display");
    try {
        display.value = eval(input);
        input = display.value; // Allow chaining of results
    } catch (e) {
        display.value = "Error";
        input = "";
    }
}

function removeLastChar() {
    let display = document.getElementById("display");
    try {
        display.value = display.value.slice(0, -1);
        input = display.value;
    } catch (error) {

    }
}