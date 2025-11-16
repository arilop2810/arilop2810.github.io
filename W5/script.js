let isOpen = true;

const nav = document.querySelector(".navStyle");
const content = document.querySelector(".container-content");

// toggle navigation bar
function toggleMenu() {
    console.log('hamburger clicked - isOpen before toggle:',isOpen); 
    ///i was having alot of trouble with the mobile toggle so i made this console log to see if the button was working or not :/
    //in the end i did get it to work, but. its clicks are a tad bit off
    if (isOpen===true) {
        // HIDE NAV
        nav.classList.add("hidden-nav"); //desktop?
        content.classList.add("wide-content"); ///mobile
        isOpen = false;
    } else {
        // SHOW NAV
        nav.classList.remove("hidden-nav");
        nav.classList.add("nav-open");
        content.classList.remove("wide-content");
        isOpen = true;
    }
}

// click event
document.getElementById("menu").addEventListener("click", toggleMenu);