var num1Element = document.getElementById('num1'); //Typecast to HTMLInputElement
var num2Element = document.getElementById('num2');
var buttonElement = document.querySelector('button');
var numResults = [];
var textResults = [];
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
function printResult(resultObj) {
    console.log(resultObj);
}
buttonElement.addEventListener('click', function () {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    var result = add(+num1, +num2); //value is a string , converting to a number
    console.log(result);
    numResults.push(result);
    var stringresult = add(num1, num2);
    console.log(stringresult);
    textResults.push(stringresult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResults, textResults);
});
var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('It worked');
    }, 1000);
});
myPromise.then(function (result) {
    console.log(result.split('w'));
});
