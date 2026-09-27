function setup() {
    canvas = createCanvas(450,450);
    canvas.parent('processing');
}

function draw() {
    background('lightblue');

    rect(0, 50, 50, 50);
    rect(60, 50, 50, 50);
    rect(120, 50, 50, 50);
    rect(180, 50, 50, 50);
    rect(240, 50, 50, 50);
}
