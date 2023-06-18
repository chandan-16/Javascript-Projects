let colors = ['violet','indigo','blue','green','yellow','orange','red'];

const btn = document.querySelector('button');

btn.addEventListener('click', ()=> {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = randomColor;
});























