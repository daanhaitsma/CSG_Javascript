function setup() {
    canvas = createCanvas(450,450);
    canvas.parent('processing');

    frameRate(5);
}

class Vis {
    constructor(x, y, kleur) {
        this.x = x;
        this.y = y;
        this.kleur = kleur;
    }
    
    teken() {
        fill(this.kleur);
        circle(this.x, this.y, 35);
    };

    beweeg() {
        this.x += random(-10, 10);
        this.y += random(-10, 10);
    };
}

var vis = new Vis(100 , 100, 'orange');

var vis2 = new Vis(200, 200, 'yellow');

function draw() {
    background('blue');

    vis.teken();
    vis.beweeg();

    vis2.teken();
    vis2.beweeg();
}