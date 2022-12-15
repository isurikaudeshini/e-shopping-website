"use strict";
const num1Element = document.getElementById('num1'); //Typecast to HTMLInputElement 
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button');
function add(num1, num2) {
    return num1 + num2;
}
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2); //value is a string , converting to a number
    console.log(result);
});
