const start = document.querySelectorAll('.play')
const stop = document.querySelectorAll('.pause')
const slides = document.querySelectorAll('.slide')
const audio = new Audio('music/Bea Miller - Playground.mp3');
const control = document.getElementById('control')

const html = document.getElementById('html')
const openMenu = document.getElementById('openMenu')
const closeMenu = document.getElementById('closeMenu')
const menu = document.getElementById('menu')

// Вызов мобильного меню
openMenu.addEventListener('click', mobileMenuOpen)
closeMenu.addEventListener('click', mobileMenuClose)


function mobileMenuOpen(){
    mobMenu.style.opacity = 1
    mobMenu.style.zIndex = 2
    html.style.overflow = 'hidden'
    console.log('HI')
}

function mobileMenuClose(){
    mobMenu.style.opacity = 0
    mobMenu.style.zIndex = -1
    html.style.overflow = ''
    console.log('By')
}


// Проигрывание музыки
for (const play of start) {
    play.addEventListener('click', () => {
        addActiveClassesPause()
        start.forEach(play => play.classList.remove('active')) 
        audio.play()
        // control.style.display = 'block'
    })
}

function addActiveClassesPause() {
    stop.forEach(pause => pause.classList.add('active')) 
}

for (const pause of stop) {
    pause.addEventListener('click', () => {
        addActiveClassesPlay()
        stop.forEach(pause => pause.classList.remove('active')) 
        audio.pause()
        control.style.display = 'none'
    })
}

function addActiveClassesPlay() {
    start.forEach(play => play.classList.add('active'))
}

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClassesPlay()
        slide.classList.add('active')
    })
}

function clearActiveClassesPlay() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}

//Не используемый метод

// const audioStart = document.getElementById('play')
// const audioStop = document.getElementById('pause')

// audioStart.addEventListener('click', playerBox)
// audioStop.addEventListener('click', playerBo)

// function playerBox(){
//     if(play.classList.contains('active')){
//         start.forEach(play => play.classList.remove('active')) 
//         stop.forEach(pause => pause.classList.add('active')) 
//         audio.play()
//     }
// }

// function playerBo(){
//     if(pause.classList.contains('active')){
//         stop.forEach(pause => pause.classList.remove('active'))
//         start.forEach(play => play.classList.add('active'))
//         audio.pause()
//     }
// }





// Отправить 

// document.querySelector('contact-form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     e.target.elements.email.value = '';
//   });