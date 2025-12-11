//--------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------Hamburger menu open
// Stap 1
let openNavButton = document.querySelector('.open-nav');
let nav = document.querySelector('nav');
// Stap 2
openNavButton.addEventListener('click', function(){
    // Stap 3
    nav.classList.remove('hidden')
});

// ---------------------------------Hamburger menu dicht
// Stap 1
let closeNavButton = document.querySelector('.close-nav');
// Stap 2
closeNavButton.addEventListener('click', function(){
    //Stap 3
    nav.classList.add('hidden')
});

//--------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------header logo weg na scrollen
// Stap 1
let headerLogo = document.querySelector('.civic-logo');
let scrollArea = window;

// Stap 2
scrollArea.addEventListener('scroll', function(){
    // Stap 3
    headerLogo.classList.add('hidden');
});


// ---------------------------------header logo text tonen na scrollen
//stap 1 
let headerText = document.querySelector('.logo-text');

//stap 2 
scrollArea.addEventListener('scroll', function(){
    //stap 3
    headerText.classList.remove('hidden');
});


// ---------------------------------Als helemaal omhoog is gescrolled
// Stap 1 hoeft niet meer
// Stap 2
window.addEventListener('scroll', function(){
    if (window.scrollY === 0){
        //Stap 3
        headerLogo.classList.remove('hidden');
        headerText.classList.add('hidden');
    }
});




//--------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------- teskt afkorten 
let articleText = document.querySelector('.article-text p')
let words = articleText.textContent.split(' ')
let shortText = words.slice(0,30).join(' ') + ('...')

articleText.textContent = shortText;
