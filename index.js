// Home Section
let addOneEl = document.querySelector(".home-box")
let addTwoEl = document.querySelector(".home-box")
let addThreeEl = document.querySelector(".home-box")

let count = 0

function addOne() {
    count += 1
    addOneEl.textContent = count
}

function addTwo() {
    count += 2
    addTwoEl.textContent = count
}

function addThree() {
    count += 3
    addThreeEl.textContent = count
}

// End Home Section

// Guest Section
let plusOneEl = document.querySelector(".guest-box")
let plusTwoEl = document.querySelector(".guest-box")
let plusThreeEl = document.querySelector(".guest-box")
let countTwo = 0

function plusOne() {
    countTwo += 1
    plusOneEl.textContent = countTwo
}

function plusTwo() {
    countTwo += 2
    plusTwoEl.textContent = countTwo
}

function plusThree() {
    countTwo += 3
    plusThreeEl.textContent = countTwo
}
// End Guest Section

// Reset Function for both Home and Guest
function reset() {
    count = 0;
    countTwo = 0;
    addOneEl.textContent = count;
    addTwoEl.textContent = count;
    addThreeEl.textContent = count;
    plusOneEl.textContent = countTwo;
    plusTwoEl.textContent = countTwo;
    plusThreeEl.textContent = countTwo;
}