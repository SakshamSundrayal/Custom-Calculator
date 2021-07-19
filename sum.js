let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let ansArea = document.getElementById('ans');
let sumBtn = document.getElementById('add');

sumBtn.addEventListener('click', function(){
    let a = parseInt(num1.value);
    let b = parseInt(num2.value);
    let sum = a + b;
    ansArea.innerHTML = sum;
    // ansArea.innerText = sum;
});
