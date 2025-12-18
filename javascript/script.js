//--------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------Hamburger menu open
// Stap 1
let openNavButton = document.querySelector('.open-nav');
let nav = document.querySelector('nav');
// Stap 2
openNavButton.addEventListener('click', function(e){
    // Stap 3
    e.stopPropagation();
    nav.classList.remove('hidden')
});

// ---------------------------------Hamburger menu dicht + ook als je er naast klikt
// Stap 1
let closeNavButton = document.querySelector('.close-nav');
// Stap 2
closeNavButton.addEventListener('click', function(e){
    //Stap 3
    e.stopPropagation();
    nav.classList.add('hidden')
});

nav.addEventListener('click', function(e){
    e.stopPropagation();
});

document.addEventListener('click', function(e){
    nav.classList.add('hidden');
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
// -------------------------------- popup open
const openFilters = document.querySelector('.open-filters');
const popUp = document.querySelector('.filter-popup');
const closeFilters = document.querySelector('.close-filters');
const filterSection = document.querySelector('.filter-section')

//---
const backgroundElements = document.querySelectorAll('.hero-section, main, .open-filters, .introduction-section');
//---

openFilters.addEventListener('click', function(e) {
    popUp.classList.add('center');
    popUp.classList.remove('hidden');
    backgroundElements.forEach(el => el.classList.add('blur'));
    filterSection.style.zIndex = '100';
    e.stopPropagation();
});

closeFilters.addEventListener('click', function(e) {
    popUp.classList.remove('center');
    popUp.classList.add('hidden');
    backgroundElements.forEach(el => el.classList.remove('blur'));
    filterSection.style.zIndex = '-1';
    e.stopPropagation();
});

popUp.addEventListener('click', function(e){
    e.stopPropagation();
});

document.addEventListener('click', function(e){
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
//--------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------- filteren snap ik niks van 


//--------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------- teskt afkorten 
let articleText = document.querySelectorAll('.article-text p');

articleText.forEach(articleText => {
    let words = articleText.textContent.split(' ');
    let shortText = words.slice(0, 30).join(' ') + '...';
    articleText.textContent = shortText;
});

//--------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------- Article count
const articleCount = document.querySelector('.article-count')

function updateArticleCount() {
    const visibleArticles = document.querySelectorAll('article:not(.hidden)');
    articleCount.textContent = `${visibleArticles.length} artikelen`;
}
updateArticleCount();

//--------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------- filter count
const filters = document.querySelectorAll('.filter');
const filterCount = document.querySelector('.filter-count');

function updateFilterCount() {
    const checkedFilters = document.querySelectorAll('.filter:checked');
    filterCount.textContent = `${checkedFilters.length} Filters toegepast`;
};

filters.forEach(filter => {
    filter.addEventListener('change', updateFilterCount);
});

updateFilterCount();


//--------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------- filter verwijder knop

const filterButton = document.getElementById('clear-filters');

filterButton.addEventListener('click', () => {
    const checkedFilters = document.querySelectorAll('.filter:checked');
    checkedFilters.forEach(filter => {
        filter.checked = false;
    });
    updateFilterCount();
});