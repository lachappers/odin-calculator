const displayValue = document.querySelector('#displayValue');
const numberButtons = document.querySelectorAll('.number');
const equalButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');
const operatorButtons = document.querySelectorAll('.operator');

let memoryValue;
let a=3;
let b=4;
let operatorText;
displayValue.textContent = resetValue = '0000000';



const clear = () => { displayValue = resetValue; memoryValue = ""; }


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

// const add = (a, b) => a + b;

// const subtract = (a,b) => a-b;

// const multiply = (a,b) => a*b;

// const divide = (a,b) => a/b;


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