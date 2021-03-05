let box = document.querySelector('.box')
let secondImg = document.querySelector('.second')

box.addEventListener('mousemove', (e) => {
    secondImg.style.width = e.offsetX + 'px'
})