let vocabularyObj;
let vocabularyKeys;
let vocabularyValues;

function preload() {
    vocabularyObj = loadJSON('../../../Games/SpellingBee/Vocabulary/Animal.json');
}

function setup() {
    vocabularyKeys = Object.keys(vocabularyObj);
    vocabularyValues = Object.values(vocabularyObj);
    console.log(vocabularyKeys);
    console.log(vocabularyValues)
    console.log(vocabularyObj)
}