// ------------- Declare Variable ------------
let question;
let questionKey;
let questionObj;
let questionIndex;
let life = 3;
let score = 0;
let count = 0;
let correctSound;
let wrongSound;
// -------------------------------------------

// ------------- P5's Function ---------------
function preload() {
    let url = './Question/set_1.json';
    questionObj = loadJSON(url);
    correctSound = loadSound('./asset/correct.wav');
    wrongSound = loadSound('./asset/wrong.wav');
}

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');

    if (count === 0) {
        questionKey = Object.keys(questionObj);
    }

    randomQuestion();

    button_1 = createButton(questionObj[question][0].choice[0]);
    button_1.mousePressed(check_0);

    button_2 = createButton(questionObj[question][0].choice[1]);
    button_2.mousePressed(check_1);

    button_3 = createButton(questionObj[question][0].choice[2]);
    button_3.mousePressed(check_2);

    button_4 = createButton(questionObj[question][0].choice[3]);
    button_4.mousePressed(check_3);

    fill(0);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
}

function draw() {
    resizeCanvas(windowWidth, windowHeight);

    background(165, 42, 42);

    if (life === 0 || count === 10) {
        button_1.remove();
        button_2.remove();
        button_3.remove();
        button_4.remove();

        textSize(60);
        text("Congratulations!", windowWidth / 2, (windowHeight / 2) - 100);
        text("Your score is : " + score, windowWidth / 2, (windowHeight / 2) + 100);
    } else {
        textSize(40);
        text("Life : " + life, 90, 50);
        text("Score : " + score, windowWidth - 120, 50);

        textSize(60);
        text(question, windowWidth / 2, (windowHeight / 2) / 2);
    }

    button_1.position(0, windowHeight / 2);
    button_1.style('background-color', '#ff4d4d');
    button_1.style('font-size', '55px');
    button_1.style('font-weight', 'bold');
    button_1.size(windowWidth / 2, (windowHeight / 2) / 2);

    button_2.position(windowWidth / 2, windowHeight / 2);
    button_2.style('background-color', '#00ff00');
    button_2.style('font-size', '55px');
    button_2.style('font-weight', 'bold');
    button_2.size(windowWidth / 2, (windowHeight / 2) / 2);

    button_3.position(0, (windowHeight * 1.5) / 2);
    button_3.style('background-color', '#ffff00');
    button_3.style('font-size', '55px');
    button_3.style('font-weight', 'bold');
    button_3.size(windowWidth / 2, (windowHeight / 2) / 2);

    button_4.position(windowWidth / 2, (windowHeight * 1.5) / 2);
    button_4.style('background-color', '#6666ff');
    button_4.style('font-size', '55px');
    button_4.style('font-weight', 'bold');
    button_4.size(windowWidth / 2, (windowHeight / 2) / 2);
}
// -------------------------------------------

// -------------- My Function ----------------
function randomQuestion() {
    questionIndex = Math.floor(Math.random() * questionKey.length);
    question = questionKey[questionIndex];
}

function check_0() {
    if (questionObj[question][0].choice[0] === questionObj[question][1].chack) {
        score += 10;
        correctSound.play();
    } else {
        life -= 1;
        wrongSound.play();
    }
    count += 1;
    questionKey.splice(questionIndex, 1);
    button_1.remove();
    button_2.remove();
    button_3.remove();
    button_4.remove();
    setup();
}

function check_1() {
    if (questionObj[question][0].choice[1] === questionObj[question][1].chack) {
        score += 10;
        correctSound.play();
    } else {
        life -= 1;
        wrongSound.play();
    }
    count += 1;
    questionKey.splice(questionIndex, 1);
    button_1.remove();
    button_2.remove();
    button_3.remove();
    button_4.remove();
    setup();
}

function check_2() {
    if (questionObj[question][0].choice[2] === questionObj[question][1].chack) {
        score += 10;
        correctSound.play();
    } else {
        life -= 1;
        wrongSound.play();
    }
    count += 1;
    questionKey.splice(questionIndex, 1);
    button_1.remove();
    button_2.remove();
    button_3.remove();
    button_4.remove();
    setup();
}

function check_3() {
    if (questionObj[question][0].choice[3] === questionObj[question][1].chack) {
        score += 10;
        correctSound.play();
    } else {
        life -= 1;
        wrongSound.play();
    }
    count += 1;
    questionKey.splice(questionIndex, 1);
    button_1.remove();
    button_2.remove();
    button_3.remove();
    button_4.remove();
    setup();
}
// -------------------------------------------
