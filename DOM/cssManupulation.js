const box = document.getElementById('box');
const btn = document.getElementById('toggleBtn');

btn.addEventListener('click',() => {
    if(box.style.backgroundColor === 'lightblue')
        box.style.backgroundColor = 'lightgreen';
    else
        box.style.backgroundColor = 'lightblue';
});