let world = ["__","__","__","__","__"]
let player = "1"
let playerPosition = 1
const prompt=require('prompt-sync')();


while (true) {
    const input=prompt('What is your action?');
    if (input === 'left'){
        playerPosition--
    }
    else if (input === 'right'){
        playerPosition++
    }
    
    world[playerPosition] = player  
    let printOut = world.join("")
    console.log(playerPosition)
}


