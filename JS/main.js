// Nickname Generator

//Variables for HTML Elements
let resultsDivEl = document.getElementById("results");
let firstNameEl = document.getElementById("first-name");
let lastNameEl = document.getElementById("last-name");
let randBtnEl = document.getElementById("rand-name");
let allBtnEl = document.getElementById("all-names");

// Event Listeners
randBtnEl.addEventListener("click", generateRandName);
allBtnEl.addEventListener("click", allNames);

function generateRandName() {
    // Input - Get first and last name
    let firstName = firstNameEl.value;
    let lastName = lastNameEl.value;

    rand = nicknames[randomInt(0, nicknames.length)];
    resultsDivEl.innerHTML = firstName + " " + rand + " " + lastName;
}

function allNames() {
    // Input - Get first and last name
    let firstName = firstNameEl.value;
    let lastName = lastNameEl.value;
    let divStr = "";
    for (let i = 0; i < nicknames.length; i++) {
        divStr += firstName + " " + nicknames[i] + " " + lastName + "<br>";
    }
    resultsDivEl.innerHTML = divStr;
}
