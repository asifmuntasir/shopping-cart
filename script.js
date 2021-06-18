let total_price = 0, price1, price2;
let increment, decrement, crnt_price1;

const plusBtn = document.querySelector('#plus-btn');
const minusBtn = document.querySelector('#minus-btn');


// plusBtn.addEventListener('click', function(){
//     positiveCalc();
// });

plusBtn.addEventListener('click', positiveCalc);
minusBtn.addEventListener('click', negativeCalc);

// plusBtn.addEventListener('click', positiveCalc);


// Positive Calculation
function positiveCalc() {
    let num = document.querySelector('.input1').value;
    // console.log(num);
    increment = 1 + parseInt(num);
    let convereter = increment.toString();
    document.querySelector('.input1').value = convereter;
    // console.log(increment);
    crnt_price1 = document.querySelector('#crnt-price1').innerHTML;
    price1 = parseInt(crnt_price1);
    if(price1){
        firstCartCalc(increment, price1);
    }else{
        secondCartCalc(increment, price1);
    }
}


// Negative Calculation
function negativeCalc() {
    let num = document.querySelector('.input1').value;
    // console.log(num);
    decrement = parseInt(num) - 1;
    let convereter = decrement.toString();
    document.querySelector('.input1').value = convereter;
    // console.log(increment);
    crnt_price1 = document.querySelector('#crnt-price1').innerHTML;
    price1 = parseInt(crnt_price1);
    if(price1){
        firstCartCalc(decrement, price1);
    }else{
        secondCartCalc(decrement, price1);
    }
}

function firstCartCalc(inc){
    
    price1 = parseInt(crnt_price1) * inc;
    // console.log(price1);
    // totalCalc(price1);
}

// console.log(increment);
