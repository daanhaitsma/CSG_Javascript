function setup() {
    canvas = createCanvas(450,450);
    canvas.parent('processing');

    frameRate(5);
}

class Vis {
    x = null;
    y = null;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    teken() {
        fill('orange');
        circle(this.x, this.y, 35);
    }

    beweeg() {
        this.x += random(-10, 10);
        this.y += random(-10, 10);
    }
}

var vis1 = new Vis(150, 150);
var vis2 = new Vis(300, 300);

function draw() {
    background('blue');

    vis1.teken();
    vis1.beweeg();

    vis2.teken();
    vis2.beweeg();
}