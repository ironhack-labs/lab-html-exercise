// Cómo manipular elementos en el DOM
// En esta sección vamos a ver:

//  -  Cómo crear elementos
//  -  Cómo establecer el contenido innerHTML/texto de un elemento
//  -  Cómo añadir un elemento
//  -  Cómo insertar un elemento antes de otro
//  -  Cómo reemplazar un elemento hijo
//  -  Cómo eliminar un elemento hijo

// Cómo crear elementos
// El código en HTML con el ID de #parent muestra un elemento padre con 5 elementos hijos. Supongamos que queremos añadir otra etiqueta div con JavaScript. Definitivamente tendríamos que crear un nuevo elemento con el método createElement(), así:
const createElement = document.createElement("div");
console.log("createElemente tiene esta estructura: ");
console.log(createElement);

// Establecer algun texto mediante unos keys de innerHTML o innerTEXT
// createElement.innerHTML = "JS es demasiado cool!";
createElement.innerText = "JS es demasiado cool";
console.log(createElement);

// Como anexar elemento creado en js al doc de HTML
// apuntamos a algun elemento del dom que este en el body y vamos a usar un metodo appendCHILD!

// Version - un solo selector
// let parentElement = document
//   .querySelector("#parent")
//   .appendChild(createElement);
// Version - anidada
let parentElement2 = document
  .querySelector("#parent #firstchild")
  .appendChild(createElement);

// añadir clase mediante JS  - EJEMPLO 001
createElement.className = "ejemplo1";
console.log(createElement);

//* EJERCICIOS

// 1º - Crea un <p></p> dentro de un tag de tipo <div id="insert-p"></div>
// const createElementD = document.createElement("div");
// createElementD.setAttribute("id", "insert-p");
// document.querySelector("body").appendChild(s);
// const newElement = document.createElement("p");
// document.getElementById("insert-p").appendChild(newElement);

const createElementBut = document.createElement("button");
document.querySelector("body").appendChild(createElementBut);
createElementBut.textContent = 'Click here!';
const addFunction = () => createElementBut.classList.add("but");
createElementBut.addEventListener("click", addFunction);

const newElementP = document.createElement("p");
document.querySelector(".but").appendChild(newElementP);

// document.getElementsByClassName("but").appendChild(newElementP);
// newElementP.textContent = 'Texto insertado';





// 2º - Crea un <div id="nested"></div> desde código