const npm = [
    "new phone models", "nukem's possible manifestation", 
    "nature's particle manager", "numerous pulsating mutations",
    "Nashville plays music", "Ne pas, manager", "Node packaged masterfully"
]


let puns = document.getElementById("puns")

puns.addEventListener('click', function(){
    let randomIndex = Math.floor(Math.random() * npm.length)
    puns.textContent = npm[randomIndex]
    if (npm[randomIndex].textContent === puns.textContent){
        puns.textContent = npm[randomIndex +1]
    }
})