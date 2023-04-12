let favnum = 22;

let baseUrl = "http://numbersapi.com";

// 1
async function numFact1() {
    let data = await $.getJson(`${baseUrl}/${favnum}?json`);
    console.log(data);
}
numFact1();

// 2
const favnums = [10, 22, 31]
async function numFact2() {
    let data = await $.getJson(`${baseUrl}/${favnums}?json`);
    console.log(data);
}
numFact2();

// 3
async function numFact3() {
    let facts = await Promise.all(
        Array.from({ length 4}, () => $.getJSON(`${baseURL}/${favNumber}?json`))
    );
    facts.forEach(data => {
        $('body').append(`<p>${data.text}</p>`);
    });
}
numFacts3();

