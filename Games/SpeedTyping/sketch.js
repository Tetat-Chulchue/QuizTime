// ------------ Declare Variables --------------

let txt;                    // paragraph loaded fram p5
let paragraph;              // paragraph string
let paragraphIndex = 0;     // current index  of paragraph
let charArray;              // array of span
let timer = 1;              // current time
let end = false           // current game state

// -------------- P5's Functions --------------

function preload() {
    txt = loadStrings('./test.txt');
}

function draw() {
    background(999);
    textAlign(RIGHT, CENTER);
    textSize(30);
    text('Time: ', width / 2, height / 2);
    textAlign(LEFT, CENTER)
    text(timer, width / 2, height / 2);
    if ((frameCount % 60 == 0 && timer > 0) && !end) {
        timer++;
        console.log(timer);
    }
}

function setup() {
    createCanvas(200, 60);
    paragraph = txt[0].toLowerCase();
    console.log(paragraph);
    charArray = document.getElementsByTagName('span');
    write();
}

function keyPressed() {
    if (!end) {
        if (key.toLowerCase() === charArray[paragraphIndex].innerHTML) {
            charArray[paragraphIndex].id = 'correct';
        } else {
            charArray[paragraphIndex].id = 'wrong';
        }
    }
    paragraphIndex++;
    if (paragraphIndex + 1 > paragraph.length) {
        endGame();
    }
}

// ------------- My Functions -----------

function write() {
    let main = document.createElement('p');
    for (let i = 0; i < paragraph.length; i++) {
        let span = document.createElement('span');
        let char = paragraph[i];
        span.innerHTML = char;
        main.appendChild(span);
    }
    document.body.appendChild(main);
}

function endGame() {
    end = true;
    console.log(0);
}