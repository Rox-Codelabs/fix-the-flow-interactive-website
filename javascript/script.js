//--------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------Hamburger menu open
// Stap 1
let openNavButton = document.querySelector('.open-nav');
// Stap 2
openNavButton.addEventListener('click', function(){
    // Stap 3
    document.querySelector('nav').classList.remove('hidden')
});

// ---------------------------------Hamburger menu dicht
// Stap 1
let closeNavButton = document.querySelector('.close-nav');

// Stap 2
closeNavButton.addEventListener('click', function(){
    //Stap 3
    document.querySelector('nav').classList.add('hidden')
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
// --------------------------------progressbar
// Stap 1