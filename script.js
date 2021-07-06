let total_price = 0, price1, price2;
let increment1, increment, decrement1, decrement,crnt_price1;

const plusBtn1 = document.querySelector('#plus-btn1');
const minusBtn1 = document.querySelector('#minus-btn1');
const plusBtn2 = document.querySelector('#plus-btn2');
const minusBtn2 = document.querySelector('#minus-btn2');



plusBtn1.addEventListener('click', positiveCalc1);
minusBtn1.addEventListener('click', negativeCalc1);
plusBtn2.addEventListener('click', positiveCalc2);
minusBtn2.addEventListener('click', negativeCalc2);

// plusBtn.addEventListener('click', positiveCalc);


// Positive Calculation
function positiveCalc1() {
    let num = document.querySelector('.input1').value;
    // let num2 = document.querySelector('.input2').value;
    // console.log(num1);
    increment = 1 + parseInt(num);
    let convereter = increment.toString();
    document.querySelector('.input1').value = convereter;
}

function positiveCalc2() {
    let num1 = document.querySelector('.input2').value;
    // console.log(num1);
    increment1 = 1 + parseInt(num1);
    let convereter1 = increment1.toString();
    document.querySelector('.input2').value = convereter1;
}


// Negative Calculation
function negativeCalc1() {
    let num = document.querySelector('.input1').value;
    // console.log(num);
    decrement = parseInt(num) - 1;
    let convereter = decrement.toString();
    document.querySelector('.input1').value = convereter;   
}

function negativeCalc2() {
    let num1 = document.querySelector('.input2').value;
    // console.log(num);
    decrement1 = parseInt(num1) - 1;
    let convereter1 = decrement1.toString();
    document.querySelector('.input2').value = convereter1;
}

function firstCartCalc(inc){
    
    price1 = parseInt(crnt_price1) * inc;
    // console.log(price1);
    // totalCalc(price1);
}

// console.log(increment);
