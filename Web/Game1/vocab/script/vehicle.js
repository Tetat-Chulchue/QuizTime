let vocabularyObj;
let vocabularyKeys;
let vocabularyValues;

function preload() {
    vocabularyObj = loadJSON('../../../Games/SpellingBee/Vocabulary/Vehicle.json');
}

function setup() {
    vocabularyKeys = Object.keys(vocabularyObj);
    vocabularyValues = Object.values(vocabularyObj);
    console.log(vocabularyKeys)
    console.log(vocabularyValues)
    console.log(vocabularyObj)
    let table = document.getElementById("mytable");
    for (let index = 0; index < vocabularyKeys.length; index++) {
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = vocabularyKeys[index];
        cell2.innerHTML = vocabularyValues[index];
    }
}