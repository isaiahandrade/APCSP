// Initialize UI Elements
let beetlejuiceImg
let scoreDisplay
let livesDisplay
let difficultySlider
let title




// Initialize Game Variables
let lives = 3
let score = 0
let opacity = 1
let winningNum = 5
let slider;

function setup() {
  // Setup Canvas
  createCanvas(windowWidth, windowHeight)
  background('blue')

  beetlejuiceImg = createImg('beetlejuice.png', 'beetlejuice image');
  beetlejuiceImg.size(200,100);
  
    heading = createElement('h2', 'Click Beetlejuice!')
    heading.position(width / 3, height / 4);
  

  // Setup Lives Display
  livesDisplay = createElement('h4', 'LIVES: ' + lives)
  livesDisplay.position(width / 20, height / 14).id('lives-display')

  scoreDisplay = createElement('h4', 'SCORE: ' + score)
  scoreDisplay.position(width / 20, height / 18)


  // Creates Difficulty Slider
  const difficultyLabel = createElement('h4', 'DIFFICULTY')
  difficultyLabel.position(width/8, height/15)
  frameRate(1);
  slider = createSlider(1, 15, 1);
 slider.position(width / 8, height / 9)
  slider.style('width', '80px');


    
}

function draw() {
  // Adjust frameRate according to slider
 
  let val = slider.value();
 frameRate(val);

  // Randomly Position Banana
  beetlejuiceImg.position(random(width), random(height))
 
  beetlejuiceImg.mousePressed(increaseScore)

  checkLose()
  checkWin()
 
}

function mousePressed() {
  if (dist(mouseX, mouseY, beetlejuiceImg.x, beetlejuiceImg.y) > 100) {
    decreaseLives()
  }
 
}

function increaseScore() {
score = score + 1
scoreDisplay.html('SCORE: ' + score)
checkScore()
}

function decreaseLives() {
  lives = lives - 1
  livesDisplay.html('LIVES: ' + lives)
  checkLives()
}

function checkWin() {
  if (score === 3) {
    goToWin();
  }

}

function checkLose() {
  if (lives === 0) {
    goToLose();
  }
}

function goToLose(){
  window.location.href ='lose.html';
}
function goToWin(){
  window.location.href = 'win.html';
}