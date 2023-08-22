// Global variables.

const startButton = document.querySelector('.start-button');
const popupScreen = document.querySelector('.popup-screen');
const exitButton = document.querySelector('.exit-button');
const main = document.querySelector('.background');

// Onclick event which adds the live class to the popup-screen css selector
startButton.onclick = () => {
    popupScreen.classList.add('live');
    // Adds the live class to the background css selector
    main.classList.add('live');
}

// Onclick event which removes the live class from the exit button css selector
exitButton.onclick = () => {
    popupScreen.classList.remove('live');
    // Removes the live class from the background css selector
    main.classList.remove('live');
}