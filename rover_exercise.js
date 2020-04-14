let rover = {
	direction : "N",
	x : 5,
	y : 5
}


function turnLeft(rover){
	actual_dir = rover.direction;
	switch (actual_dir){
		case 'N':
			rover.direction = "W";
			break;
		case 'W':
			rover.direction = "S";
			break;
		case 'E':
			rover.direction = "N";
			break;
		case 'S':
			rover.direction = "E";
			break;

	}
}

function turnRight(rover){
	actual_dir = rover.direction;
	switch (actual_dir){
		case 'N':
			rover.direction = "E";
			break;
		case 'W':
			rover.direction = "N";
			break;
		case 'E':
			rover.direction = "S";
			break;
		case 'S':
			rover.direction = "W";
			break;

	}
}

function moveForward(rover){
	actual_dir = rover.direction;
	var isOutX = false;
	var isOutY = false;

	if (rover.x == 9 || rover.x == 0) isOutX = true;
	else if (rover.y == 9 || rover.y == 0) isOutY = true;
	switch (actual_dir){
		case 'N':
			if (isOutY) console.log("You can't place player outside of the board!");
			else rover.y = rover.y -1;
			console.log(`Rover moving to the Nort, in position: ${rover.x}, ${rover.y}  `)
			break;
		case 'W':
			if (isOutX) console.log("You can't place player outside of the board!");
			else rover.x = rover.x -1;
			console.log(`Rover moving to the Nort, in position: ${rover.x}, ${rover.y}  `)
			break;
		case 'E':
			if (isOutX) console.log("You can't place player outside of the board!");
			else rover.x = rover.x +1;
			console.log(`Rover moving to the Nort, in position: ${rover.x}, ${rover.y}  `)
			break;

		case 'S':
			if (isOutY) console.log("You can't place player outside of the board!");
			else rover.y = rover.y +1;
			console.log(`Rover moving to the Nort, in position: ${rover.x}, ${rover.y}  `)

			break;

	}
}

function moveBackward(rover){
	actual_dir = rover.direction;
	var isOutX = false;
	var isOutY = false;

	if (rover.x == 9 || rover.x == 0) isOutX = true;
	else if (rover.y == 9 || rover.y == 0) isOutY = true;
	switch (actual_dir){
		case 'N':
			if (isOutY) console.log("You can't place player outside of the board!");
			else rover.y = rover.y +1;
			console.log(`Rover moving to the Nort, in position: ${rover.x}, ${rover.y}  `)
			break;
		case 'W':
			if (isOutX) console.log("You can't place player outside of the board!");
			else rover.x = rover.x +1;
			console.log(`Rover moving to the Nort, in position: ${rover.x}, ${rover.y}  `)
			break;
		case 'E':
			if (isOutX) console.log("You can't place player outside of the board!");
			else rover.x = rover.x -1;
			console.log(`Rover moving to the Nort, in position: ${rover.x}, ${rover.y}  `)
			break;

		case 'S':
			if (isOutY) console.log("You can't place player outside of the board!");
			else rover.y = rover.y -1;
			console.log(`Rover moving to the Nort, in position: ${rover.x}, ${rover.y}  `)

			break;

	}
}

function command(rover, orders) {
  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];
    switch (order) {
      case 'l': // left
        turnLeft(rover, order);
        break;
      case 'r': // right
        turnRight(rover, order);
        break;
      case 'f': // forward
        moveForward(rover, order);
        break;
      case 'b': // backward
        moveBackward(rover, order);
        break;
      default:
      	console.log("Incorrect command");
      	break;
    }

  }
}

command(rover, 'aaaa');

