let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;
let currentQuestions = [];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultElement = document.getElementById("result");
const timerElement = document.getElementById("timer");
const questionNumberElement = document.getElementById("question-number");
const totalQuestionsElement = document.getElementById("total-questions");
const levelSelect = document.getElementById("level");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const playAgainBtn = document.getElementById("again-btn");

const musicBtn = document.getElementById("music-btn");
const musicIcon = document.getElementById("music-icon");

let audioElmCorrect = new Audio(
  "./audios/607926__robinhood76__10661-bonus-correct-answer.wav"
);
let audioElmWrong = new Audio("./audios/587253__beetlemuse__dats-wrong.wav");

let isLight = true;
let bgMusic = new Audio("./audios/bgSound.wav");

musicBtn.addEventListener("click", () => {
  if (isLight) {
    musicIcon.src = "./image/icons8-toggle-on-80.png";
    bgMusic.play()
    musicBtn.innerHTML=' توقف موزیک' 
  } else {
    musicIcon.src = "./image/icons8-toggle-off-80.png";
    bgMusic.pause()
    musicBtn.innerHTML=' پخش موزیک'
  }

  isLight = !isLight; // تغییر حالت
});

// اضافه کردن رویدادها
levelSelect.addEventListener("change", () => {
  if (levelSelect.value) {
    startQuiz(levelSelect.value);
  }
});

// audio function

startBtn.addEventListener("click", () => {
  if (levelSelect.value && levelSelect.value !== "-1") {
    startQuiz(levelSelect.value);
  }
  
});

stopBtn.addEventListener("click", stopQuiz);
playAgainBtn.addEventListener("click", startNewQuiz);

function startQuiz(level) {
  currentQuestions = questions[level];
  currentIndex = 0;
  score = 0;

  // نمایش بخش آزمون و اطلاعات سوال
  document.querySelector(".question-info").style.display = "block";
  document.getElementById("quiz").style.display = "block";
  stopBtn.style.display = "block";
  playAgainBtn.style.display = "none"; // مخفی کردن دکمه "شروع دوباره"

  questionElement.style.display = "block";
  optionsElement.style.display = "block";
  nextBtn.style.display = "none";
  timerElement.style.display = "block";
  resultElement.textContent = "";
  startBtn.style.display = "none";
  levelSelect.disabled = true;

  totalQuestionsElement.textContent = currentQuestions.length;
  loadQuestion();
}

function loadQuestion() {
  clearInterval(timer);
  startTimer();

  const currentQuestion = currentQuestions[currentIndex];

  questionNumberElement.textContent = ` سوال ${currentIndex + 1}`;
  questionElement.textContent = currentQuestion.question;

  optionsElement.innerHTML = "";
  nextBtn.style.display = "none";

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");
    button.addEventListener("click", selectAnswer);
    optionsElement.appendChild(button);
  });
}

function selectAnswer(e) {
  clearInterval(timer);
  const selectedOption = e.target;
  const correctAnswer = currentQuestions[currentIndex].answer;

  if (selectedOption.textContent === correctAnswer) {
    selectedOption.classList.add("correct");
    audioElmCorrect.play();
    score++;
  } else {
    selectedOption.classList.add("incorrect");
    Array.from(optionsElement.children).forEach((option) => {
      if (option.textContent === correctAnswer) {
        option.classList.add("correct");
      }
    });
    audioElmWrong.play();
  }

  Array.from(optionsElement.children).forEach((option) => {
    option.removeEventListener("click", selectAnswer);
    option.classList.add("disabled");
  });

  nextBtn.style.display = "block";
}

function startTimer() {
  timeLeft = 10;
  timerElement.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      autoSkip();
    }
  }, 1000);
}

function autoSkip() {
  Array.from(optionsElement.children).forEach((option) => {
    option.removeEventListener("click", selectAnswer);
    option.classList.add("disabled");
  });
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < currentQuestions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function stopQuiz() {
  clearInterval(timer);
  document.querySelector(".question-info").style.display = "none";
  document.getElementById("quiz").style.display = "none";

  stopBtn.style.display = "none";
  playAgainBtn.style.display = "block"; // نمایش دکمه "شروع دوباره"

  showResult();
}

function showResult() {
  questionElement.style.display = "none";
  optionsElement.style.display = "none";
  nextBtn.style.display = "none";
  timerElement.style.display = "none";
  resultElement.textContent = ` امتیاز شما: ${score} از ${currentQuestions.length}`;
}

function startNewQuiz() {
  currentIndex = 0;
  score = 0;
  levelSelect.disabled = false; // فعال کردن سطح انتخابی

  // مخفی کردن دکمه "شروع دوباره" و نمایش دکمه "شروع"
  playAgainBtn.style.display = "none";
  startBtn.style.display = "block";

  // مخفی کردن نمایش امتیاز
  resultElement.textContent = "";

  // بازنشانی وضعیت‌ها
  document.querySelector(".question-info").style.display = "none";
  document.getElementById("quiz").style.display = "none";
  levelSelect.value = -1; // ریست کردن سطح انتخاب شده
}
