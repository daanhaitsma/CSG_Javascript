function setup() {
    canvas = createCanvas(450,450);
    canvas.parent('processing');
}

function draw() {
    background('lightblue');

    textFont('Courier New');
    textSize(24);
    const teksten = [
        "Dit",
        "zijn",
        "teksten",
        "uit",
        "een",
        "array",
    ];
    for (var i = 0; i < teksten.length; i++) {
        text(teksten[i], 50, 130 + (i * 35));
    }
}
