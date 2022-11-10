const resetValue = '0000000';
let memoryValue = "";
// let calculator;
let a = ''; // previous operand
let b = ''; // current operand
let operatorText;
let result;


const display = document.querySelector('#displayValue');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('#equals');
const allClearButton = document.querySelector('#allClear');
const clearEntryButton = document.querySelector('#clearEntry')
// const pointButton = document.querySelector('#point');

const add = (a, b) => a + b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;


display.textContent = resetValue;
let displayValue = display.textContent;


equalButton.addEventListener('click', operate);
allClearButton.addEventListener('click', allClear);
clearEntryButton.addEventListener('click', clearDisplayValues);
// pointButton.addEventListener('click', appendPoint, once);

numberButtons.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.innerText))
    );

operatorButtons.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.innerText))
    );

function allClear() { // reset everything
    memoryValue = "";
    display.textContent = resetValue; 
    a = 0;
    b = 0;
    operatorText = "";
    };
    
function setOperation(operatorText){   
    if(a == ''){
        a = Number(memoryValue)
        memoryValue = '';
        display.textContent = operatorText; // change to bold instead of display?
    }
    else{
        b = Number(memoryValue)
        operate(a,b,operatorText);
    };
    console.log(a,b, operatorText);
}

function appendNumber(number){
    if (display.textContent === resetValue && a === ""){
        clearDisplayValues()};
        memoryValue += number;
        display.textContent = memoryValue;
        console.log(memoryValue);
    // }
    };

function clearDisplayValues(){
    display.textContent = resetValue;
    // operatorText = '';
    memoryValue = '';
    };

function operate(a,b,operatorText){
    if(b === ''){b = Number(memoryValue)};
    if(operatorText === "+"){
        result = add(a,b)
    }
    else if(operatorText === "-") {
        result = subtract(a,b)
    }
    else if(operatorText ==="÷"){
        result = divide (a,b)
    }
    else if(operatorText ==="x"){
        result = multiply (a,b)
    }
    // return result;
    console.log(result);
}



// let compute = (a, operatorText, b) => { // invoke function between operands and return result
//    result = a + operatorText + b;

// }


//     operatorButtons.forEach((operator) => {
//         operator.addEventListener('click', () => {
//             return operatorText = (operator.innerHTML);
//             // console.log(operatorText);
//         });
//     });

// const onEquals = 
    
//     const operate = (operatorText,a,b) => {`${a}${operatorText}${b}`};



//const operate = (operatorText,a,b) => {`${a}${operatorText}${b}`};

// const operators = document.querySelectorAll('.operator');
//     operators.forEach((operator) => {
//         operator.addEventListener('click', () => {
//             operatorText = (operator.innerHTML);
//             console.log(operatorText);

//         });
//         //return operatorText;
//         console.log(operate(operatorText,3,2));
//     });






    // const operate = (operatorText,a,b) => {`${a}${operatorText}${b}`};
    // (operatorText,3,2) => {`${a}${operatorText}${b}`};

    // const operate = (operatorText,a,b) =>{
    //     return result = `${a}${operatorText}${b}`
    // }




// /*

// const sum = (array) => {
//     return array.reduce((a,b) => a + b, 0);
//   };
  
//   const multiply = (array) => {
//     return array.reduce((a,b) => a*b);
//     };
  
//   const power = (a,b) => Math.pow(a,b);
  
//   const factorial = (n) => n ===0 ? 1 : n*factorial(n-1);

// */