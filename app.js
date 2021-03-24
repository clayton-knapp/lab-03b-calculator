// ADDITION

const addend1 = document.getElementById('addend1');
const addend2 = document.getElementById('addend2');
const sumDisplay = document.getElementById('sum-display');
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', () =>{
    //console.log(addend1.value, addend2.value);
    const sum = Number(addend1.value) + Number(addend2.value);
    //console.log(sum);
    sumDisplay.textContent = sum;
});


//SUBTRACTION

const minuend = document.getElementById('minuend');
const subtrahend = document.getElementById('subtrahend');
const differenceDisplay = document.getElementById('difference-display');
const subtractButton = document.getElementById('subtract-button');

subtractButton.addEventListener('click', () =>{
    //console.log(minuend.value, subtrahend.value);
    const difference = Number(minuend.value) - Number(subtrahend.value);
    //console.log(difference);
    differenceDisplay.textContent = difference;
});


// MULTIPLICATION

const multiplicand = document.getElementById('multiplicand');
const multiplier = document.getElementById('multiplier');
const multiplyButton = document.getElementById('multiply-button');
const productDisplay = document.getElementById('product-display');

multiplyButton.addEventListener('click', () =>{
    //console.log(multiplicand.value, multiplier.value);
    const product = Number(multiplicand.value) * Number(multiplier.value);
    //console.log(product);
   productDisplay.textContent = product;
});


// DIVISION

const dividend = document.getElementById('dividend');
const divisor = document.getElementById('divisor');
const divideButton = document.getElementById('divide-button');
const quotientDisplay = document.getElementById('quotient-display');

divideButton.addEventListener('click', () =>{
    //console.log(dividend.value, divisor.value);
    const quotient = Number(dividend.value) / Number(divisor.value);
    //console.log(quotient);
    quotientDisplay.textContent = quotient;
});