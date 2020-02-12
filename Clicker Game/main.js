let button;

function setup() {
  createCanvas(400, 400);
	button = createButton('GO TO GAME');
	button.position(width/2, height/2)
	button.mousePressed(goToLink)
}background(220);



function goToLink() {
	window.location.href ='game.html';
}