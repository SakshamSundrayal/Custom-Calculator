let n1 = document.getElementById('num1');
let n2 = document.getElementById('num2');
let ansArea = document.getElementById('ans');
let subBtn = document.getElementById('subtract');

subBtn.addEventListener('click', function(){
    let a = parseInt(num1.value);
    let b = parseInt(num2.value);
    let sum = a - b;
    ansArea.innerHTML = sum;
})