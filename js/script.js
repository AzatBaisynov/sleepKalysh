let box = document.querySelector('.box')

let secondImg = document.querySelector('.box-overlay')

box.addEventListener('mousemove', (e) => {
    secondImg.style.width = e.offsetX + 'px'
})