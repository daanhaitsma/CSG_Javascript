function setup() {
    canvas = createCanvas(450,450);
    canvas.parent('processing');

    frameRate(5);
}

class Vis {
    x = null;
    y = null;
    kleur = null;

    constructor(x, y, kleur) {
        this.x = x;
        this.y = y;
        this.kleur = kleur;
    }

    teken() {
        fill(this.kleur);
        circle(this.x, this.y, 35);
    }

    beweeg() {
        this.x += random(-10, 10);
        this.y += random(-10, 10);
    }
}

var vis1 = new Vis(150, 150, 'orange');
var vis2 = new Vis(300, 300, 'yellow');

function draw() {
    background('blue');

    vis1.teken();
    vis1.beweeg();

    vis2.teken();
    vis2.beweeg();
}