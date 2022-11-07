const displayValue = document.querySelector('#displayValue');
        displayValue.textContent = '0000000';

let memoryValue = 0;
let a=0;
let b=0;
let operatorText;

const operate = (operator,a,b) =>{
    return result = `${a}${operator}${b}`
}

const operators = document.querySelectorAll('.operator');
    operators.forEach((operator) => {
        operator.addEventListener('click', () => {
            operatorText = (operator.innerHTML);
            console.log(operatorText);
        })
    });


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