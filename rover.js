

const grid = [
    ["R", "", "O", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "O", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "O", "", "", "", "", "", "", "O", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "R"]]


const rover1 = {
  direction: "N",
  position : {
  x: 0,
  y: 0
  },
  travelLog: []
}

const rover2 = {
    direction: "S",
    position : {
    x: 9,
    y: 9
    },
    travelLog: []
  }

function turnLeft(rover) {
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
}

function turnRight(rover) {
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
}

function moveForward(rover) {
  console.log("moveForward was called");
  switch (rover.direction) {
    case "N":
      if (rover.position.x === 0 && rover.position.y === 0) {
          return console.log("NOT VALID!!! Turn right or go backward");
      } else if (rover.position.x > 0 && rover.position.x < 9 && rover.position.y === 0 ) {
          return console.log("NOT VALID!!! Turn left, right or go backward");
      } else if (rover.position.x == 9 && rover.position.y === 0 ) {
          return console.log("NOT VALID!!! Turn left or go backward");
      } else { 
          if (grid[rover.position.y - 1][rover.position.x] === "") {
          grid[rover.position.y][rover.position.x] = "";    
          rover.position.y --;
          grid[rover.position.y][rover.position.x] = "R";   
          rover.travelLog.push([rover.position.x, rover.position.y]);
          console.log(`x${rover.position.x}y${rover.position.y}`);
          break;
          } else { 
              return console.log("ALLERT!!!COLLISION DANGER!!!");
          }
      }
    case "E":
         if (rover.position.x === 9 && rover.position.y === 0) {
          return console.log("NOT VALID!!! Turn right or go backward");
      } else if (rover.position.y > 0 && rover.position.y < 9 && rover.position.x === 0 ) {
          return console.log("NOT VALID!!! Turn left, right or backward");
      } else if (rover.position.x == 9 && rover.position.y === 9 ) {
          return console.log("NOT VALID!!! Turn left or go backward");
      } else { 
          if (grid[rover.position.y][rover.position.x + 1] === "") {
          grid[rover.position.y][rover.position.x] = ""; 
          rover.position.x ++;
          grid[rover.position.y][rover.position.x] = "R";
          rover.travelLog.push([rover.position.x, rover.position.y]);
          console.log(`x${rover.position.x}y${rover.position.y}`);
        break;
        } else { 
            return console.log("ALLERT!!!COLLISION DANGER!!!");
      }
    }
    case "S":
         if (rover.position.x === 9 && rover.position.y === 9) {
          return console.log("NOT VALID!!! Turn right or go backwards");
      } else if (rover.position.x > 0 && rover.position.x < 9 && rover.position.y === 9 ) {
          return console.log("NOT VALID!!! Turn left, right or go backwards");
      } else if (rover.position.x == 0 && rover.position.y === 9 ) {
          return console.log("NOT VALID!!! Turn left or go backwards");
      } else { 
          if (grid[rover.position.y + 1][rover.position.x] === "") {
          grid[rover.position.y][rover.position.x] = ""; 
          rover.position.y ++;
          grid[rover.position.y][rover.position.x] = "R";
          rover.travelLog.push([rover.position.x, rover.position.y]);
          console.log(`x${rover.position.x}y${rover.position.y}`);
        break;
        } else { 
            return console.log("ALLERT!!!COLLISION DANGER!!!");
      }
    }
    case "W":
         if (rover.position.x === 0 && rover.position.y === 9) {
          return console.log("NOT VALID!!! Turn right or go backwards");
      } else if (rover.position.y > 0 && rover.position.y < 9 && rover.position.x === 0 ) {
          return console.log("NOT VALID!!! Turn left, right or go backwards");
      } else if (rover.position.x === 0 && rover.position.y === 0 ) {
          return console.log("NOT VALID!!! Turn left or go backwards");
      } else { 
          if (grid[rover.position.y][rover.position.x - 1] === "") {
          grid[rover.position.y][rover.position.x] = "";     
          rover.position.x --;
          grid[rover.position.y][rover.position.x] = "R";
          rover.travelLog.push([rover.position.x, rover.position.y]);
          console.log(`x${rover.position.x}y${rover.position.y}`);
        break;
        } else { 
            return console.log("ALLERT!!!COLLISION DANGER!!!");
  }
}
}
}

