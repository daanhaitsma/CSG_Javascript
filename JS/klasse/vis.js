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

var vis1 = {
    x: 100,
    y: 100,
    kleur: 'orange',
    
    teken() {
        fill(this.kleur);
        circle(this.x, this.y, 35);
    },

    beweeg() {
        this.x += random(-10, 10);
        this.y += random(-10, 10);
    }
};

var vis2 = {
    x: 50,
    y: 400,
    kleur: 'orange',
    
    teken() {
        fill(this.kleur);
        circle(this.x, this.y, 35);
    },
    
    beweeg() {
        this.x += random(-10, 10);
        this.y += random(-10, 10);
    }
};

function draw() {
    background('blue');

    fill('brown');
    circle(mouseX, mouseY, 35);

    vis1.beweeg();
    vis1.teken();

    vis2.beweeg();
    vis2.teken();
}