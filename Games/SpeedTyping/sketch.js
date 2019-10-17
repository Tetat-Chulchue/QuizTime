let txt;
let paragraph;
let paragraphIndex = 0;
let isLetter = /^[a-z]$/;
let charArray;

function preload() {
    txt = loadStrings('./test.txt');
}

function setup() {
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
    } else {
        charArray[paragraphIndex].id = 'wrong';
    }
    paragraphIndex++;
}
