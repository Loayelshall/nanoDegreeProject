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
let lastScrollTop = 0
let lastSize = 0

document.addEventListener('scroll',function(){
    if(window.pageYOffset >= 10){
        navBar.classList.add("sticky")
    } else {
        navBar.classList.remove("sticky")
    }


   
    for (section of sections){
        const sectionOffset = section.getBoundingClientRect()
        if(400 > sectionOffset.top && sectionOffset.top > -200){
            //detecing scroll direction
            let st = window.pageYOffset
            if(st>lastScrollTop){
                //down
                lastSize = (-sectionOffset.top/1000)*2+1.75 > 1.65 ? 1.65:((-sectionOffset.top/1000)*2+1.75 < 1.2 ? 1.2:(-sectionOffset.top/1000)*2+1.75) 
                section.style.fontSize = `${lastSize}rem`
                
            } else {
                //up
                size = lastSize - (sectionOffset.top/1000) > 1.65 ? 1.65: (lastSize - (sectionOffset.top/1000) < 1.2 ? 1.2 : lastSize - (sectionOffset.top/1000))
                section.style.fontSize = `${size}rem`
            }
            lastScrollTop = st<=0 ? 0:st
 
            const link = document.getElementById(`${section.id}Link`)
            link.classList.add("active")  
           
            
            
        } else {
            const link = document.getElementById(`${section.id}Link`)
            // section.style.fontSize = `${(sectionOffset.top/100)+1}rem`
            link.classList.remove("active")
            console.log(`There ${sectionOffset.top}    ${section.id}`)
            
            
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


