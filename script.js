const plusBtn1 = document.querySelector('#plus-btn1');
const minusBtn1 = document.querySelector('#minus-btn1');
const plusBtn2 = document.querySelector('#plus-btn2');
const minusBtn2 = document.querySelector('#minus-btn2');
const removeItem = document.querySelector('.close');



plusBtn1.addEventListener('click', positiveCalc1);
minusBtn1.addEventListener('click', negativeCalc1);
plusBtn2.addEventListener('click', positiveCalc2);
minusBtn2.addEventListener('click', negativeCalc2);
removeItem.addEventListener('clisk', removeCartItem);



// Positive Calculation
function positiveCalc1() {
    let num = document.querySelector('.input1').value;
    let increment = 1 + parseInt(num);
    document.querySelector('.input1').value = increment;
    let crnt_price1 = 1219 * increment;
    // console.log(crnt_price1);
    document.getElementById('crnt-price1').innerHTML = crnt_price1;
    calculateTotal();
}

function positiveCalc2() {
    let num = document.querySelector('.input2').value;
    let increment = 1 + parseInt(num);
    document.querySelector('.input2').value = increment;
    let crnt_price2 = 59 * increment;
    // console.log(crnt_price2);
    document.getElementById('crnt-price2').innerHTML = crnt_price2;
    calculateTotal();
}


// Negative Calculation
function negativeCalc1() {
    let num = document.querySelector('.input1').value;
    let decrement = parseInt(num) - 1;
    if (decrement < 1) {
        alert("Quantity can't be Zero");
        document.getElementById('crnt-price1').innerHTML = 1219;
    } else {
        document.querySelector('.input1').value = decrement;
        let crnt_price1 = 1219 * decrement;
        // console.log(crnt_price1)
        document.getElementById('crnt-price1').innerHTML = crnt_price1;
        calculateTotal();
    }
}

function negativeCalc2() {
    let num = document.querySelector('.input2').value;
    let decrement = parseInt(num) - 1;
    if (decrement < 1) {
        alert("Quantity can't be Zero");
        document.getElementById('crnt-price2').innerHTML = 59;
    } else {
        document.querySelector('.input2').value = decrement;
        let crnt_price2 = 59 * decrement;
        document.getElementById('crnt-price2').innerHTML = crnt_price2;
        calculateTotal();
    }
}

function removeCartItem(){
    document.getElementById('crnt-price1').innerHTML = 0;
    document.getElementById('crnt-price2').innerHTML = 0;
    const cartStyl = document.querySelector('.cart-item');
    cartStyl.style.display = 'none';
    calculateTotal();
}



function calculateTotal(){
    let price1 = document.getElementById('crnt-price1').innerHTML;
    price1 = parseInt(price1);
    let price2 = document.getElementById('crnt-price2').innerHTML;
    price2 = parseInt(price2);
    let subTotal =  price1 + price2;
    console.log(subTotal);
    document.getElementById('subTotal').innerHTML = subTotal;
    document.getElementById('total').innerHTML = subTotal;
}
