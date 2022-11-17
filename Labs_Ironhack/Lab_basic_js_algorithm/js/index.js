console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1;
let hacker2;

hacker1 = "Marisa";
hacker2 = "Marisa";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
function lenghtHack(hacker1, hacker2) {
    if (hacker1.length > hacker2.length) 
        console.log(`the driver has the longest name, it has ${hacker1.length} characters`);    
    else if (hacker1.length < hacker2.length)
        console.log(`the navigator has the longest name, it has ${hacker2.length} characters`);
    else
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

lenghtHack(hacker1, hacker2);

// Iteration 3: Loops 
function toupperHack(hacker) {
    let arr = [];
    let i;
    i = 0;
    while (i < hacker.length)
    {
      if (i === (hacker.length - 1))
      {
        arr.push(hacker[i].toUpperCase());
        console.log(arr.join(""));
      }
        arr.push(hacker[i].toUpperCase());
        arr.push(" ");
       i++;
    }
  }
  
  let hacker;
  hacker = "Rigoberta";
    toupperHack(hacker);

function reverseString(hacker){
  let splitString = hacker.split("");
  let reverseArr = splitString.reverse();
  let joinArr = reverseArr.join("");
  console.log(joinArr);
}

let hacker = "hola";
reverseString(hacker);


let hacker1 = "Driver";
let hacker2 = "Hola";

const compareValue = hacker1.localeCompare(hacker2);
 
if(compareValue === -1)
  console.log("The driver's name goes first");
if (compareValue == 1)
  console.log("Yo, the navigator goes first definitely.");
if (compareValue == 0)
  console.log("What?! You both have the same name?");

//BONUS TIME-1
let p1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec malesuada ante libero, vel mollis urna volutpat vitae.In in orci mi.Quisque sodales, ex ut pharetra scelerisque, sem nulla gravida augue, vel accumsan metus arcu at velit.Nulla ";

let p2 = "u ornare leo.Cras vel luctus risus, quis interdum enim.Donec ullamcorper porta maximus.Maecenas nec tristique justo, ac molestie est.Praesent vel mauris vitae lacus ornare ultrices.Morbi id leo vestibulum metus pretium sagittis.Aliquam vestibulum justo nisl, suscipit sollicitudin libero semper et.Proin iaculis diam non arcu fermentum, nec ultrices nulla maximus";

let p3 ="u ornare leo.Cras vel luctus risus, quis interdum enim.Donec ullamcorper porta maximus.Maecenas nec tristique justo, ac molestie est. slacus ornare ultrices.Morbi id leo vestibulum metus pm sagittis.Aliquam vestibulum justo nisl, suscipit sollicitudin libero semper et.Proin iaculis diam non arcu fermentum, nec ultrices nulla maximus";

console.log(`El length del primer párrafo ${p1.length}`);
console.log(`El length del segundo párrafo ${p2.length}`);
console.log(`El length del tercer párrafo ${p3.length}`);

function latinWord(p) {
    let count = 0;
    for (let i = 0; i < p.length; i++) {
        if (p[i] === 'e' && p[i + 1] === 't')
            count++;
    }
    console.log("La palabra 'et' la encontramos " + count + " veces");
}

p = p3;
latinWord(p);

//BONUS TIME-2
let phraseToCheck = "race, car";
phraseToCheck = phraseToCheck.toLowerCase();
phraseToCheck = phraseToCheck.replaceAll(/[ ,]/g, '');
let splitCheck = phraseToCheck.split("");
let reverseCheck = splitCheck.reverse();
let arrJoin = reverseCheck.join("");


let count = 0;
for (let i = 0; i < phraseToCheck.length; i++) {
    const compareValue = arrJoin.localeCompare(phraseToCheck);
    if (compareValue == 0) {
        count++;
        if (i === phraseToCheck.length - 1)
            console.log("Is a palindrome!");   
    }
    else {
        console.log("Is not a palindrome!")
        break;
    }
}

