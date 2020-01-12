const rover = {direction : 'N',
  x:0, 
  y:0, 
  travelLog: [{x:0,y:0}]};               // Rover Object Goes Here
                                   // ======================




// ======================
                                          // TURN LEFT
function turnLeft(rover, command){
   if (command === 'l'){
     
  console.log("turnLeft was called!");
  switch(rover.direction){
     case 'N':
    rover.direction = 'W';
    break;
     case 'W':
    rover.direction = 'S';
    break;
     case 'S':
    rover.direction = 'E';
    break;
    case 'E':
    rover.direction = 'N';
    break;
      
      
}
     console.log(rover.direction);
}
}
                                            //TURN RIGHT
//=====================================
function turnRight(rover, command){                    
  if (command === 'r'){
  
  console.log("turnRight was called!");
  switch(rover.direction){
     case 'N':
    rover.direction = 'E';
    break;
     case 'E':
    rover.direction = 'S';
    break;
     case 'S':
    rover.direction = 'W';
    break;
    case 'W':
    rover.direction = 'N';
    break;
      
      
    
  }  
     console.log(rover.direction);
  }
}
//=======================================
function moveForward(rover, command){                // MOVE FORWARD
  if (command === 'f'){
  console.log("moveForward was called");
  
  
  if (rover.direction === 'N' && rover.y > 0){
     rover.y--;
    } else {console.log('you cant place rover outside 10x10 grid')}
  if (rover.direction === 'W' && rover.x > 0) {
          rover.x--;
    } else {console.log('you cant place rover outside 10x10 grid')}
  if (rover.direction === 'S' && rover.y < 9) {
      rover.y++;
    } else {console.log('you cant place rover outside 10x10 grid')}
  if (rover.direction === 'E' && rover.x < 9){
      rover.x++;
    } else {console.log('you cant place rover outside 10x10 grid')}
   
    console.log(`rover has position: x=${rover.x}, y=${rover.y}`);

    let newPosition = {x: rover.x, y: rover.y};

    rover.travelLog.push(newPosition);  
  }  
 
}

//==============================================
function command(rover, orders){                 // CALLER FUNCTION
 
  for (let i = 0; i < orders.length; i++){
    let order = orders[i];
    switch(order){
      case "r": // right
        turnRight(rover, order);
        break;
      case "l": // left
        turnLeft(rover, order);
        break;  
      case "f": // forward
        moveForward(rover, order);
        break; 
      
    }
  }
  console.log(rover.travelLog);
}


//======================================== COMMANDS
command(rover, 'rffrfflfrfffffffffff');