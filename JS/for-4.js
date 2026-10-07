class Vierkant {
    x = 0;
    breedte = 50;

    constructor(y, snelheid) {
        this.y = y;
        this.snelheid = snelheid;
    }

    beweeg() {
        this.x += this.snelheid;

        if (this.x <= 0 || this.x >= width - this.breedte) {
            this.snelheid *= -1;
        }
    }

    teken() {
        rect(this.x, this.y, this.breedte);
    }
}

var vierkanten = [];

function setup() {
    canvas = createCanvas(450, 450);
    canvas.parent('processing');

    vierkanten.push(new Vierkant(100, 1));
    vierkanten.push(new Vierkant(200, 2));
    vierkanten.push(new Vierkant(300, 3));
}

function draw() {
    background('lightblue');

    for (var i = 0; i < vierkanten.length; i++) {
        vierkanten[i].beweeg();
        vierkanten[i].teken();
    }
}
