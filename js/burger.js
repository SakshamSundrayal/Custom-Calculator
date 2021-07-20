let nav = document.querySelector('.nav');
let down = document.getElementById('downBtn');
let up = document.getElementById('upBtn');


down.addEventListener('click', ()=>{
    nav.style.display = 'flex';
    down.style.display = 'none';
    up.style.display = 'block';
});


up.addEventListener('click', ()=>{
    nav.style.display = 'none';
    down.style.display = 'block';
    up.style.display = 'none';
});
