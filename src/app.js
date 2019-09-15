
import { getTxt, getRandomArrayElement, fetchNPM } from "./utils/utils";

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
searchBarHTML.addEventListener("keyup", e => {
    fetchNPM(searchBarHTML.value).then(data => {
        console.log(data);
        
    })
});