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


// Adding sections dynamically 
function createSections(n, paragraphs){
    const main = document.querySelector('main')
    for (let i=1; i<=n; i++){
        const newSection = document.createElement('section')
        newSection.setAttribute('id',`section${i}`)
        newSection.setAttribute('data-nav',`Section ${i}`)

        const newDiv = document.createElement('div')
        newDiv.classList.add('landing__container')

        const newHTag = document.createElement('h2')
        newHTag.innerHTML = `Section ${i}`
        const newp = document.createElement('p')
        newp.innerHTML = paragraphs[i][1]
        const newp2 = document.createElement('p')
        newp2.innerHTML = paragraphs[i][2]

        newDiv.appendChild(newHTag)
        newDiv.appendChild(newp)
        newDiv.appendChild(newp2)
        newSection.appendChild(newDiv)
        main.appendChild(newSection)
    }
}

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
document.addEventListener('scroll',()=>{
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
                // detecting screen width to resize the font for better readability on phones
                if(screen.width < 400){
                    lastSize = (-sectionOffset.top/1000)*2+1.75 > 1.4 ? 1.4:((-sectionOffset.top/1000)*2+1.75 < 1 ? 1:(-sectionOffset.top/1000)*2+1.75) 
                    section.style.fontSize = `${lastSize}rem`
                } else {
                    lastSize = (-sectionOffset.top/1000)*2+1.75 > 1.65 ? 1.65:((-sectionOffset.top/1000)*2+1.75 < 1.2 ? 1.2:(-sectionOffset.top/1000)*2+1.75) 
                    section.style.fontSize = `${lastSize}rem`
                }
                
                
            } else {
                //up
                // detecting screen width to resize the font for better readability on phones
                if(screen.width < 400){
                    size = lastSize - (sectionOffset.top/1000) > 1.4 ? 1.4: (lastSize - (sectionOffset.top/1000) < 1 ? 1 : lastSize - (sectionOffset.top/1000))
                    section.style.fontSize = `${size}rem`
                } else {
                    size = lastSize - (sectionOffset.top/1000) > 1.65 ? 1.65: (lastSize - (sectionOffset.top/1000) < 1.2 ? 1.2 : lastSize - (sectionOffset.top/1000))
                    section.style.fontSize = `${size}rem`
                }
                
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


// Add sections to the page 
// You can change n and the paragraphs added to the page to your liking
const n = 4
// You can dynamically change sections text by changing this json or even update its data dynamically through an api
let paragraphs = {
    '1': {
        '1' :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
        '2' : "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.",
    },

    '2': {
        '1' :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
        '2' : "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.",
    },
    '3': {
        '1' :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
        '2' : "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.",
    },
    '4': {
        '1' :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
        '2' : "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.",
    }
}
createSections(n,paragraphs)
// Build menu 
buildNav()



