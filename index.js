let currentInput = "";
let operator = "";
let previousInput = "";

function appendNumber(number) {
    const display = document.getElementById("display");
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(operatorToAppend) {
    const display = document.getElementById("display");
    if (currentInput === "") return;
    if (previousInput !== "") {
        calculatresult();
    }; 
    operator = operatorToAppend;
    previousInput = currentInput;
    currentInput = "";
    display.value = previousInput +operator;
}

function calculateResult() {
    const display = document.getElementById("display");
    let result;
    if (currentInput === "" || previousInput === "") {
        display.value = "Error";
        return; 
      }else if (operator === "+") {
        result = parseFloat(previousInput) + parseFloat(currentInput);
 }else if (operator === "-") {
        result = parseFloat(previousInput) - parseFloat(currentInput); 
}else if (operator === "*") {
        result = parseFloat(previousInput) * parseFloat(currentInput);
}else if (operator === "/") {
        result = parseFloat(previousInput) / parseFloat(currentInput);
    } else {
        display.value = "Error";
        return;
    }
    display.value = result;
    currentInput = result;
    previousInput = "";
    operator = "";
}

function clearDisplay() {
    const display = document.getElementById("display");
    currentInput = "";
    operator = "";
    previousInput = "";
    display.value = "";
}


//this was previous code I am leaving here as a reminder of improvement

// document.getElementById("calculator").addEventListener("click", function (event) {
    


// });


// let currentInput = ""; // these are our current numbers
// let operator = operatorToAppend; // this is for our operators
// let previousInput = "";

// function appendNumber (number) {
//     const display = document.getElementById("display");
//     display.value += number;
// }

// function appendOperator (operatorToAppend) {     
//     const display = document.getElementById("display");
//     previousInput = currentInput;
//     currentInput = "";
//     operator = operatorToAppend;
//    // display.value = previousInput + operator + currentInput;
//    display.value = previousInput + operatorToAppend + currentInput;
// }

// function calculateResult (result) {
//    if (currentInput === "" && previousInput === "" && operator === true) {
//      eval(display.value);
//    } return;
// };
