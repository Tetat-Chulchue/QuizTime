// ------------- Declare Variable ------------
let question;
let questionKey;
let questionObj;
let questionIndex;
let life = 3;
let score = 0;
let correctSound;
let wrongSound;
let path;
let setQuestion;
let font;
// -------------------------------------------

// ------------- P5's Function ---------------
function preload() {
    path = window.location.search
    setQuestion = path.split('=')[1]
    let url = './Question/' + setQuestion + '.json';
    questionObj = loadJSON(url);
    correctSound = loadSound('./asset/correct.wav');
    wrongSound = loadSound('./asset/wrong.wav');
    font = loadFont('./asset/Kanit-ExtraLight.ttf');
}

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');

    if (life === 3) {
        questionKey = Object.keys(questionObj);
    }

    randomQuestion();

    button_1 = createButton(questionObj[question][0].choice[0], '0');
    button_1.id('button_1');
    button_1.mousePressed(check);

    button_2 = createButton(questionObj[question][0].choice[1], '1');
    button_2.id('button_2');
    button_2.mousePressed(check);

    button_3 = createButton(questionObj[question][0].choice[2], '2');
    button_3.id('button_3');
    button_3.mousePressed(check);

    button_4 = createButton(questionObj[question][0].choice[3], '3');
    button_4.id('button_4');
    button_4.mousePressed(check);

    fill(255,255,255);
    textFont(font);
    textAlign(CENTER, CENTER);
}

function draw() {
    resizeCanvas(windowWidth, windowHeight);

    background(0,212,255);

    if (life <= 0 || questionKey.length === 0) {
        button_1.remove();
        button_2.remove();
        button_3.remove();
        button_4.remove();

        textSize(60);
        text("Congratulations!", windowWidth / 2, (windowHeight / 2) - 100);
        text("Your score is : " + score, windowWidth / 2, (windowHeight / 2) + 100);
        if (life === 0) {
            life = -1;
            sweetUI(score, setQuestion);
        }
    } else {
        textSize(40);
        text("Life : " + life, windowWidth - 90, 80);
        text("Score : " + score, windowWidth - 110, 30);

        textSize(60);
        text(question, windowWidth / 2, (windowHeight / 2) / 2);
    }

    button_1.position(15, windowHeight / 2);
    button_1.style('background-color', '#f0134d');
    button_1.style('color', '#ffffff');
    button_1.style('font-size', '55px');
    button_1.style('font-family', 'btn_Kanit-ExtraLight');
    button_1.style('border', 'none');
    button_1.size((windowWidth / 2) - 25, ((windowHeight / 2) / 2) - 15);

    button_2.position((windowWidth / 2) + 10, windowHeight / 2);
    button_2.style('background-color', '#3e64ff');
    button_2.style('color', '#ffffff');
    button_2.style('font-size', '55px');
    button_2.style('font-family', 'btn_Kanit-ExtraLight');
    button_2.style('border', 'none');
    button_2.size((windowWidth / 2) - 25, ((windowHeight / 2) / 2) - 15);

    button_3.position(15, (windowHeight * 1.5) / 2);
    button_3.style('background-color', '#ffd369');
    button_3.style('color', '#ffffff');
    button_3.style('font-size', '55px');
    button_3.style('font-family', 'btn_Kanit-ExtraLight');
    button_3.style('border', 'none');
    button_3.size((windowWidth / 2) - 25, ((windowHeight / 2) / 2) - 15);

    button_4.position((windowWidth / 2) + 10, (windowHeight * 1.5) / 2);
    button_4.style('background-color', '#5eb7b7');
    button_4.style('color', '#ffffff');
    button_4.style('font-size', '55px');
    button_4.style('font-family', 'btn_Kanit-ExtraLight');
    button_4.style('border', 'none');
    button_4.size((windowWidth / 2) - 25, ((windowHeight / 2) / 2) - 15);
}
// -------------------------------------------

// -------------- My Function ----------------
function randomQuestion() {
    questionIndex = Math.floor(Math.random() * questionKey.length);
    question = questionKey[questionIndex];
}

function check() {
    if (questionObj[question][0].choice[0] === questionObj[question][1].check) {
        score += 10;
        correctSound.play();
    } else {
        life -= 1;
        wrongSound.play();
    }

    del();
}

function check_1() {
    if (questionObj[question][0].choice[1] === questionObj[question][1].check) {
        score += 10;
        correctSound.play();
    } else {
        life -= 1;
         wrongSound.play();
    }
    del();
}

function check_2() {
    if (questionObj[question][0].choice[2] === questionObj[question][1].check) {
        score += 10;
        correctSound.play();
    } else {
        life -= 1;
        wrongSound.play();
    }
    del();
}

function check_3() {
    if (questionObj[question][0].choice[3] === questionObj[question][1].check) {
        score += 10;
        correctSound.play();
    } else {
        life -= 1;
        wrongSound.play();
    }
    del();
}

function del() {
    questionKey.splice(questionIndex, 1);
    button_1.remove();
    button_2.remove();
    button_3.remove();
    button_4.remove();
    setup();
}
// -------------------------------------------
