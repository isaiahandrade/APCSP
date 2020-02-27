function setup(){
  createCanvas(windowWidth, windowHeight)
  button = createButton('GO TO GAME');
	button.position(width/2, height/2)
	button.mousePressed(goToLink)
}

function goToLink(){
    window.location.href ='game.html';
}