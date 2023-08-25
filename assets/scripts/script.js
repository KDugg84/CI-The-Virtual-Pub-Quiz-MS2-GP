// Import variable array "questions" from quiz-questions.js

import questions from "./quiz-questions.js";

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

    questionCounter(1);
}

let questionCount = 0;

let questionNumber = 1;

nextButton.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);

        questionNumber++;

        questionCounter(questionNumber);
    } 
    else {
        console.log('Questions Completed');
    }
}

const answerList = document.querySelector('.answer-list');

// Getting questions and options from the array 

function showQuestions(index) {
    const questionText = document.querySelector('.quiz-questions');
    questionText.textContent = `${questions[index].number}. ${questions[index].question}`;

    let answerTag = `<div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>
    <div class="option"><span>${questions[index].options[3]}</span></div>`;

    answerList.innerHTML = answerTag;

    const answerOptions = document.querySelectorAll('.option');
    for (let i = 0; i < answerOptions.length; i++) {
        answerOptions[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

// Uncaught ReferenceError: optionSelected is not defined
// at HTMLDivElement.onclick (quiz.html:1:1)

function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;

    if (userAnswer == correctAnswer) {
        answer.classList.add('correct');
    }
    else {
        answer.classList.add('incorrect');
    }
} 

function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`;
}