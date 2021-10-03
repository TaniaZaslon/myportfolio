var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultiply = document.getElementById("buttonMultiply");
var buttonDevide = document.getElementById("buttonDevide");

function onButtonPlusClik() {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    var summ = number1 + number2;
    window.alert(summ);

}
function onButtonMinusClik() {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    var summ = number1 - number2;
    window.alert(summ);
}
function onButtonMultiplyClik() {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    var summ = number1 * number2;
    window.alert(summ);
}
function onButtonDevideClik() {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    var summ = number1 / number2;
    window.alert(summ);
}

buttonPlus.addEventListener('click', onButtonPlusClik);
buttonMinus.addEventListener('click', onButtonMinusClik);
buttonMultiply.addEventListener('click', onButtonMultiplyClik);
buttonDevide.addEventListener('click', onButtonDevideClik);