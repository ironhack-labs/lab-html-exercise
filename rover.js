// Rover Object Goes Here
// ======================

rover={
  direction:"N",
  x:2,
  y:2,
  travelLog:[{x:0,y:0}] 
};


// ======================
function turnLeft(rover){
  if(rover.direction==="N"){
    console.log("Rover is now facing West");}
  if(rover.direction==="S"){ 
     console.log("Rover is now facing East");}
  if(rover.direction==="E"){
    console.log("Rover is now facing North");}
  if(rover.direction==="W"){
    console.log("Rover is now facing South");}
  console.log("turnLeft was called!");
}
function turnRight(rover){
  if(rover.direction==="N"){
    console.log("Rover is now facing East");}
  if(rover.direction==="S"){
    console.log("Rover is now facing West");}
  if(rover.direction==="E"){
    console.log("Rover is now facing South");}
  if(rover.direction==="W"){
    console.log("Rover is now facing North");}
  console.log("turnRight was called!");
}

function moveForward(rover){
  if(rover.x>=0 && rover.x<10 && rover.y>=0 && rover.y<10 ){
  if(rover.direction==="W"){
    rover.x--; }
  if(rover.direction==="N"){
    rover.y--; }
  if(rover.direction==="S"){
    rover.y++; }
  if(rover.direction==="E"){
    rover.x++; }
  console.log("moveForward was called");
  console.log("Rover is now facing",rover.direction);
 //console.log(`rover has position: x=${rover.x}, y=${rover.y}`);
      let newPosition = {x: rover.x, y: rover.y};
      rover.travelLog.push(newPosition);
  }
  else{
    console.log("out of the map");
  }
}

function moveBackward(rover){
  if(rover.x>=0 && rover.x<10 && rover.y>=0 && rover.y<10 ){
  if(rover.direction==="W"){
    rover.x++; }
  if(rover.direction==="N"){
    rover.y++; }
  if(rover.direction==="S"){
    rover.y--; }
  if(rover.direction==="E"){
    rover.x--; }
  console.log("moveBackward was called");
  console.log("Rover is now facing",rover.direction);
      let newPosition = {x: rover.x, y: rover.y};
      rover.travelLog.push(newPosition);
  }
  else{
    console.log("out of the map");
  }
}

function command(rover, orders){
 
  for (let i = 0; i < orders.length; i++){
    let order = orders[i];
    switch(order){
      case "l": // left
        turnLeft(rover);
        break;
      case "r": // right
        turnRight(rover);
        break;  
      case "f": // forward
        moveForward(rover);
        break; 
      case "b":
        moveBackward(rover); //backward
        break;
      default:
        console.log("Enter valid direction");
        break;
    }
  }
  console.log(rover.travelLog);
}
command(rover, "lrffbbbfffzzyyfff");




