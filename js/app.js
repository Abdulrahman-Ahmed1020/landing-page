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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/
const sections = Array.from(document.querySelectorAll('section'));
const menu = document.getElementById('navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 *
*/
// this functiion for create item in navbar
function addItemInNav() {
    for (section of sections) {
        sectionName = section.getAttribute('data-nav');
        sectionLink = section.getAttribute('id');
        item = document.createElement('li');
        item.innerHTML = `<a class="menu__link" href="#${sectionLink}">${sectionName}</a>`;
        menu.appendChild(item);
    }
}

// this function for know position of section 
function viewPort(el) {
    let sectionPos = el.getBoundingClientRect();
    return (sectionPos.top >= -400 && sectionPos.top <= 200);
}

// this function for add active class or remove it 
function addActiveClass() {
    for (section of sections) {

        if (viewPort(section)) {
            if (!section.classList.contains('your-active-class')) {
                section.classList.add('your-active-class');
            }
        } else {
            section.classList.remove("your-active-class");
        }
    }
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
addItemInNav();

// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event
document.addEventListener('scroll', addActiveClass);


//  End Main Functions
