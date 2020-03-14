// Rover Object Goes Here
// ======================

const rover = { 
    direction: 'N',
    position: { X:0, Y:0},
    path: [{X:0, Y:0}]
  };
  
  //console.log(rover.position.X)
  
  let facing = rover.direction;
  
  if (facing === 'W')
     {console.log("Rover is now facing West")}
  else if (facing === 'S') 
     {console.log("Rover is now facing South")}
  else if (facing === 'E')
     {console.log("Rover is now facing East")}
  else if (facing === 'N')
     { console.log("Rover is now facing North")}
  else{ console.log("Undefined direction")}
  
  /*  switch (rover) {
      case rover.direction === 'W':Rover is now facing South
        console.log("Rover is now facing West")
      case rover.direction === 'S':
        console.log("Rover is now facing South")
      case rover.direction === 'E':
        console.log("Rover is now facing East")
    }
  */
  
  function moveForward(rover, facing){
   if(rover.position.Y >= 0 && rover.position.Y <= 9 && rover.position.X >= 0 && rover.position.X <= 9){ 
    if (facing === 'W')
       {rover.position.X--;
         }
    else if (facing === 'N')
       {rover.position.Y--;
         }
    else if (facing === 'S')
       {rover.position.Y++;
         }
    else if (facing === 'E')
       {rover.position.X++;
         }
    else {console.log("Rover no esta en movimiento.  X=" + rover.position.X + " Y=" + rover.position.Y)}
  
     let newPosition = {x: rover.position.X, y: rover.position.Y};
        rover.path.push(newPosition); 
   } else {console.log("You can't move The Rover outside the grid. X=" + rover.position.X + " Y=" + rover.position.Y)}
  }
  
  function command(rover, orders){
   
    for (let i = 0; i < orders.length; i++){
      let order = orders[i];
      switch(order){
        case "W": // left
          moveForward(rover, orders);
          console.log("Rover se mueve hacia el oeste. X=" + rover.position.X + " Y=" + rover.position.Y);
          break;
        case "E": // right
          moveForward(rover, orders);
          console.log("Rover se mueve hacia el norte. X=" + rover.position.X  + " Y=" + rover.position.Y);
          break;  
        case "N": // up
          moveForward(rover, orders);
          console.log("Rover se mueve hacia el norte. X=" + rover.position.X + " Y=" + rover.position.Y);
          break; 
        case "S": // down
          moveForward(rover, orders);
          console.log("Rover se mueve hacia el sur. X=" + rover.position.X + " Y=" + rover.position.Y);
          break;
      }
    }
    console.log(rover.path);
  }
  
  command(rover, "WESNWNS");
  
  
  //console.log(rover.path)
  
  
  
  // ======================
  /*function turnLeft(rover){
  
       console.log("turnLeft was called!") }    
  
  
  
  function turnRight(rover){
    console.log("turnRight was called!")
  }
  
  function moveForward(rover){
    console.log("moveForward was called")
  }
  
  */