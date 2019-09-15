
async function getTxt(url) {
    let response = await fetch(url);
    let data = await response.text();
    return data;
}

const getRandomArrayElement = array => {
    return array[Math.floor(Math.random() * array.length)];
}


window.addEventListener("DOMContentLoaded", e => {
    let expansionsHTML = document.getElementById("npm-expansions-txt");

    let txtArr = [];
    getTxt("/assets/npm-expansions/expansions.txt").then(data => {
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
});