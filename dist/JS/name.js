const menuBtn = document.querySelector(".menu-btn")
const hamburger = document.querySelector(".menu-btn__burger")
const navbar = document.querySelector(".nav")
const navMenu = document.querySelector(".menu-nav")
const navItems = document.querySelectorAll(".menu-nav__item")

let showMenu = false;

menuBtn.addEventListener("click" , () => {
    if(!showMenu){
        hamburger.classList.add("open")
        navbar.classList.add("open")
        navMenu.classList.add("open")
        navItems.forEach((navItem)=>{
            navItem.classList.add("open")
        })
        showMenu = true;

    }else{
        hamburger.classList.remove("open")
        navbar.classList.remove("open")
        navMenu.classList.remove("open")
        navItems.forEach((navItem)=>{
            navItem.classList.remove("open")
        })
        showMenu = false
    }
})