
const question = document.getElementById("question");
const nextButton = document.getElementById("next-btn");
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");
const options = Array.from(document.getElementsByClassName("choicetext"));
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let quizOption1 = document.getElementById("option-1");
let quizOption2 = document.getElementById("option-2");
let quizOption3 = document.getElementById("option-3");
let quizOption4 = document.getElementById("option-4");

let questions = [
  {
    question:
      `In start.ng "class-html-css-js" channel which is exculivsely frontend class ________ is the prominent javascript tutor`,
    option1: "Emmanuel Owojori/(slack ID = phileo.)",
    option2: "Eniola Agboola/(slack ID = EniolaAgbola.)",
    option3: "Jeffery Oga/(slack ID = jeff.)",
    option4: "Abasifreke Ekwere/(slack ID = kingbesh.)",
    answer: 3,
  },
  {
    question: `The "Sofware Testing" class was handled by the________`,
    option1: "Jude Jonathan/(slack ID = JudeJay.)",
    option2: "Motunrayo Da-costa/(slack ID = Motun.)",
    option3: "Patric Aziken/(slack ID = SkylarNG89.)",
    option4: "Emmanuel Owojori/(slack ID = phileo.)",
    answer: 3,
  },
  {
    question:
      "The design tutor that started off to become a coder but was changed along the line in HNG internship and hence a 'sophisicated' is___________ ",
    option1: "Motunrayo Da-costa/(slack ID = Motun.)",
    option2: "Chukwemeka Iheonye/(slack ID = sophisticateddev)",
    option3: "Patric Aziken/(slack ID = SkylarNG89.)",
    option3: "Emmanuel Owojori/(slack ID = phileo.)",
    option4: "Jude Jonathan/(slack ID = JudeJay.)",
    answer: 2,
  },
  {
    question:
    `In start.ng "class-nodejs" channel which is exculivsely backend class ________ is the prominent nodejs tutor`,
    option1: "Damilola Michael Ige/(slack ID = idmcalculus)",
    option2: "Chukwemeka Iheonye/(slack ID = sophisticateddev)",
    option3: "Patric Aziken/(slack ID = SkylarNG89.)",
    option3: "Emmanuel Owojori/(slack ID = phileo.)",
    option4: "Jude Jonathan/(slack ID = JudeJay.)",
    answer: 1,
  },
  {
    question:
    "Who is the cordinator and Baba Isale of the start.ng 2020 program?",
    option1: "Damilola Michael Ige/(slack ID = idmcalculus)",
    option2: "Chukwemeka Iheonye/(slack ID = sophisticateddev)",
    option3: "Patric Aziken/(slack ID = SkylarNG89.)",
    option3: "Emmanuel Owojori/(slack ID = phileo.)",
    option4: "Seyi Onifade/(slack ID = xyluz)",
    answer: 4,
  },
];

// Constants
const Correct_Point = 2;
const Max_Questions = 5;

startQuiz = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= Max_Questions) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("end.html");
  }

  questionCounter++;
  questionCounterText.innerText = `${questionCounter} of ${Max_Questions}`;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  options.forEach((option) => {
    const number = option.dataset["number"];
    option.innerText = currentQuestion["option" + number];
  });

  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
};

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedOption = e.target;
    const selectedAnswer = selectedOption.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      increaseScore(Correct_Point);
      selectedOption.parentElement.classList.add(classToApply);
    } else {
      selectedOption.parentElement.classList.add(classToApply);

      if (currentQuestion.answer === 1) {
        quizOption1.classList.add("correct");
      } else if (currentQuestion.answer === 2) {
        quizOption2.classList.add("correct");
      } else if (currentQuestion.answer === 3) {
        quizOption3.classList.add("correct");
      } else if (currentQuestion.answer === 4) {
        quizOption4.classList.add("correct");
      }
    }

    setTimeout(() => {
      quizOption1.classList.remove("correct");
      quizOption2.classList.remove("correct");
      quizOption3.classList.remove("correct");
      quizOption4.classList.remove("correct");
      selectedOption.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

nextButton.addEventListener("click", (event) => {
  getNewQuestion();
});

increaseScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startQuiz();