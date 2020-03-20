// Rover Object Goes Here

let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};
// ======================

// ======================
function turnLeft(rover) {
  console.log("turnLeft was called!");

  switch (rover.direction) {
    //Rover está mirando hacia el norte y gira left=> Rover ahora está mirando hacia el oeste
    case "N":
      rover.direction = "W";
      break;

    //Rover está mirando hacia el oeste y gira left=> Rover ahora está mirando hacia el sur
    case "W":
      rover.direction = "S";
      break;

    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
  }
}

function turnRight(rover) {
  console.log("turnRight was called!");

  switch (rover.direction) {
    //Rover está mirando hacia el norte y gira right=> Rover ahora está mirando hacia el este .
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
  }
}

function moveForward(rover) {
  console.log("moveForward was called");

  switch (rover.direction) {
    //si el rover está mirando hacia el oeste y avanza, disminuiríamos el rover xen 1.
    case "W":
      if (rover.x > 0) {
        rover.x--;
      } else {
        console.log("You can't go further");
      }

      break;

    //Si el rover está mirando hacia el norte y avanza, disminuiríamos el rover yen 1.
    case "N":
      if (rover.y > 0) {
        rover.y--;
      } else {
        console.log("You can't go further");
      }

      break;

    //Si el rover mira al sur y se mueve hacia adelante, queremos aumentar y en 1.
    case "S":
      if (rover.y < 9) {
        rover.y++;
      } else {
        console.log("You can't go further");
      }

      break;

    //Si el rover mira al este y se mueve hacia adelante, queremos aumentar x en 1.
    case "E":
      if (rover.x < 9) {
        rover.x++;
      } else {
        console.log("You can't go further");
      }
  }

  rover.travelLog.push([rover.x, rover.y]);
  console.log("x=" + rover.x + " y=" + rover.y);
}

function moveBackward(rover) {
  console.log("moveBackward was called");

  switch (rover.direction) {
    case "W":
      if (rover.x < 9) {
        rover.x++;
      } else {
        console.log("You can't go further");
      }

      break;

    case "N":
      if (rover.y < 9) {
        rover.y++;
      } else {
        console.log("You can't go further");
      }

      break;

    case "S":
      if (rover.y > 0) {
        rover.y--;
      } else {
        console.log("You can't go further");
      }

      break;

    case "E":
      if (rover.x > 0) {
        rover.x--;
      } else {
        console.log("You can't go further");
      }
  }

  rover.travelLog.push([rover.x, rover.y]);
  console.log("x=" + rover.x + " y=" + rover.y);
}

function execute(commands) {
  for (var i = 0; i < commands.length; i++) {
    let caracter = commands.charAt(i);
    switch (caracter) {
      case "f":
        moveForward(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "b":
        moveBackward(rover);
    }
  }
}

let commands = "rbffurbffblfpbrffffffbbbb";

execute(commands);

console.log(rover.travelLog);
