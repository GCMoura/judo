//menu deslizante no mobile
const navBar = document.querySelectorAll('.nav-bar')[0]
const menu = document.querySelector('.menu')
const clickMenu = document.querySelector('.title')

clickMenu.addEventListener('click', toggleClassMenu, false)

var isOpen = false

function toggleClassMenu(){
    if(isOpen == false){
        navBar.classList.add("menu-open")
        menu.firstElementChild.classList.add('hamburguer-x')
        isOpen = true
    }
    else {
        navBar.classList.remove('menu-open')
        menu.firstElementChild.classList.remove('hamburguer-x')
        isOpen = false
    }
}

//dropDown menu
const te = document.querySelector('#te-btn')
const koshi = document.querySelector('#koshi-btn')
const ashi = document.querySelector('#ashi-btn')
const yoko = document.querySelector('#yoko-btn')
const mae = document.querySelector('#mae-btn')

const dropDownTe = document.querySelector('#drop-te')
const dropDownKoshi = document.querySelector('#drop-koshi')
const dropDownAshi = document.querySelector('#drop-ashi')
const dropDownYoko = document.querySelector('#drop-yoko')
const dropDownMae = document.querySelector('#drop-mae')

var openMiniMenu = false

te.addEventListener('click', function () {toggleTecMenu(te)}, false)
koshi.addEventListener('click', function () {toggleTecMenu(koshi)}, false)
ashi.addEventListener('click', function () {toggleTecMenu(ashi)}, false)
yoko.addEventListener('click', function () {toggleTecMenu(yoko)}, false)
mae.addEventListener('click', function () {toggleTecMenu(mae)}, false)

function toggleTecMenu(button){
    if(button.contains(te)){
        if(openMiniMenu == false) {
            dropDownTe.classList.add('show')
            openMiniMenu = true
        } else {
            dropDownTe.classList.remove('show')
            openMiniMenu = false
        }  
    }
    if(button.contains(koshi)){
        if(openMiniMenu == false) {
            dropDownKoshi.classList.add('show')
            openMiniMenu = true
        } else {
            dropDownKoshi.classList.remove('show')
            openMiniMenu = false
        }  
    }
    if(button.contains(ashi)){
        if(openMiniMenu == false) {
            dropDownAshi.classList.add('show')
            openMiniMenu = true
        } else {
            dropDownAshi.classList.remove('show')
            openMiniMenu = false
        }  
    }
    if(button.contains(yoko)){
        if(openMiniMenu == false) {
            dropDownYoko.classList.add('show')
            openMiniMenu = true
        } else {
            dropDownYoko.classList.remove('show')
            openMiniMenu = false
        }  
    }
    if(button.contains(mae)){
        if(openMiniMenu == false) {
            dropDownMae.classList.add('show')
            openMiniMenu = true
        } else {
            dropDownMae.classList.remove('show')
            openMiniMenu = false
        }  
    }
}

//mostra video
var youTubeFrame = "https://youtube.com/embed/";




