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



//--------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------- popup open
const openFilters = document.querySelector('.open-filters');
const popUp = document.querySelector('.filter-popup');
const closeFilters = document.querySelector('.close-filters');
const filterSection = document.querySelector('.filter-section')

//---
const backgroundElements = document.querySelectorAll('.hero-section, main, .open-filters, .tijdelijke-uitleg');
//---

openFilters.addEventListener('click', function() {
    popUp.classList.remove('hidden');
    backgroundElements.forEach(el => el.classList.add('blur'));
    filterSection.style.zIndex = '50';
});

closeFilters.addEventListener('click', function() {
    popUp.classList.add('hidden');
    backgroundElements.forEach(el => el.classList.remove('blur'));
    filterSection.style.zIndex = '0';
});





//--------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------- popup navigatie (heel heel veel help van ai!!!!!!!!!!!!)

const stepOne = document.querySelectorAll('.step-1');
const stepTwo = document.querySelectorAll('.step-2');
const stepThree = document.querySelectorAll('.step-3');
const stepFour = document.querySelectorAll('.step-4');
const stepFive = document.querySelectorAll('.step-5');

const nextBtn = document.querySelector('.btn-next');
const previousBtn = document.querySelector('.btn-previous');

let currentStep = 1;

const allSteps = [stepOne, stepTwo, stepThree, stepFour, stepFive];

// stap 2:

function showStep(stepIndex){

    allSteps.forEach(stepGroup => {
        stepGroup.forEach(el => {
            el.classList.add('hidden');
            el.classList.add('fill');
            el.classList.remove('active-step');
        });
    });

    allSteps[stepIndex - 1].forEach(el => {
            el.classList.remove('hidden');
            el.classList.add('active-step');
    });

}

nextBtn.addEventListener('click', () => {
    if (currentStep < allSteps.length) {
        currentStep++;
        showStep(currentStep);
    }
});

previousBtn.addEventListener('click', () => {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
});

showStep(currentStep);


