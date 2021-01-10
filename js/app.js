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

// Add class 'active' to section when near top of viewport

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
    newUrl.setAttribute('id',`${section.id}Link`)
    newLink.appendChild(newUrl)
    navList.appendChild(newLink)
    
}
const navBar = document.querySelector('nav')

document.addEventListener('scroll',function(){
    if(window.pageYOffset >= 60){
        navBar.classList.add("sticky")
    } else {
        navBar.classList.remove("sticky")
    }

    
    for (section of sections){
        const sectionOffset = section.getBoundingClientRect()
        if(100 > sectionOffset.top && sectionOffset.top > -50){
            const link = document.getElementById(`${section.id}Link`)
            link.classList.add("active")  
            section.classList.add("activeSection")
            section.style.setProperty("--scroll",window.pageYOffset/(document.body.offsetHeight-window.innerHeight))
        } else {
            const link = document.getElementById(`${section.id}Link`)
            link.classList.remove("active")
            // section.classList.remove("activeSection")
            section.style.setProperty("--scroll",0)
        }
        
    }
    
    

})






// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


