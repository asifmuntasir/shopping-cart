let increment1, increment, decrement1, decrement, 
    num, num1, converter, converter1, subTotal;
let subTotal1, subTotal2;

const plusBtn1 = document.querySelector('#plus-btn1');
const minusBtn1 = document.querySelector('#minus-btn1');
const plusBtn2 = document.querySelector('#plus-btn2');
const minusBtn2 = document.querySelector('#minus-btn2');



plusBtn1.addEventListener('click', positiveCalc1);
minusBtn1.addEventListener('click', negativeCalc1);
plusBtn2.addEventListener('click', positiveCalc2);
minusBtn2.addEventListener('click', negativeCalc2);

// plusBtn.addEventListener('click', positiveCalc);

// crnt_price1 = document.getElementById('crnt-price1').innerHTML;
// console.log(crnt_price1);
// let v = parseInt(crnt_price1);
// crnt_price2 = document.getElementById('crnt-price2').innerHTML;
// console.log(crnt_price2);
// let p = parseInt(crnt_price2);


// subTotal = document.getElementById('subTotal').innerHTML;
// console.log(subTotal)
// subTotal1 = parseInt(subTotal);
// subTotal2 = parseInt(subTotal);
// console.log(subTotal1)
// console.log(subTotal2)


// Positive Calculation
function positiveCalc1() {
    num = document.querySelector('.input1').value;
    increment = 1 + parseInt(num);
    document.querySelector('.input1').value = increment;
    let crnt_price1 = 1219 * increment;
    // subTotal1 = subTotal1 + crnt_price1;
    console.log(crnt_price1)
    document.getElementById('crnt-price1').innerHTML = crnt_price1;
    
    calculateTotal();
    // document.getElementById('subTotal').innerHTML = subTotal1;
}

function positiveCalc2() {
    num1 = document.querySelector('.input2').value;
    // console.log(num1);
    increment1 = 1 + parseInt(num1);
    document.querySelector('.input2').value = increment1;
    let crnt_price2 = 59 * increment1;
    // subTotal2 = subTotal2 + crnt_price2;
    document.getElementById('crnt-price2').innerHTML = crnt_price2;

    calculateTotal();
    // document.getElementById('subTotal').innerHTML = subTotal2;
}


// Negative Calculation
function negativeCalc1() {
    num = document.querySelector('.input1').value;
    // console.log(num);
    decrement = parseInt(num) - 1;
    if (decrement < 1) {
        alert("Quantity can't be Zero");
        document.getElementById('crnt-price1').innerHTML = 1219;
    } else {
        document.querySelector('.input1').value = converter;
        let crnt_price1 = 1219 * decrement;
        // subTotal1 = subTotal1 - crnt_price1;
        // console.log(crnt_price1)
        document.getElementById('crnt-price1').innerHTML = crnt_price1;
        calculateTotal();
    }
    // document.getElementById('subTotal').innerHTML = subTotal1;
}

function negativeCalc2() {
    num1 = document.querySelector('.input2').value;
    // console.log(num);
    decrement1 = parseInt(num1) - 1;
    if (decrement1 < 1) {
        alert("Quantity can't be Zero");
        document.getElementById('crnt-price2').innerHTML = 59;
    } else {
        converter1 = decrement1.toString();
        document.querySelector('.input2').value = converter1;
        let crnt_price2 = 59 * decrement1;
        // subTotal2 = subTotal2 - crnt_price2;
        document.getElementById('crnt-price2').innerHTML = crnt_price2;
        calculateTotal();
    }
    // document.getElementById('subTotal').innerHTML = subTotal2;
}



function calculateTotal(){
    let price1 = document.getElementById('crnt-price1').innerHTML;
    price1 = parseInt(price1);
    let price2 = document.getElementById('crnt-price2').innerHTML;
    price2 = parseInt(price1);
    subTotal = document.getElementById('subTotal').innerHTML;
    subTotal = parseInt(subTotal) + price1 + price2;
    console.log(subTotal);
    document.getElementById('subTotal').innerHTML = subTotal;
}
