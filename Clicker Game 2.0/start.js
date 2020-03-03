function setup(){
  createCanvas(windowWidth, windowHeight)
  heading = createElement('h2', 'Play Click the Banana!')
  heading.position(width / 3, height / 4);
  background('blue')
  button = createButton('GO TO GAME');
	button.position(width/2, height/2)
	button.mousePressed(goToLink)
}

function goToLink(){
    window.location.href ='game.html';
}