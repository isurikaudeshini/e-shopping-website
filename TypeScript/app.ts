const num1Element = document.getElementById('num1') as HTMLInputElement; //Typecast to HTMLInputElement 
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;

function add(num1: number | string, num2: number | string) {
   if (typeof num1 === 'number' && typeof num2 === 'number') {
      return num1 + num2;
   } else if (typeof num1 === 'string' && typeof num2 === 'string') { 
  return num1 + ' ' + num2;
} else return +num1 + +num2;
}

buttonElement.addEventListener('click',() => {
   const num1 = num1Element.value;
   const num2 = num2Element.value;
   const result = add(num1, num2); //value is a string , converting to a number
   console.log(result);
   const stringresult = add(num1, num2);
   console.log(stringresult);
})