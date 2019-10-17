let txt;
let paragraph;
let paragraphIndex = 0;
let isLetter = /^[a-z]$/;
let charArray;
let timer = 1;
let timerStatus = true;

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
    if ((frameCount % 60 == 0 && timer > 0) && timerStatus === true) {
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

function keyPressed() {
    if (key.toLowerCase() === charArray[paragraphIndex].innerHTML) {
        charArray[paragraphIndex].id = 'correct';
    } else if (key === ENTER){
        timerStatus = false;
        wordPerMinute();
    } else {
        charArray[paragraphIndex].id = 'wrong';
    }
    paragraphIndex++;
}

// function wordPerMinute() {
//     let str = paragraph.toString();
//     let numWord = str.split(" ");
//     let countWord = numWord.length;
//     console.log(countWord)
// }