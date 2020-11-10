//menu deslizante no mobile
const navBar = document.querySelectorAll('.nav-bar')[0]
const menu = document.querySelector('.menu')
const clickMenu = document.querySelector('.title')

var container = document.querySelector('.container')
var iframe = document.querySelector('.iframe')

clickMenu.addEventListener('click', toggleClassMenu, false)

var isOpen = false

function toggleClassMenu(){
    if(isOpen == false){
        container.style.display = 'none'
        iframe.style.display = "block"
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

//variáveis de controle para video

const techniques = [
    "Seoi-nage",//
    "Tai-otoshi",//
    "Kata-guruma",//
    "Sukui-Nage",//
    "Uki-otoshi",//
    "Sumi-otoshi",//
    "Uki-goshi",//
    "O-goshi",//
    "Koshi-guruma",//
    "Tsuri-komi-goshi",//
    "Harai-goshi",//
    "Tsuri-goshi",//
    "Hane-goshi",//
    "Utsuri-goshi",//
    "Ushiro-goshi",//
    "De-ashi-harai",//
    "Hiza-guruma",//
    "Sasae-tsuri-komi-ashi",//
    "O-soto-gari",//
    "O-uchi-gari",//
    "Ko-soto-gari",//
    "Ko-uchi-gari",//
    "Okuri-ashi-harai",//
    "Uchi-mata",//
    "Ko-soto-gake",//
    "Ashi-guruma",//
    "Harai-tsuri-komi-ashi",//
    "O-guruma",//
    "O-soto-guruma",//
    "Yoko-otoshi",
    "Tani-otoshi",
    "Hane-makikomi",
    "Soto-makikomi",
    "Uki-waza",
    "Yoko-wakare",
    "Yoko-guruma",
    "Yoko-gake",
    "Tomoe-nage",//
    "Sumi-gaeshi",//
    "Ura-nage"
];
const techniquesLink = [
    "zIq0xI0ogxk",//
    "4x6S3Q-Ktv8",//
    "cnHRhSy8yi4",//
    "vU6aJ2kFxoI",//
    "6H5tmncOY4Q",//
    "lLU9wv52ni0",//
    "bPKwtB4lyOQ",//
    "yhu1mfy2vJ4",//
    "SU7Id6uVJ44",//
    "McfzA0yRVt4",//
    "hKkDMj8Vgxc",//
    "2meKovMhZb8",//
    "sUvXz4BGD0k",//
    "4pQd_bEnlf0",//
    "ORIYstuxYT8",//
    "4BUUvqxi_Kk",//
    "JPJx9-oAVns",//
    "699i--pvYmE",//
    "c-A_nP7mKAc",//
    "0itJFhV9pDQ",// 
    "jeQ541ScLB4",// 
    "3Jb3tZvr9Ng",// 
    "nw1ZdRjrdRI",//
    "iUpSu5J-bgw",// 
    "8b6kY4s4zH4",// 
    "ROeayhvom9U",// 
    "gGPXvWL8VbE",// 
    "SnZciTAY9vc",// 
    "92KbCm6pQeI",//
    "Uu9XXHHYMRo",
    "wS9pM3y8YH4",
    "wG5kQT7M8is",
    "BcfGFR1CWss",
    "JtB79Ma4htw",
    "fWlPaLwvBV8",
    "BYD0IRZPlxI",
    "YntUIakl428",
    "880WbHvHv6A",// 
    "5VhduA5xkbA",//
    "4hzlipey14I"
];

//mostrar video
var video = document.querySelector('.video')
var youTubeFrame = "https://youtube.com/embed/";
var [...linkVideo] = document.getElementsByTagName('a')
var titleContainer = document.querySelector('.title-container')

linkVideo.forEach(link => {
    link.addEventListener('click', () => {
        container.style.display = 'none'
        iframe.style.display = 'block'
        for (let i = 0; i < techniques.length; i++){
            if(link.textContent == techniques[i]){
                var index = techniques.indexOf(techniques[i])
                
                //fechar o menu
                navBar.classList.remove('menu-open')
                menu.firstElementChild.classList.remove('hamburguer-x')
                isOpen = false
            }
        }
        video.src = `${youTubeFrame}${techniquesLink[index]}`
    })
})