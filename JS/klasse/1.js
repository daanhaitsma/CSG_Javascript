function setup() {
    canvas = createCanvas(450,450);
    canvas.parent('processing');

    frameRate(5);
}

var vis = {
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

    vis.teken();
    vis.beweeg();
}