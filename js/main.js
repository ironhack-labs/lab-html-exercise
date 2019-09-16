async function getTxt(url) {
    let response = await fetch(url);
    let data = await response.text();
    return data;
}

const getRandomArrayElement = array => {
    return array[Math.floor(Math.random() * array.length)];
}

async function fetchNPM(keyword) {
    let response = await fetch(`http://npmsearch.com/query?q=${keyword}`);
    let data = await response.json();
    return data;
}

const expansionsHTML = document.getElementById("npm-expansions-txt");
let txtArr = [];

getTxt("./assets/npm-expansions/expansions.txt").then(data => {
    txtArr = data.split("\r\n");
    let item = getRandomArrayElement(txtArr);
    expansionsHTML.innerText = item;

});

expansionsHTML.addEventListener("click", e => {
    if(txtArr.length > 0) {
        let item = getRandomArrayElement(txtArr);
        expansionsHTML.innerText = item;
    }
});




const searchBarHTML = document.getElementById("search-npm-packages");
const npmQueryContainer = document.getElementById("npm-search-results-container");

searchBarHTML.addEventListener("keyup", e => {
    let result = [];
    fetchNPM(searchBarHTML.value).then(data => {
        results = data.results.slice(0, 10);
        results.forEach(result => {
            let h3 = document.createElement("h3");
            let p = document.createElement("p");
            let rsMeta = document.createElement("")

            if(results.indexOf(result) < 5) {

            }
        })
        
    })
});