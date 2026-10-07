function setup() {
    canvas = createCanvas(450,450);
    canvas.parent('processing');

    frameRate(5)
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

function draw() {
    background('blue');

    const vissen = [
        new Vis(10, 100, 'orange'),
        new Vis(100, 200, 'yellow'),
        new Vis(350, 300, 'lightblue'),
        new Vis(120, 400, 'magenta'),
        new Vis(300, 400, 'red'),
    ];
    for (var i = 0; i < vissen.length; i++) {
        vissen[i].beweeg();
        vissen[i].teken();
    }
}