function moveBackward(rover) {
    console.log("moveBackward was called");
    switch (rover.direction) {
        case "N":
          if (rover.position.x === 9 && rover.position.y === 9) {
            return console.log("NOT VALID!!! Turn left or go forward");
          } else if (rover.position.x > 0 && rover.position.x < 9 && rover.position.y === 9 ) {
              return console.log("NOT VALID!!! Turn left, right or go forward");
          } else if (rover.position.x == 0 && rover.position.y === 9 ) {
              return console.log("NOT VALID!!! Turn right or go forward");
          } else { 
              if (grid[rover.position.y + 1][rover.position.x] === "") {
              grid[rover.position.y][rover.position.x] = "";      
              rover.position.y ++;
              grid[rover.position.y][rover.position.x] = "R";
              rover.travelLog.push([rover.position.x, rover.position.y]);
              console.log(`x${rover.position.x}y${rover.position.y}`);
            break;
            } else { 
                return console.log("ALLERT!!!COLLISION DANGER!!!");
          }
        }
        case "E":
             if (rover.position.x === 0 && rover.position.y === 9) {
              return console.log("NOT VALID!!! Turn left or go forward");
          } else if (rover.position.y > 0 && rover.position.y < 9 && rover.position.x === 0 ) {
              return console.log("NOT VALID!!! Turn left, right or forward");
          } else if (rover.position.x == 0 && rover.position.y === 0 ) {
              return console.log("NOT VALID!!! Turn right or go forward");
          } else { 
              if (grid[rover.position.y][rover.position.x - 1] === "") {
              grid[rover.position.y][rover.position.x] = ""; 
              rover.position.x --;
              grid[rover.position.y][rover.position.x] = "R";
              rover.travelLog.push([rover.position.x, rover.position.y]);
              console.log(`x${rover.position.x}y${rover.position.y}`);
            break;
            } else { 
                return console.log("ALLERT!!!COLLISION DANGER!!!");
          }
        }
        case "S":
             if (rover.position.x === 0 && rover.position.y === 0) {
              return console.log("NOT VALID!!! Turn left or go forward");
          } else if (rover.position.x > 0 && rover.position.x < 9 && rover.position.y === 0 ) {
              return console.log("NOT VALID!!! Turn left, right or go forward");
          } else if (rover.position.x == 9 && rover.position.y === 0 ) {
              return console.log("NOT VALID!!! Turn right or go forward");
          } else { 
              if (grid[rover.position.y - 1][rover.position.x] === "") {
              grid[rover.position.y][rover.position.x] = ""; 
              rover.position.y --;
              grid[rover.position.y][rover.position.x] = "R";
              rover.travelLog.push([rover.position.x, rover.position.y]);
              console.log(`x${rover.position.x}y${rover.position.y}`);
            break;
            } else { 
                return console.log("ALLERT!!!COLLISION DANGER!!!");
          }
        }
        case "W":
             if (rover.position.x === 9 && rover.position.y === 0) {
              return console.log("NOT VALID!!! Turn left or go forward");
          } else if (rover.position.y > 0 && rover.position.y < 9 && rover.position.x === 9 ) {
              return console.log("NOT VALID!!! Turn left, right or go forward");
          } else if (rover.position.x === 9 && rover.position.y === 9 ) {
              return console.log("NOT VALID!!! Turn right or go forward");
          } else { 
              if (grid[rover.position.y][rover.position.x + 1] === "") {
              grid[rover.position.y][rover.position.x] = ""; 
              rover.position.x ++;
              grid[rover.position.y][rover.position.x] = "R";
              rover.travelLog.push([rover.position.x, rover.position.y]);
              console.log(`x${rover.position.x}y${rover.position.y}`);
            break;
            } else { 
                return console.log("ALLERT!!!COLLISION DANGER!!!");
      }
    }
  }
}

function commands(command, rover) {
  for (comm of command) {
      if (comm === "f"||
          comm === "b"||
          comm === "r"||
          comm === "l") {
        switch(comm) {
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
        }
      } else console.log("INVALID COMMAND!!! Please select a valid command : f = forward; b = backward; r = right; l = left ")
    } 
}



