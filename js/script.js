// Selecting DOM elements and assigning them to variables
const gameContainer = document.querySelector('.game-container');
const nameInput = gameContainer.querySelector('.name-input');
const submitBtn = gameContainer.querySelector('.submit-btn');
const nextBtn = gameContainer.querySelector('.next-btn');
const fatImg = gameContainer.querySelector('.fat-img img');
const fatImgText = gameContainer.querySelector('.fat-img p');
const normalImg = gameContainer.querySelector('.normal-img img');
const normalImgText = gameContainer.querySelector('.normal-img p');
const resultElem = gameContainer.querySelector('.result .result-text');
const roundElem = gameContainer.querySelector('.round h4');
const playAgainBtns = document.querySelectorAll('.play-again');

// Defining variables for game logic
const maxRounds = 10;
const usedIndexes = [];
let currentRound = 1;
let score = 0;
let currentCeleb = null;

// Function to get a random and new index from the imagesData array
const getRandomIndex = () => {
    if (usedIndexes.length === imagesData.length) usedIndexes = [];
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * imagesData.length);
    } while (usedIndexes.includes(randomIndex));
    usedIndexes.push(randomIndex);
    return randomIndex;
}

// Function to reset game elements for a new round
const resetElement = () => {
    fatImgText.textContent = 'Edited Photo';
    nameInput.value = '';
    submitBtn.classList.remove('show-btn');
    gameContainer.classList.remove('show-result');
    roundElem.textContent = `${currentRound} / ${maxRounds}`;
}

// Function to update game elements for a new round
const updateGameElement = () => {
    resetElement();
    currentCeleb = imagesData[getRandomIndex()];
    const { celebName, fatImgPath, normalImgPath } = currentCeleb;
    fatImg.src = fatImgPath;
    normalImg.src = normalImgPath;
    normalImgText.textContent = `Normal Photo (${celebName})`;
    roundElem.textContent = `${currentRound} / ${maxRounds}`;
}

updateGameElement();

// Function to show the final results when the game is over
const showResults = () => {
    document.querySelector(".final-score").textContent = `${score} / ${maxRounds}`;
    score = 0;
    currentRound = 1;
    usedIndexes.length = 0;
    document.querySelector('.show-modal').click();
}

// Function to check the user's answer and update the score and feedback
const checkAnswer = (fullName, lastName, userAnswer) => {
    const isCorrectAnswer = lastName === userAnswer.trim();
    score += isCorrectAnswer ? 1 : 0;
    
    resultElem.className = isCorrectAnswer ? 'text-success' : 'text-danger';
    resultElem.textContent = isCorrectAnswer ? 'Correct' : 'Incorrect';

    fatImgText.textContent = `Edited Photo (${fullName})`;
    gameContainer.classList.add('show-result');
}

nextBtn.addEventListener("click", () => {
    currentRound++;
    if (currentRound > maxRounds) return showResults();
    updateGameElement();
});

submitBtn.addEventListener('click', () => {
    checkAnswer(currentCeleb.celebName, currentCeleb.lastName.toLowerCase(), nameInput.value.toLowerCase());
});

nameInput.addEventListener('keyup', (e) => {
    submitBtn.classList.toggle('show-btn', e.target.value.trim());
    if (e.key === "Enter" && e.target.value) submitBtn.click();
});

playAgainBtns.forEach(btn => btn.addEventListener("click", updateGameElement));