const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start-quiz");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const highscoreContainer = document.getElementById("highscore-container");
const highScoreForm = document.getElementById("highscore-form")
const highscoreSubmitButton = document.getElementById("highscore-submit")
const highscoreElement = document.getElementById("highscore");
const timerContainter = document.getElementById("timer-container");
const timerElement = document.getElementById("timer");
const backButtonElement = document.getElementById("back-to-quiz")
const clearButton = document.getElementById("clear-highscores")
const questions = [{
      question: "Question 1",
      choices: ["A", "B", "C", "D"],
      answer: 0,
    },
    {
      question: "Question 2",
      choices: ["A", "B", "C", "D"],
      answer: 0,
    },
    {
      question: "Question 3",
      choices: ["A", "B", "C", "D"],
      answer: 0,
    },
  ];
let currentQuestionIndex = 0;
let secondsLeft = 10;
let score = 0;

startButton.addEventListener("click", startQuiz,); 
clearButton.addEventListener("click", clearLocalData);
clearButton.addEventListener("click", displayHighscore);
// not sure how to set us to the default state
// backButtonElement.addEventListener("click", location.reload()); 
  
function startQuiz() {
  startButton.style.display = "none";
  questionContainer.style.display = "block";
  showQuestion();
  setTime();
}

function showQuestion(){
  if (currentQuestionIndex >= questions.length){
  endQuiz();
  return;
  }
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  answerButtons.innerHTML = "";

  currentQuestion.choices.forEach((choice, index) =>{
    const button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", () => checkAnswer(index));
    answerButtons.appendChild(button);
  })

}


function checkAnswer(selectedIndex){
  const currentQuestion = questions[currentQuestionIndex]
  if (selectedIndex === currentQuestion.answer)
    score++;
    scoreElement.textContent = score;
  currentQuestionIndex++;
  showQuestion();
}

function saveHighscore(highscore) {
  localStorage.setItem("highscore", JSON.stringify(highscore));
}

function getHighscore() {
  return JSON.parse(localStorage.getItem("highscore")) || 0;
}

function checkAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedIndex === currentQuestion.answer) {
    score++;
    scoreElement.textContent = score;

    const highscore = getHighscore();
    if (score > highscore) {
      saveHighscore(score);
    }
  }
  currentQuestionIndex++;
  showQuestion();
}

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerElement.textContent ="time reamaining: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}

function displayHighscore() {
  const highscore = getHighscore();
  highscoreElement.textContent = `Highscore: ${highscore}`;
}

function clearLocalData(){
  localStorage.clear();
}

function endQuiz() {
  questionContainer.style.display = "none";
  scoreContainer.style.display = "block";
  highscoreContainer.style.display = "block";
  highScoreForm.style.display = "block";
  // need to figure out how to drop a prevent.default() in this code 

  if (score > parseInt(highscoreElement.textContent)) {
    highscoreElement.textContent = score;
  };
  displayHighscore();
  
}


  