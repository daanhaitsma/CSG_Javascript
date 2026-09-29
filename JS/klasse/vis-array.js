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

var vissen = new Array();

vissen.push(new Vis(100, 100, 'yellow'));
vissen.push(new Vis(100, 200, 'orange'));
vissen.push(new Vis(300, 100, 'lightblue'));
vissen.push(new Vis(200, 300, 'green'));

function draw() {
    background('blue');

    for (var n = 0; n < vissen.length; n++) {
        vissen[n].beweeg();
        vissen[n].teken();
    }
}