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
// Fetching all sections for future use
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


// build the navbar elements by dynamically adding the links according to the sections in the homepage
function buildNav(){
    let navList = document.getElementById('navBar')
    for(let section of sections){
        const newLink = document.createElement('li')
        const newUrl = document.createElement('a')
        const secName = section.querySelector('h2')
        newUrl.innerHTML = secName.innerHTML
        newLink.classList = "nav-item"
        newUrl.classList = "nav-link"
        newUrl.classList.add('navbar_link')
        newUrl.setAttribute('onclick',`goToSection('${section.id}')`)
        newUrl.setAttribute('id',`${section.id}Link`)
        newLink.appendChild(newUrl)
        navList.appendChild(newLink)
        
    }
}


const navBar = document.querySelector('nav')
let lastScrollTop = 0
let lastSize = 0



// Using the scroll event listener to detect the current position of the window and change the class of the section currently in view as well as its link in the navbar
// to active state to state which section is currently active
document.addEventListener('scroll',function(){
    // adding and removing the sticky class to the navbar according to the position of the screen 
    if(window.pageYOffset >= 10){
        navBar.classList.add("sticky")
    } else {
        navBar.classList.remove("sticky")
    }


   // Looping over the sections of the page and checking for active section
    for (section of sections){
        const sectionOffset = section.getBoundingClientRect()
        if(400 > sectionOffset.top && sectionOffset.top > -200){
            //detecing scroll direction
            section.classList.add('activeParagraph')
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
            link.classList.remove("active")
            section.classList.remove('activeParagraph')
        }
        
    }
    
    

})






// Scroll to anchor ID using scrollTO event
function goToSection(id){
    let section = document.getElementById(id)
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    })

}



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNav()

// Scroll to section on link click


// Set sections as active


