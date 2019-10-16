let txt;
let paragraph;

function preload() {
    txt = loadStrings('./test.txt');
}

function setup() {
    paragraph = txt[0].toLowerCase();
    console.log(paragraph);
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
