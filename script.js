let total_price, sub_total, price1, price2;
let increment1, increment, decrement1, decrement, crnt_price1, crnt_price2,
    num, num1, converter, converter1;

const plusBtn1 = document.querySelector('#plus-btn1');
const minusBtn1 = document.querySelector('#minus-btn1');
const plusBtn2 = document.querySelector('#plus-btn2');
const minusBtn2 = document.querySelector('#minus-btn2');



plusBtn1.addEventListener('click', positiveCalc1);
minusBtn1.addEventListener('click', negativeCalc1);
plusBtn2.addEventListener('click', positiveCalc2);
minusBtn2.addEventListener('click', negativeCalc2);

// plusBtn.addEventListener('click', positiveCalc);

crnt_price1 = document.getElementById('crnt-price1').innerHTML;
// console.log(crnt_price1);
let v = parseInt(crnt_price1);
crnt_price2 = document.getElementById('crnt-price2').innerHTML;
// console.log(crnt_price2);
let p = parseInt(crnt_price2);
// console.log(p);


// Positive Calculation
function positiveCalc1() {
    num = document.querySelector('.input1').value;
    // let num2 = document.querySelector('.input2').value;
    // console.log(num1);
    increment = 1 + parseInt(num);
    converter = increment.toString();
    document.querySelector('.input1').value = converter;
    crnt_price1 = v * increment;
    // console.log(crnt_price1)
    document.getElementById('crnt-price1').innerHTML = crnt_price1;
}

function positiveCalc2() {
    num1 = document.querySelector('.input2').value;
    // console.log(num1);
    increment1 = 1 + parseInt(num1);
    converter1 = increment1.toString();
    document.querySelector('.input2').value = converter1;
    crnt_price2 = p * increment1;
    document.getElementById('crnt-price2').innerHTML = crnt_price2;
}


// Negative Calculation
function negativeCalc1() {
    num = document.querySelector('.input1').value;
    // console.log(num);
    decrement = parseInt(num) - 1;
    if (decrement < 1) {
        alert("Quantity can't be Zero");
        document.getElementById('crnt-price1').innerHTML = v;
    } else {
        converter = decrement.toString();
        document.querySelector('.input1').value = converter;
        // let updataValue = crnt_price1 - v;
        crnt_price1 = v * decrement;
        // console.log(crnt_price1)
        document.getElementById('crnt-price1').innerHTML = crnt_price1;
    }
}

function negativeCalc2() {
    num1 = document.querySelector('.input2').value;
    // console.log(num);
    decrement1 = parseInt(num1) - 1;
    if (decrement1 < 1) {
        alert("Quantity can't be Zero");
        document.getElementById('crnt-price2').innerHTML = p;
    } else {
        converter1 = decrement1.toString();
        document.querySelector('.input2').value = converter1;
        crnt_price2 = p * decrement1;
        document.getElementById('crnt-price2').innerHTML = crnt_price2;
    }
}

// function subTotal(price1, price2){
    
// }

sub_total = price1 + price2;
let subTotal = document.getElementById('subTotal').innerHTML;
subTotal = parseInt(subTotal) + sub_total;
document.getElementById('subTotal').innerHTML = subTotal;

// console.log(increment);
