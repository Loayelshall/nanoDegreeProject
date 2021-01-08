/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

let sections = document.getElementsByTagName('section')


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
let navList = document.getElementById('navBar')
for(let section of sections){
    const newLink = document.createElement('li')
    const newUrl = document.createElement('a')
    const secName = section.querySelector('h2')
    newUrl.innerHTML = secName.innerHTML
    newUrl.setAttribute('href',`#${section.id}`)
    newLink.classList = "nav-item"
    newUrl.classList = "nav-link"
    newLink.appendChild(newUrl)
    navList.appendChild(newLink)
    
}
const navBar = document.querySelector('nav')
const stickyDistance = navBar.offsetTop

function navBarResponsive(){
    console.log(window.pageYOffset)
    if(window.pageYOffset >= stickyDistance){
        navBar.classList.add("sticky")
        console.log(window.pageYOffset)
    } else {
        navBar.classList.remove("sticky")
        console.log('there')
    }
} 
window.onscroll = navBarResponsive()
document.addEventListener('scroll',function(){
    if(window.pageYOffset >= stickyDistance){
        navBar.classList.add("sticky")
        
    } else {
        navBar.classList.remove("sticky")
        console.log('there')
    }})

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


