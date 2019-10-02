function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    //var word = "HELLO"
}

function draw() {
    background(color(150, 100, 255));
    ellipse(mouseX, mouseY, 50);
    fill(255, 0, 0);
    textSize(128);
    text('HELLO', 0, 0, windowWidth, windowHeight/2);


}

class Tile {
    constructor(data) {
        this.data = data;
        this.width = 100;
        this.height = 100;
    }
}