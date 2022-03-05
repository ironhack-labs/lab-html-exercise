const npm = [
    "new phone models", "nukem's possible manifestation", 
    "nature's particle manager", "numerous pulsating mutations",
    "Nashville plays music", "Ne pas, manager", "Node packaged masterfully",
    "NPM's personal messenger", 'Neolithic prancing minotaurs', 'Nicer perusal method',
    'Nested parenthetical madness', 'Never pet mermaids', "Nutritious Pomegranate Muffins",
    'Nascent palesticine materialist', 'Nightmare prom memories', 'Nonstick pancake maker',
    "Nigel's personal motorcade"

]

let puns = document.getElementById("puns")
let index = 0

puns.addEventListener('click', function(){
    index++
    puns.textContent = npm[index]
    if (index === npm.length){
        index = 0
        puns.textContent = npm[index]
    }
})