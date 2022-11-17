
// Crea una función que reciba tres argumentos: una string name, un numero age y un objeto livesIn. Ten en cuenta que el objeto livesIn será un objeto que contiene dos keys: livesInCity y livesInTown. Las dos tendrán un valor booleánico y siempre será una falsa y la otra verdadera.
// Crea una función tipo flecha que retorne una string parecida a "Diego tiene 30 años y vive en la ciudad".Según la key que sea true en el argumento livesIn vamos a retornar vive en la ciudad o vive en un pueblo.

console.log(miFuncion("Jarko", 25, {livesInCity: true, livesInTown: false}));
console.log(miFuncion("Martina", 42, {livesInCity: false, livesInTown: true}));
console.log(miFuncion("Laia", 78, { livesInCity: false, livesInTown: true }));

function myFunc(firstName, age, livesIn){
    console.log(`${firstName} ${age} ${livesIn.livesInCity} ${livesIn.livesInTown}`)
}
let firstName = "Clara";
let age = 21;
myFunc(firstName, age, livesIn);

//Crea una función tipo flecha que retorne una string parecida a "Diego tiene 30 años y vive en la ciudad".Según la key que sea true en el argumento livesIn vamos a retornar vive en la ciudad o vive en un pueblo.
livesIn = {
    livesInCity: "true",
    livesInTown: "false",
} 


const bio4 = (firstName, age, livesIn) => {
    let city;
    
    switch (true) {
        case livesIn.livesInCity === true:
            city = "ciudad";
            break;
        case livesIn.livesInTown === true:
            city = "pueblo";
            break;
        default:
            break;
    }
    return `${firstName} ${age} ${city}`;
};


let bio = (firstName, age, livesIn) => {
    let result;

    if (livesIn.livesInCity === true) {
        result = "vive en la ciudad";
        return `${firstName} ${age} ${result}`;
    }
    else {
        result = "vive en un pueblo";
        return `${firstName} ${age} ${result}`;
    }
};

console.log(bio4("Jarko", 25, {livesInCity: true, livesInTown: false}));
console.log(bio4("Martina", 42, {livesInCity: false, livesInTown: true}));
console.log(bio4("Laia", 78, { livesInCity: false, livesInTown: true }));