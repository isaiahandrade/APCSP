let bananaImg
let heading

function setup(){
    frameRate(1)
    
    createCanvas(windowWidth, windowHeight);
    bananaImg = createImg('https://mycodingclass.co/wp-content/uploads/2020/02/banana-300x150.png', 'banana image');
    bananaImg.size(200,100);

    heading = createElement('h2', 'Click The Banana!');
    heading.position(width / 3, height / 4);
}

function draw(){
    bananaImg.position(random(width), random(height));
    bananaImg.mousePressed(youWon);

}

function youWon(){
heading.html('You Won!');
bananaImg.remove();
}

// let button;
// function setup() {
//   createCanvas(400, 400);
//   button = createButton('Go To Main Page');
//   button.position(width / 2, height / 2)
//   button.mousePressed(goToLink)
// }
// function draw() {
//   background(220);
// }
// function goToLink() {
//   window.location.href = 'main.html'; // Same tab
// }