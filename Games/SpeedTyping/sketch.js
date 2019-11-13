//      ##########################
//      #                        #
//      #   {Hand Crafted /w ♥}  #
//      #   {Shib@ & FkKasitin}  #
//      #                        #
//      ##########################

// ------------- Declare Variable ------------

let txt;                        // For JSON loading.
let paragraph;                  // Contain text from test.txt.
let paragraphIndex = 0;         // For loop character in paragraph.
let isLetter = /^[a-z]$/;       // regex for testing input is single English character
let charArray;                  // Contain all HTML span tag in Array.
let timer = 1;                  // For contain counting timer.
let charCorrect = 0;            // Counting correct character for accuracy.
let end = false                 // Show currently game status
let head = '';                  // Container for general data 01
let txt1 = '';                  // Container for general data 02
let txt2 = '';                  // Container for general data 03
let container1;                 // Container for general data 04
let container2;                 // Container for general data 05
let container3 = 'Time: ';      // Container for general data 06
let path;
let test_paragraph;

// ------------- P5's Function ---------------

function preload() {
    if (window.location.search != '') {
        path = window.location.search;
        let numParagraph = path.split('?set_=')[1];
        let loadParagraph = 'paragraph_' + numParagraph + '.txt';
        txt = loadStrings('./paragraph/' + loadParagraph);
        test_paragraph = 1;
    } else {
        let numParagraph = Math.floor(Math.random() * 10) + 1;
        let loadParagraph = 'paragraph_' + numParagraph + '.txt';
        txt = loadStrings('./paragraph/' + loadParagraph);
        test_paragraph = 0;
    }
}

function setup() {
    let cnv = createCanvas(100, 100);
    cnv.parent('sketch-holder');
    paragraph = txt[0].toLowerCase();
    write();
    charArray = document.getElementsByTagName('span');
}

function draw() {
    fill('#61CFBE');
    if(end == false){
        let c = circle(50, 50, 100);
    }
    fill('black');
    textAlign(CENTER);
    textSize(50);
    text(container3, 10000, 10000);
    textAlign(CENTER)
    if(end == false){
        text(timer, width / 2 , 65);
        if ((frameCount % 60 == 0 && timer > 0) && !end) {
            timer++;
            console.log(timer);
        }
    }else{
        text(timer, 1000000 , 1000000);
        if ((frameCount % 60 == 0 && timer > 0) && !end) {
            timer++;
            console.log(timer);
        }
    }
    
    textSize(80);
    text(head, 750, 100);
    textSize(70);
    text(txt2, 500, 300);
    text(txt1, 500, 600);
    text(container1, 1170, 300);
    text(container2, 1200, 600);
    // if (end == true){
    //     c.clear();
    // }
}

function keyPressed() {
    if (!end) {
        if (key.toLowerCase() === charArray[paragraphIndex].innerHTML) {
            charArray[paragraphIndex].id = 'correct';
            charCorrect++;
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

// -------------- My Function --------------

function endGame() {
    end = true;
    let str = paragraph.toString();
    let numWord = str.split(" ");
    let countWord = numWord.length;
    let wordPM = (countWord / (timer / 60));
    if(wordPM === Infinity){
        wordPM = 'It Time to STOP!!';
    }
    let accuracy = ((charCorrect / paragraph.length) * 100);
    if(accuracy < 0){
        accuracy = 0;
    }else if(accuracy === 100){
        accuracy = 'Perfect!!';
    }
    resizeCanvas(1500, 775);
    timer = '';
    container3 = '';
    head = 'Congratulations!';
    txt1 = 'Your Word per Minute is : ';
    txt2 = 'Your typing accuracy is : ';
    if(wordPM != 'Perfect!!'){
        container1 = nf(accuracy, 1, 2);
    }
    if(wordPM != 'It Time to STOP!!'){
        container2 = nf(wordPM, 1, 2);
    }
    if (test_paragraph == 0) {
        sweetUI(container2, container1);
    }
}

function back() {
    window.location.href = "../../Web/Game3/gameManu.html";
}