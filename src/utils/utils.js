export async function fetchNPM(keyword) {
    let response = await fetch(`http://npmsearch.com/query?q=${keyword}&fields=name`);
    let data = await response.json();
    return data;
}


export async function getTxt(url) {
    let response = await fetch(url);
    let data = await response.text();
    return data;
}

export const getRandomArrayElement = array => {
    return array[Math.floor(Math.random() * array.length)];
}