const box = document.getElementById('box');
const box2 = document.getElementById('box2');
const btn = document.getElementById('toggleBtn');
const themeBtn = document.getElementById('themeBtn');
const addBtn = document.getElementById('uline');
const removeBtn = document.getElementById('rmUline');

btn.addEventListener('click',() => {
    if(box.style.backgroundColor === 'lightblue')
        box.style.backgroundColor = 'lightgreen';
    else
        box.style.backgroundColor = 'lightblue';
});

themeBtn.addEventListener('click', ()=>{
    box2.classList.toggle('dark-mode');
});

addBtn.addEventListener('click',()=>{
    box2.classList.add('decorate');
})
removeBtn.addEventListener('click',()=>{
    box2.classList.remove('decorate');
})