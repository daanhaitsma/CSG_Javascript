function setup() {
    canvas = createCanvas(450,450);
    canvas.parent('processing');
}

function draw() {
    background('lightblue');

    for (var n = 0; n < 5; n++) {
        circle((n+1) * 60, 50, 50);
    }

    textFont('Courier New');
    textSize(24);
    const teksten = [
        "Canvas breedte:  450",
        "Canvas hoogte:   450",
        "Cirkels diameter: 50",
        "Cirkels y:        50",
        "Cirkel 1 x:       60",
        "Cirkel 2 x:      120",
        "Cirkel 3 x:      180",
        "Cirkel 4 x:      240",
        "Cirkel 5 x:      300",
    ];
    for (var t = 0; t < teksten.length; t++) {
        text(teksten[t], 50, 130 + (t * 35));
    }
}
