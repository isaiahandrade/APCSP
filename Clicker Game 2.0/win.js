function setup(){
    createCanvas(windowWidth, windowHeight)
    background('blue')
        heading = createElement('h2', 'You Won!')
        heading.position(width / 3, height / 4);
      
        button = createButton('Play Again?')
        button.position(width / 2, height / 2)
        button.mousePressed(goToLink)
}
    function goToLink(){
        window.location.href= "game.html"
    }

