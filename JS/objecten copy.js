function setup() {
  canvas = createCanvas(1000,500);
  canvas.parent('processing');
}

function draw() {
    if (teller.isHogerDanTien()) {
        background('lightgreen');
    } else {
        background('lightcoral');
    }

    frameRate(2);
    teller.teken();
}

var teller = { 
    // attribuut
    waarde: 1,

    // methode
    teken() {
        textSize(80);
        textAlign(CENTER);
        text(this.waarde, 500, 250);

        this.waarde += 1;
    },

    isHogerDanTien() {
        return this.waarde > 10;
    },

};
