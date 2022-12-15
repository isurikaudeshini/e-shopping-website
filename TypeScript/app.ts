const num1Element = document.getElementById('num1') as HTMLInputElement; //Typecast to HTMLInputElement 
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;

const numResults: number[] = [];
const textResults: string[] = [];

type NumOrString = number | string;    // Alias: setup a new type alias(Union type)
type result = {val: number, timestamp: Date}  // Alias

interface ResultObj {  // Interface
   val: number
   timestamp: Date
}

function add(num1: NumOrString, num2: NumOrString) {
   if (typeof num1 === 'number' && typeof num2 === 'number') {
      return num1 + num2;
   } else if (typeof num1 === 'string' && typeof num2 === 'string') { 
  return num1 + ' ' + num2;
} else return +num1 + +num2;
}

function printResult(resultObj: ResultObj) {
   console.log(resultObj);
}

buttonElement.addEventListener('click',() => {
   const num1 = num1Element.value;
   const num2 = num2Element.value;
   const result = add(+num1, +num2); //value is a string , converting to a number
   console.log(result);
   numResults.push(result as number);
   const stringresult = add(num1, num2);
   console.log(stringresult);
   textResults.push(stringresult as string);
   printResult({val: result as number, timestamp: new Date()});
   console.log(numResults, textResults);
})