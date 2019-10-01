function setup() {
    createCanvas(windowWidth, windowHeight);

}

function draw() {
    background(color(150, 100, 255));
    ellipse(mouseX, mouseY, 50);
    fill(255, 0, 0);

}

class Tile {
    constructor(data) {
        this.data = data;
    }
}