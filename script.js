const game = document.getElementById("game");
const scoreEl = document.getElementById("score");
const livesEl = document.getElementById("lives");

const hitSound = document.getElementById("hit-sound");
const lifeSound = document.getElementById("life-sound");
const gameOverSound = document.getElementById("gameover-sound");

let score = 0;
let lives = 3;

let gameInterval;
let monsterTimeout;

// VARIÁVEIS DE DIFICULDADE
let spawnTime = 1200;
let monsterLifeTime = 1400;

const monsters = [
  "images/monster1.png",
  "images/monster2.png",
  "images/monster3.png"
];

startGame();

function startGame() {
  score = 0;
  lives = 3;

  // reseta dificuldade
  spawnTime = 1200;
  monsterLifeTime = 1400;

  scoreEl.textContent = score;
  updateLives();

  game.innerHTML = "";

  clearInterval(gameInterval);
  gameInterval = setInterval(spawnMonster, spawnTime);
}

function spawnMonster() {
  const monster = document.createElement("img");
  monster.classList.add("monster");

  monster.src = monsters[Math.floor(Math.random() * monsters.length)];

  const size = Math.random() * 20 + 70;
  monster.style.width = size + "px";

  const gameRect = game.getBoundingClientRect();
  const monsterSize = 80;

  monster.style.left =
    Math.random() * (gameRect.width - monsterSize) + "px";

  monster.style.top =
    Math.random() * (gameRect.height - monsterSize) + "px";

  monster.onclick = () => {
    hitSound.currentTime = 0;
    hitSound.play();

    score++;
    scoreEl.textContent = score;

    // PROGRESSÃO DE DIFICULDADE
    if (score % 5 === 0 && spawnTime > 400) {
      spawnTime -= 100;
      monsterLifeTime -= 100;

      clearInterval(gameInterval);
      gameInterval = setInterval(spawnMonster, spawnTime);
    }

    monster.remove();
    clearTimeout(monsterTimeout);
  };

  game.appendChild(monster);

  monsterTimeout = setTimeout(() => {
    if (game.contains(monster)) {
      monster.remove();
      loseLife();
    }
  }, monsterLifeTime);
}

function loseLife() {
  lives--;

  lifeSound.currentTime = 0;
  lifeSound.play();

  updateLives();

  if (lives <= 0) {
    endGame();
  }
}

function updateLives() {
  livesEl.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    const heart = document.createElement("img");
    heart.src =
      i < lives ? "images/heart.png" : "images/heart_empty.png";
    livesEl.appendChild(heart);
  }
}

function endGame() {
  clearInterval(gameInterval);
  clearTimeout(monsterTimeout);

  gameOverSound.currentTime = 0;
  gameOverSound.play();

  const bestScore = localStorage.getItem("bestScore") || 0;

  if (score > bestScore) {
    localStorage.setItem("bestScore", score);
  }

  localStorage.setItem("lastScore", score);

  setTimeout(() => {
    window.location.href = "gameover.html";
  }, 2500);
}
