const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const answerElements = document.querySelectorAll('.answer');
const resultElement = document.getElementById('result');

let currentQuestion = 0;
let score = 0;

const questions = [
    {
        question: 'What is the correct syntax to declare a variable in JavaScript?',
        answers: ['var myVariable', 'variable myVariable', 'v myVariable', 'declare myVariable'],
        correctAnswer: 0
    },
    {
        question: 'Which of the following data types is NOT primitive in JavaScript?',
        answers: ['String', 'Number', 'Object', 'Boolean'],
        correctAnswer: 2
    },
    {
        question: 'Which method is used to parse a JSON string in JavaScript?',
        answers: ['JSON.stringify()', 'JSON.parse()', 'JSON.convert()', 'JSON.decode()'],
        correctAnswer: 1
    },
    {
        question: 'Which keyword is used to create a function in JavaScript?',
        answers: ['function', 'def', 'func', 'method'],
        correctAnswer: 0
    },
    {
        question: 'How do you create an array in JavaScript?',
        answers: ['var arr = {};', 'var arr = [];', 'var arr = ();', 'var arr = <>;'],
        correctAnswer: 1
    },
    {
        question: 'What is the result of typeof NaN?',
        answers: ['number', 'NaN', 'undefined', 'object'],
        correctAnswer: 0
    },
];

function generateQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    answerElements.forEach((answer, index) => {
        answer.textContent = question.answers[index];
        answer.classList.remove('selected'); // Clear previous selection
        answer.onclick = checkAnswer; // Set the click listener
    });
}

function checkAnswer(event) {
    // Get the index of the selected answer
    const selectedAnswerIndex = Array.from(answerElements).indexOf(event.target);
    
    // Get the correct answer index from the current question
    const correctAnswerIndex = questions[currentQuestion].correctAnswer;

    // Compare indices to determine if the answer is correct
    if (selectedAnswerIndex === correctAnswerIndex) {
        score++;
        resultElement.textContent = `Correct! Your score is ${score} out of ${currentQuestion + 1}.`;
    } else {
        const correctAnswer = questions[currentQuestion].answers[correctAnswerIndex];
        resultElement.textContent = `Incorrect. The correct answer is ${correctAnswer}. Your score is ${score} out of ${currentQuestion + 1}.`;
    }

    // Move to the next question or finish the quiz
    currentQuestion++;
    if (currentQuestion < questions.length) {
        generateQuestion();
    } else {
        resultElement.textContent = `Quiz complete! Your final score is ${score} out of ${questions.length}.`; 
    }
}

// Initialize the quiz
generateQuestion();
