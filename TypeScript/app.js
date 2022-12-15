var num1Element = document.getElementById('num1'); //Typecast to HTMLInputElement 
var num2Element = document.getElementById('num2');
var buttonElement = document.querySelector('button');
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    else
        return +num1 + +num2;
}
buttonElement.addEventListener('click', function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    var result = add(+num1, +num2); //value is a string , converting to a number
    console.log(result);
    var stringresult = add(num1, num2);
    console.log(stringresult);
});
