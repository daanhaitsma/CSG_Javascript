

function setup() {
  canvas = createCanvas(1000, 500);
  canvas.parent('processing');
}

function draw() {
    background('lightgreen');

    frameRate(2);
    teller.teken();
}

var teller = { 
    // attribuut
    waarde: 0,

    // methode
    teken() {
        textSize(80);
        textAlign(CENTER);
        text('0', width/2, height/2);
    },
};



















































