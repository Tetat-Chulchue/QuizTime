//      ##########################
//      #                        #
//      # {Hand Crafted /w Love} #
//      #  {Shib@ & FkKasitin}   #
//      #                        #
//      ##########################

// ------------- Declare Variable ------------

let vocabularyObj;
let vocabulary;
let vocabularyLength;
let word;
let life;
let score;
let ans;
let translate;
let placeholder;
let placeholderIndex = 1;
let category = 'Animal'; // for testing purpose, pls remove this line when implement random category #Shib@

// ------------- P5's Function ---------------

function preload() {
    let url = './Vocabulary/' + category +'.json'
    vocabularyObj = loadJSON(url);
}

function setup() {
    life = 3;
    score = 0;
    vocabulary = Object.values(vocabularyObj);
    translate = Object.keys(vocabularyObj);
    vocabularyLength = vocabulary.length - 1;
    randomWord();
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
}

function draw() {
    background(color(150, 100, 255));
    ellipse(mouseX, mouseY, 50);
    fill(255, 255, 0);
    textSize(128); 
    text(word, 0, 0, windowWidth, windowHeight/2); // word display
    text(placeholder, 0, windowHeight/2, windowWidth, windowHeight/2); // display answer

}

function keyPressed() {
    console.log(keyCode, key)
    if (keyCode === BACKSPACE && placeholderIndex != 1) {
        placeholderIndex -= 3;
        placeholder = placeholder.replaceAt(placeholderIndex, '_')
    } else if (keyCode === ENTER) {
        console.log();
        return 0;
    } else if (0) {
        console.log();
        return 0;
    } else if (placeholderIndex) {
        placeholder = placeholder.replaceAt(placeholderIndex, key)
        placeholderIndex += 3;
    }
}

// -------------- My Function --------------

function randomWord() {
    let wordIndex = Math.floor(Math.random() * vocabularyLength);
    let wordDummie = _.remove(vocabulary, function(w) {
        return w === vocabulary[wordIndex];
    })
    ans = translate[wordIndex];
    word = wordDummie[0];
    console.log(word, ans)
    vocabularyLength = vocabulary.length;
    placeholder = answerPlaceholder();

}

function answerPlaceholder() {
    let placeholder = '';
    for (let i = 0; i < ans.length; i++) {
        placeholder += ' _ ';
    }
    return placeholder;
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}
