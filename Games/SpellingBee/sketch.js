//      ##########################
//      #                        #
//      #   {Hand Crafted /w ♥}  #
//      #   {Shib@ & FkKasitin}  #
//      #                        #
//      ##########################

// ------------- Declare Variable ------------

let vocabularyObj;          // Current vocabulary JSON
let vocabularyLength;       // Length of current vocabulary JSON
let vocabularyKey;          // Array of current vocabulary JSON keys
let vocabulary;             // Array of current vocabulary JSON values
let word;                   // Current word
let ans;                    // Current answer
let checkAnswer = '';       // Store user's answer
let life;                   // Remaining life
let score;                  // Current score
let placeholder;            // String that shown as answer placeholder 
let placeholderIndex = 1;   // number to keep track of current index of placeholder
let isLetter = /^[a-z]$/;   // regex for testing input is single English character
let isEnd = false;          // Store game state
let category;               // for testing purpose, pls remove this line when implement random category #Shib@
let correctSound;           // Store correct sfx
let wrongSound;             // Store worng sfx

let path = window.location.search

// ------------- P5's Function ---------------

function preload() {
    category = path.split('=')[1]
    console.log(category)
    let url = './Vocabulary/' + category +'.json'
    vocabularyObj = loadJSON(url);
    correctSound = loadSound('./asset/correct.wav')
    wrongSound = loadSound('./asset/wrong.wav')
    console.log(path)
}

function setup() {
    life = 3;
    score = 0;
    vocabulary = Object.values(vocabularyObj);
    vocabularyKey = Object.keys(vocabularyObj);
    vocabularyLength = vocabulary.length - 1;
    textStyle(BOLD);
    randomWord();
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(color(150, 100, 255));
    fill(255, 255, 0);
    textSize(50);
    textAlign(RIGHT);
    text('Score: ' + score, 0, 0, windowWidth, windowHeight * (1 / 12));
    textSize(128);
    textAlign(CENTER, CENTER);
    text(word, 0, 0, windowWidth, windowHeight / 2); // word display
    text(placeholder, 0, windowHeight / 2, windowWidth, windowHeight / 2); // display answer

}

function keyPressed() {
    if (keyCode === BACKSPACE && !isEnd) {
        placeholder = answerPlaceholder();
        checkAnswer = '';
        placeholderIndex = 1;
    } else if (keyCode === ENTER && !isEnd) {
        submit()
    } else if (placeholderIndex < (placeholder.length) && isLetter.test(key.toLowerCase()) && !isEnd) {
        placeholder = placeholder.replaceAt(placeholderIndex, key);
        placeholderIndex += 3;
        checkAnswer += key;
    }
}

// -------------- My Function --------------

function randomWord() {
    if (Object.keys(vocabularyObj).length === 0) {
        endGame();
        return 0;
    }
    let keyIndex = Math.floor(Math.random() * vocabularyLength);
    let key = vocabularyKey[keyIndex];
    word = vocabularyObj[key];
    ans = (_.invert(vocabularyObj))[word]
    _.remove(vocabularyKey, (n) => { return n === key });
    delete vocabularyObj[key];
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
    if (checkAnswer === ans) {
        correctSound.play();
        score += 100;
    } else {
        wrongSound.play();
        life -= 1
        if (life <= 0) {
            endGame()
            return 0;
        }
    }
    checkAnswer = "";
    placeholderIndex = 1;
    randomWord();
}

function endGame() {
    word = 'Congratulations!'
    placeholder = 'Your score is : ' + score;
    isEnd = true;
    let data = {};
    data[name] = score;
    var blob = new Blob([data], { type: "json" });
    saveAs(blob, "score.json");
}

String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length); // Some random function from Stackoverflow, don't bother it.
}