import questions from "./quiz-questions";

// Global variables which remain constant.

const startButton = document.querySelector('.start-button');

const popupScreen = document.querySelector('.popup-screen');

const exitButton = document.querySelector('.exit-button');

const main = document.querySelector('.background');

const continueButton = document.querySelector('.continue-button');

const quizSection = document.querySelector('.quiz-section');

const quizBox = document.querySelector('.quiz-box');

const nextButton = document.querySelector('.next-button');

// Onclick event (arrow function (shorthand notation for defining functions))
// which adds the live class to the popup-screen css selector.
startButton.onclick = () => {
    popupScreen.classList.add('live');

    // Adds the live class to the background css selector.
    main.classList.add('live');
}

// Onclick event (arrow function (shorthand notation for defining functions))
// which removes the live class from the exit button css selector. 
exitButton.onclick = () => {
    popupScreen.classList.remove('live');

    // Removes the live class from the background css selector.
    main.classList.remove('live');
}

// Onclick event which adds the live class to the popup-screen css selector.
continueButton.onclick = () => {
    quizSection.classList.add('live');
    popupScreen.classList.remove('live');
    main.classList.remove('live');
    quizBox.classList.add('live');

    showQuestions(0);
}

let questionCount = 0;

nextButton.onclick = () => {
    questionCount++;
    showQuestions(questionCount);
}

// Getting questions and options from the array 

function showQuestions(index) {
    const questionText = document.querySelector('.quiz-questions');
    questionText.textContent = `${questions[index].number}. ${questions[index].question}`;
}