// Hamburger menu open
// Stap 1
let openNavButton = document.querySelector('.open-nav');
// Stap 2
openNavButton.addEventListener('click', function(){
    // Stap 3
    document.querySelector('nav').classList.remove('hidden')
});

// Hamburger menu dicht
// Stap 1
let closeNavButton = document.querySelector('.close-nav');

// Stap 2
closeNavButton.addEventListener('click', function(){
    //Stap 3
    document.querySelector('nav').classList.add('hidden')
});