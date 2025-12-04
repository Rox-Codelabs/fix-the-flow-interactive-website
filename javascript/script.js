// Hamburger menu open
// Stap 1
let openNavButton = document.querySelector('.open-nav');
// Stap 2
openNavButton.addEventListener('click', function(){
    // Stap 3
    document.querySelector('nav').classList.remove('hidden')
});

