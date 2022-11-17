console.log("Ignorance of the header")
console.log(document);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all); 
// console.log((document.all[8].innerHTML) =);
console.table(["Berlin", "Barcelona", "Amsterdam", "Uk"]);
console.table(["Chic", "Mark Ronson", "Eart, Wind & Fire", "Kool & The Gang", "Commodores"]);

template literals
console.log("User drinks alcohol: " + `${personalDetails.drinkAlcohol}`);

let bookArray = [
        {
                bookName: "Fall of giants",
                genre: "Historic Novel",
                author: "Ke n follet",
                year: 2010,
                isbn: 0330460552,
            },
            {
                    bookName: "The physician",
                    genre: "Novel",
                    author: "Noah Gordon",
                    year: 1986,
                    isbn: 9780449214268,
                },
                {
                        bookName: "Wild years",
                        genre: "Novel",
                        author: "William Finnegan",
                        year: 2008,
                        isbn: 0099865282,
                    }
                // ];
                console.log(`My favourite book is ${bookArray[0].bookName}`)
                
const personalDetails = {
    firstName: "Clara",
    lastName: "Ballester",
    cityLived: ["Oporto", "Barcelona", "Tossa de Mar"],
    age: 21,
    dob: "2 december 2000",
    drinkAlcohol: false,
}

let hobbies;
let cont;
cont = 1;
function changeHobbies(hobbies){
    if (cont == 1)
      return hobbies = "el surf";
    if (cont === 2)
       return hobbies = "el piano";
    if (cont === 3)
        return hobbies = "la guitarra";
     if (cont === 4)
        return hobbies = "el deporte";
    if (cont === 5)
        return hobbies = "la programación";
}

while (cont <= 5) {
    console.log(`Hola mi nombre es ${personalDetails.firstName} ${personalDetails.lastName} tengo ${personalDetails.age} años y me gusta mucho ${changeHobbies(hobbies)}`);
    cont++;
}

const number = prompt("Enter your age:")

function cinePrice() {
    if (age <= 5)
        console.log("Free entrance");
    else if (age < 15 && age > 5) {
        console.log("You get 20% discount on the price")
    }
    else if (age >= 15 && age <= 60)
        console.log("The price has no discount");
    else
        console.log("The price has 40% discount");
}
