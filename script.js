let total_price, sub_total, price1, price2;
let increment1, increment, decrement1, decrement, crnt_price1, crnt_price2,
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

crnt_price1 = document.getElementById('crnt-price1').innerHTML;
// console.log(crnt_price1);
let v = parseInt(crnt_price1);
crnt_price2 = document.getElementById('crnt-price2').innerHTML;
// console.log(crnt_price2);
let p = parseInt(crnt_price2);
// console.log(p);
subTotal = document.getElementById('subTotal').innerHTML;
subTotal1 = parseInt(subTotal);
subTotal2 = parseInt(subTotal);
console.log(subTotal1)
console.log(subTotal2)


// Positive Calculation
function positiveCalc1() {
    num = document.querySelector('.input1').value;
    // const caseInput = document.querySelector('.input1');
    // const caseCount = parseInt(caseInput.value);
    // const caseNewCount = caseCount + 1;
    // caseInput.value = caseNewCount;
    // let num2 = document.querySelector('.input2').value;
    // console.log(num1);
    increment = 1 + parseInt(num);
    converter = increment.toString();
    document.querySelector('.input1').value = converter;
    crnt_price1 = v * increment;
    subTotal1 = subTotal1 + crnt_price1;
    // console.log(crnt_price1)
    document.getElementById('crnt-price1').innerHTML = crnt_price1;
    
    // firstCalculate(subTotal1);
    document.getElementById('subTotal').innerHTML = subTotal1;
}

function positiveCalc2() {
    num1 = document.querySelector('.input2').value;
    // console.log(num1);
    increment1 = 1 + parseInt(num1);
    converter1 = increment1.toString();
    document.querySelector('.input2').value = converter1;
    crnt_price2 = p * increment1;
    subTotal2 = subTotal2 + crnt_price2;
    document.getElementById('crnt-price2').innerHTML = crnt_price2;

    // secondCalculate(subTotal2);
    // document.getElementById('subTotal').innerHTML = subTotal2;
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
        subTotal1 = subTotal1 - crnt_price1;
    // console.log(crnt_price1)
        document.getElementById('crnt-price1').innerHTML = crnt_price1;
    }
    // firstCalculate(subTotal1);
    document.getElementById('subTotal').innerHTML = subTotal1;
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
        subTotal2 = subTotal2 - crnt_price2;
        document.getElementById('crnt-price2').innerHTML = crnt_price2;
    }

    // secondCalculate(subTotal2);
    document.getElementById('subTotal').innerHTML = subTotal2;
}

// function subTotal(price1, price2){
    
// }
// function firstCalculate(){
//     const n1 = document.querySelector('.input1');
//     const count1 = parseInt(n1.value);

//     const n2 = document.querySelector('.input2');
//     const count2 = parseInt(n2.value);

//     subTotal1 = count1 * 1219 + count2 * 1219;

//     // calculateTotal(subTotal1);
// }

// function secondCalculate(){
//     const n1 = document.querySelector('.input1');
//     const count1 = parseInt(n1.value);

//     const n2 = document.querySelector('.input2');
//     const count2 = parseInt(n2.value);

//     subTotal2 = count1 * 59 + count2 * 59;

//     // calculateTotal(subTotal2);
// }



// sub_total = parseInt(crnt_price1) + parseInt(crnt_price2);
// console.log(sub_total)
// let subTotal = document.getElementById('subTotal').innerHTML;
subTotal = subTotal1 + subTotal2;
document.getElementById('subTotal').innerHTML = subTotal;

// console.log(increment);
