let vocabularyObj;
let vocabularyKeys;
let vocabularyValues;

function preload() {
    vocabularyObj = loadJSON('../../../Games/SpellingBee/Vocabulary/Food.json');
}

function setup() {
    vocabularyKeys = Object.keys(vocabularyObj);
    vocabularyValues = Object.values(vocabularyObj);
    let table = document.getElementById("mytable");
    let tbody = document.createElement('tbody');
    for (let index = 0; index < vocabularyKeys.length; index++) {
        let row = tbody.insertRow(-1);
        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        let cell2 = row.insertCell(2);
        cell0.innerHTML = `<p>${index + 1}</p>`;
        cell1.innerHTML = `<p>${vocabularyKeys[index]}</p>`;
        cell2.innerHTML = `<p>${vocabularyValues[index]}</p>`;
        table.append(tbody);
    }
}