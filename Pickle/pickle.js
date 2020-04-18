function setup(){

    createCanvas(windowWidth, windowHeight)
    var picklesFavorites = ["pizza", "pasta", "happiness", "wabbits", "bubbles", "giggles", "sunsets", "Isaiah"]

    var picklesList = 0;

    while(picklesList < picklesFavorites.length){
        text(picklesFavorites[picklesList], 100, 50 + picklesList * 50)
        picklesList++;
    }

    console.log(picklesFavorites[7])


























}



