// == UTILS ==

async function getTxt(url) { // Fetches a text document & returns content
    let response = await fetch(url);
    let data = await response.text();
    return data;
}

const getRandomArrayElement = array => { // Selects random element from an array
    return array[Math.floor(Math.random() * array.length)];
}

async function fetchNPM(keyword) { // Performs query on NPM Registry & returns data 
    let response = await fetch(`http://npmsearch.com/query?q=${keyword}`);
    let data = await response.json();
    return data;
}

const assignPage = url => { //Redirects to given url
    location.assign(url);
};


// == FUNCTIONALITY ==

// Adds NPM Expansions functionality, three-word thingies that randomly appear in the header of the npmjs.com
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

// Adds search bar functionality.
const searchBarHTML = document.getElementById("search-npm-packages");
const npmQueryContainer = document.getElementById("npm-search-results-container");

searchBarHTML.addEventListener("keyup", e => {
    let result = [];
    
    fetchNPM(searchBarHTML.value).then(data => {
        npmQueryContainer.innerHTML = "";

        results = data.results.slice(0, 10);
        results.forEach(result => {
            
            let resultContainer = document.createElement("a");
            resultContainer.classList.add("rs-container", "border-b-sm", "p-3", "py-3")
            resultContainer.setAttribute("href", `https://www.npmjs.com/package/${result.name[0]}`);

            let rsMeta = document.createElement("div");
            rsMeta.classList.add("rs-meta");

            let p = document.createElement("p");
        
            if(results.indexOf(result) < 5) {
                let h3 = document.createElement("h3");
                let rsVersion = document.createElement("div");
                rsVersion.classList.add("rs-version");
                let pVersion = document.createElement("p");

                h3.innerText = result.name[0];
                p.innerText = result.description[0];
                pVersion.innerText = result.version[0];

                rsVersion.prepend(pVersion);
                rsMeta.prepend(h3, p);

                resultContainer.prepend(rsMeta, rsVersion);
                npmQueryContainer.prepend(resultContainer);

            } else {
                p.innerText = result.name[0];
                rsMeta.prepend(p);
                resultContainer.prepend(rsMeta);
                npmQueryContainer.append(resultContainer);
            }
        })
    })
});

// Adds search button functionality.
function searchPkg() {
    if(searchBarHTML.value !== "") {
        location.assign(`https://www.npmjs.com/search?q=${searchBarHTML.value}`); 
    }
  }