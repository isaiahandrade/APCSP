// Initialize UI Elements
let bananaImg
let scoreDisplay
let livesDisplay
let difficultySlider
let title




// Initialize Game Variables
let lives = 3
let score = 0
let opacity = 1
let winningNum = 5

function setup() {
  // Setup Canvas
  createCanvas(windowWidth, windowHeight)

  bananaImg = createImg('https://mycodingclass.co/wp-content/uploads/2020/02/banana-300x150.png', 'banana image');
    bananaImg.size(200,100);


  // Setup Lives Display
  livesDisplay = createElement('h4', 'LIVES: ' + lives)
  livesDisplay.position(width / 20, height / 14)


  // Creates Difficulty Slider
  const difficultyLabel = createElement('h4', 'DIFFICULTY')

  slider = createSlider(frameRate);
    
}

function draw() {
  // Adjust frameRate according to slider
 
  

  // Randomly Position Banana
  bananaImg.position(random(width), random(height))

  slider.value(frameRate())
 
}

function mousePressed() {
  if (dist(mouseX, mouseY, bananaImg.x, bananaImg.y) > 200) {
    decreaseLives()
  }
}

function increaseScore() {
score = score + 1
}

function decreaseLives() {
score = score - 1
}

function checkWin() {


}

function checkLose() {

}