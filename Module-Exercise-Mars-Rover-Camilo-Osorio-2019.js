/*Camilo Osorio - Iron Hack - Oct 2019 - Github: Camilosorio*/

// Iteration 1 | The Rover Object
const rover = {
    destination: "N",
    x : 0,
    y : 0,
    // Iteration 5 |Tracking
    // property on the rover object that contains the coordinates of the places where it has been
    travelLog: [  ]
  };
  
  // Creation of map
  const grid = [
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
  ];
  
  // Iteration 2 | Turning the Rover
  
  // Function to turn to left the rover
  function turnLeft(rover) {
    switch(rover.destination) {
      case "N" :
        rover.destination = 'W'
        console.log('Was facing North now facing West')
        break;
        case "W" :
        rover.destination = 'S'
        console.log('Was facing West now facing Sud')
        break;
        case "S" :
        rover.destination = 'E'
        console.log('Was facing Sud now facing Est')
        break;
        case "E" :
        rover.destination = 'N'
        console.log('Was facing Est now facing North')
        break;
    }
    console.log("turnLeft was called!");
  }
  
  // Function to turn to right the rover
  function turnRight(rover){
    switch(rover.destination) {
      case "N" :
        rover.destination = 'E'
        console.log('Was facing North now facing Est')
        break;
        case "E" :
        rover.destination = 'S'
        console.log('Was facing Est now facing Sud')
        break;
        case "S" :
        rover.destination = 'W'
        console.log('Was facing Sud now facing West')
        break;
        case "W" :
        rover.destination = 'N'
        console.log('Was facing West now facing North')
        break;
    }
    console.log("turnLeft was called!");
  }
  
  //Iteration 3 | Moving the Rover
  
  // Function to move forward the rover
  
  // (Bonus Bonus 1 | Enforce Boundaries)
  // At some point, you may have accidentally run our rover off of the grid
  function moveForward(rover){
    tracking(rover);
    switch(rover.destination) {
      case "N" :
          if(rover.y > 0) {
            rover.y--;
        } else {
          console.log("Wrong direction, please make a correction.")
        }
        break;
        case "W" :
          if(rover.x > 0) {
              rover.x--;
            } else {
          console.log("Wrong direction, please make a correction.")
        }
        break;
        case "S" :
            if(rover.y < 9) {
              rover.y++;
            } else {
          console.log("Wrong direction, please make a correction.")
        }
        break;
        case "E" :
          if(rover.x < 9) {
            rover.x++;
          } else {
          console.log("Wrong direction, please make a correction.")
        }
        break;
         default: console.log("Wrong direction, please make a correction.");
        break;
    }
    tracking(rover);
    console.log(`MoveForward was called, current position x : ${rover.x} y: ${rover.y}`)
  }
  
  // Bonus 2 | Move Backward
  function moveBackward(rover){
    tracking(rover);
    switch(rover.destination) {
      case "N" :
          if(rover.y < 9) {
            rover.y++;
        } else {
          console.log("Wrong direction, please make a correction.")
        }
        break;
        case "W" :
          if(rover.x < 9) {
              rover.x++;
            } else {
          console.log("Wrong direction, please make a correction.")
        }
        break;
        case "S" :
            if(rover.y > 0) {
              rover.y--;
            } else {
          console.log("Wrong direction, please make a correction.")
        }
        break;
        case "E" :
          if(rover.x > 0) {
            rover.x--;
          } else {
          console.log("Wrong direction, please make a correction.")
        }
        break;
         default: console.log("Wrong direction, please make a correction.");
        break;
    }
    console.log(`BackForward was called, current position x : ${rover.x} y: ${rover.y}`)
  }
  
  //Iteration 4 | Commands 
  
  // Function to command the rover
  
  function commandRover(move, turn){
    
    let makeMove = move.split("");
    for(i = 0; i < makeMove.length; i++){
      switch(makeMove[i]) {
      case "f":
      moveForward(rover);
      break;
      case "b":
      moveBackward(rover);
      break;
      case "r":
      turnRight(rover);
      break;
      case "l":
      turnLeft(rover);
      break;
      // Bonus 3 | Validate Inputs
        default:
         console.log("Wrong command. Please choose a correct command.") 
    }
  } 
    }
  
  
  // Iteration 5 | Tracking 
  
  // Function to track the position
  
  function tracking(rover) { //need help: I can't figure out how to make the log work
    let a = { 
      x: "",
      y: "",
    }
    a.x = rover.x
    a.y = rover.y
    rover.travelLog.push(a);
    //console.log(`Rover travel log: x: ${rover.travelLog[0]}, y:${rover.travelLog[1]} `)
  }
  
  // Insert a command here to move o turn the rover
  commandRover("")