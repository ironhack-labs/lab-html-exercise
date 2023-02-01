let navTexts = [
    "Neanderthal Painting Monet",
    "Non Printable Material",
    "Neti Pot Manufacturer",
    "Newlywed Party Monsters",
    "Node Package Manager",
    "Nasal Piercings Manipulator"
]

let text = document.getElementById("changingLink")

let count = 0

function changeText(){
    text.innerText = navTexts[count]
}

changeText()

text.addEventListener("click", () => {
    if(count == 5){
        count = 0
    } else count ++;
    changeText()
})