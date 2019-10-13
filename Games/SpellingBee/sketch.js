//      ##########################
//      #                        #
//      #   {Hand Crafted /w ♥}  #
//      #   {Shib@ & FkKasitin}  #
//      #                        #
//      ##########################

// ------------- Declare Variable ------------

let vocabularyObj;          // Current vocabulary JSON
let vocabularyLength;       // Length of current vocabulary JSONz
let vocabularyKey;          // Array of current vocabulary JSON key
let vocabulary;
let word;                   // Current word
let ans;                    // Current answer
let checkAnswer = '';       // Store user's answer
let life;                   // Remaining life (Not implements yet)
let score = 0;              // Current score
let placeholder;            // String that shown as answer placeholder 
let placeholderIndex = 1;   // number to keep track of current index of placeholder
let category = 'Animal';    // for testing purpose, pls remove this line when implement random category #Shib@
let isLetter = /^[a-z]$/;   // regex for testing input is single English character


// ------------- P5's Function ---------------

function preload() {
    let url = './Vocabulary/' + category +'.json'
    vocabularyObj = loadJSON(url);
}

function setup() {
    life = 3;
    score = 0;
    vocabulary = Object.values(vocabularyObj);
    vocabularyKey = Object.keys(vocabularyObj);
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
    if (keyCode === BACKSPACE) {
        placeholder = answerPlaceholder();
        checkAnswer = '';
        placeholderIndex = 1;
    } else if (keyCode === ENTER) {
        submit()
    } else if (placeholderIndex && isLetter.test(key.toLowerCase())) {
        placeholder = placeholder.replaceAt(placeholderIndex, key);
        placeholderIndex += 3;
        checkAnswer += key;
        console.log(checkAnswer);
    }
}

// -------------- My Function --------------

function randomWord() {
    let keyIndex = Math.floor(Math.random() * vocabularyLength);
    let key = vocabularyKey[keyIndex];
    word = vocabularyObj[key];
    ans = (_.invert(vocabularyObj))[word]
    _.remove(vocabularyKey, (n) => { return n === key });
    delete vocabularyObj[key];
    console.log(word, ans)
    vocabularyLength--;
    placeholder = answerPlaceholder();

}

function answerPlaceholder() {
    let placeholder = '';
    for (let i = 0; i < ans.length; i++) {
        placeholder += ' _ ';
    }
    return placeholder;
}

function submit() {
    if(checkAnswer === ans){
        alert("You are pretty good!"); //Fucking MetalGear Reference
        score += 100;
        console.log('Your score is:', score);
        checkAnswer = "";
        placeholderIndex = 1;
        randomWord();
    }else{
        alert("Nahh");
    }
    return 0;
}

String.prototype.replaceAt = function(index, replacement) { 
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length); // Some random function from Stackoverflow, don't bother it.
}
