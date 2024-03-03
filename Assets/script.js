const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start-quiz");


function startQuiz() {

  // Initialize quiz and hide the start screen

  startScreen.style.display = "none";

  // Continue with the quiz questions

};


startButton.addEventListener("click", startQuiz);

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
  ];
