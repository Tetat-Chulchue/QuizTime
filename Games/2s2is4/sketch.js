// ------------- Declare Variable ------------
let question;
let questionKey;
let questionObj;
let questionIndex;
let life;
let score;
let correctSound;
let wrongSound;
// -------------------------------------------

// ------------- P5's Function ---------------
function preload() {
    let url = 'Question.json';
    questionObj = loadJSON(url);
    correctSound = loadSound('./asset/correct.wav');
    wrongSound = loadSound('./asset/wrong.wav');
}

function setup() {
    life = 3;
    score = 0;

    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');

    button_1 = createButton('+');
    button_1.mousePressed(checkPlus);

    button_2 = createButton('-');
    button_2.mousePressed(checkMinus);

    button_3 = createButton('×');
    button_3.mousePressed(checkMultiply);

    button_4 = createButton('÷');
    button_4.mousePressed(checkDivide);

    fill(0);
    textSize(40);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);

    questionKey = Object.keys(questionObj);
    randomQuestion();
}

function draw() {
    resizeCanvas(windowWidth, windowHeight);

    background(155);

    button_1.position(0, windowHeight / 2);
    button_1.style('background-color', '#ff4d4d');
    button_1.style('font-size', '40px');
    button_1.style('font-weight', 'bold');
    button_1.size(windowWidth / 2, (windowHeight / 2) / 2);

    button_2.position(windowWidth / 2, windowHeight / 2);
    button_2.style('background-color', '#00ff00');
    button_2.style('font-size', '40px');
    button_2.style('font-weight', 'bold');
    button_2.size(windowWidth / 2, (windowHeight / 2) / 2);

    button_3.position(0, (windowHeight * 1.5) / 2);
    button_3.style('background-color', '#ffff00');
    button_3.style('font-size', '40px');
    button_3.style('font-weight', 'bold');
    button_3.size(windowWidth / 2, (windowHeight / 2) / 2);

    button_4.position(windowWidth / 2, (windowHeight * 1.5) / 2);
    button_4.style('background-color', '#6666ff');
    button_4.style('font-size', '40px');
    button_4.style('font-weight', 'bold');
    button_4.size(windowWidth / 2, (windowHeight / 2) / 2);


    text("Life : " + life, 90, 50);
    text("Score : " + score, windowWidth - 120, 50);
    text(question, windowWidth / 2, (windowHeight / 2) / 2);
}
// -------------------------------------------

// -------------- My Function ----------------
function randomQuestion() {
    questionIndex = Math.floor(Math.random() * questionKey.length);
    if (questionKey[questionIndex] === null) {
        randomQuestion();
    } else {
        question = questionKey[questionIndex];
    }
}

function checkPlus() {
    if (questionObj[question] === "+") {
        score += 1;
        correctSound.play();
    } else {
        life -= 1;
        wrongSound.play();
    }
    delete questionKey[questionIndex];
    randomQuestion();
}

function checkMinus() {
    if (questionObj[question] === "-") {
        score += 1;
        correctSound.play();
    } else {
        life -= 1;
        wrongSound.play();
    }
    delete questionKey[questionIndex];
    randomQuestion();
}

function checkMultiply() {
    if (questionObj[question] === "*") {
        score += 1;
        correctSound.play();
    } else {
        life -= 1;
        wrongSound.play();
    }
    delete questionKey[questionIndex];
    randomQuestion();
}

function checkDivide() {
    if (questionObj[question] === "/") {
        score += 1;
        correctSound.play();
    } else {
        life -= 1;
        wrongSound.play();
    }
    delete questionKey[questionIndex];
    randomQuestion();
}
// -------------------------------------------