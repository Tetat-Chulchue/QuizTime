var json;

let requestURL = './Easy.json';
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    console.log(request.readyState, request.status)
    if (request.readyState == 4 && request.status == 200) {
        json = JSON.parse(request.responseText);
        problem();
    }
};
request.open("GET", requestURL, true);
request.send();

var rd;
var word;

var b_1 = 0;
var b_2 = 0;
var b_3 = 0;
var b_4 = 0;

var button_1;
var button_2;
var button_3;
var button_4;


function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');

    button_1 = createButton('+');
    button_1.mousePressed(bt_1);

    button_2 = createButton('-');
    button_2.mousePressed(bt_2);

    button_3 = createButton('×');
    button_3.mousePressed(bt_3);

    button_4 = createButton('÷');
    button_4.mousePressed(bt_4);

    fill(0);
    textSize(50);
    textAlign(CENTER);
}

function draw() {
    background(155);

    if (b_1 == 1) {
        b_1 = 0;
        checkPlus();
        setTimeout(problem, 3000);
    } else if (b_2 == 1) {
        b_2 = 0;
        checkMinus();
        setTimeout(problem, 3000);
    } else if (b_3 == 1) {
        b_3 = 0;
        checkMultiply();
        setTimeout(problem, 3000);
    } else if (b_4 == 1) {
        b_4 = 0;
        checkDivide();
        setTimeout(problem, 3000);
    } else {
        text(word, windowWidth / 2, (windowHeight / 2) / 2);
    }

    // line(0, windowHeight / 2, windowWidth, windowHeight / 2);
    // line(0, (windowHeight * 1.5) / 2, windowWidth, (windowHeight * 1.5) / 2);
    // line(0, (windowHeight * 1.25) / 2, windowWidth, (windowHeight * 1.25) / 2);
    // line(0, (windowHeight * 1.75) / 2, windowWidth, (windowHeight * 1.75) / 2);

    // line(windowWidth / 2, 0, windowWidth / 2, windowHeight);
    // line((windowWidth * 0.5) / 2, 0, (windowWidth * 0.5) / 2, windowHeight);
    // line((windowWidth * 1.5) / 2, 0, (windowWidth * 1.5) / 2, windowHeight);

    button_1.position(0, windowHeight / 2);
    button_2.position(windowWidth / 2, windowHeight / 2);
    button_3.position(0, (windowHeight * 1.5) / 2);
    button_4.position(windowWidth / 2, (windowHeight * 1.5) / 2);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function problem() {
    rd = Math.floor(Math.random() * 6);
    word = json[rd].a[0];
}

function bt_1() {
    b_1 = 1;
}

function bt_2() {
    b_2 = 1;
}

function bt_3() {
    b_3 = 1;
}

function bt_4() {
    b_4 = 1;
}

function checkPlus() {
    if (json[rd].a[1] == '+') {
        word = 'Correct';
    } else {
        word = 'Incorrect';
    }
}

function checkMinus() {
    if (json[rd].a[1] == '-') {
        word = 'Correct';
    } else {
        word = 'Incorrect';
    }
}

function checkMultiply() {
    if (json[rd].a[1] == '*') {
        word = 'Correct';
    } else {
        word = 'Incorrect';
    }
}

function checkDivide() {
    if (json[rd].a[1] == '/') {
        word = 'Correct';
    } else {
        word = 'Incorrect';
    }
}