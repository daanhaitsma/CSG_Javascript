function setup() {
    canvas = createCanvas(450,450);
    canvas.parent('processing');

    frameRate(5);
}

class Vis {
    x = 150;
    y = 150;

    teken() {
        fill('orange');
        circle(this.x, this.y, 35);
    }

    beweeg() {
        this.x += random(-10, 10);
        this.y += random(-10, 10);
    }
}

var vis1 = new Vis();
var vis2 = new Vis();

function draw() {
    background('blue');

    vis1.teken();
    vis1.beweeg();

    vis2.teken();
    vis2.beweeg();
}