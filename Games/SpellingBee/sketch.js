let vocabularyObj;
let vocabulary;
let vocabularyLength;
let word;
let category = 'Animal' // for testing purpose, pls remove this line when implement random category #Shib@
let state = 'IDLE'


function preload() {
    let url = './Vocabulary/' + category +'.json'
    vocabularyObj = loadJSON(url);
}

function setup() {
    console.log(vocabularyObj)
    vocabulary = Object.values(vocabularyObj);
    vocabularyLength = vocabulary.length - 1;
    randomWord();
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
}

function draw() {
    //word = randomWord();
    background(color(150, 100, 255));
    ellipse(mouseX, mouseY, 50);
    fill(255, 255, 0);
    textSize(128); 
    text(word, 0, 0, windowWidth, windowHeight/2); // todo: input word

}


function randomWord() {
    let wordIndex = Math.floor(Math.random() * vocabularyLength);
    console.log('index',wordIndex);
    let wordDummie = _.remove(vocabulary, function(w) {
        return w === vocabulary[wordIndex];
    })
    word = wordDummie[0];
    vocabularyLength = vocabulary.length;

}
