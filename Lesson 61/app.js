const heads = 1
const tails = 0
let headsCount = 0
let counter = 0
let target = 12

function setup(){
    createCanvas(windowWidth, windowHeight)


    while(headsCount < target){

    let flip = Math.floor(random(2))

    counter = counter + 1

        if( flip === heads){
        console.log(heads)
        headsCount = headsCount + 1
        }else{
        console.log(tails)

        headsCount = 0
      }

} 
console.log("Heads Streak: " + headsCount)
console.log("Total Flips: " + counter)
}

