function setup() {
    canvas = createCanvas(450,450);
    canvas.parent('processing');

    frameRate(5);
}

var vis1 = {
    x: 150,
    y: 150,

    teken() {
        fill('orange');
        rect(this.x, this.y, 35);
    },

    beweeg() {
        this.x += random(-10, 10);
        this.y += random(-10, 10);
    },
};

var vis2 = {
    x: 150,
    y: 150,

    teken() {
        fill('orange');
        circle(this.x, this.y, 35);
    },

    beweeg() {
        this.x += random(-10, 10);
        this.y += random(-10, 10);
    },
};

function draw() {
    background('blue');

    vis1.teken();
    vis1.beweeg();

    vis2.teken();
    vis2.beweeg();
}