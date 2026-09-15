var woorden = [];
var aantalBeeldjes = 7;
var nummer = 0;

function preload() {
  woorden.push('dit');
  woorden.push('zijn');
  woorden.push('zeven');
  woorden.push('woorden');
  woorden.push('in');
  woorden.push('een');
  woorden.push('array');
}

function setup() {
  canvas = createCanvas(500,500);
  canvas.parent('processing');
  noStroke();
  frameRate(2);
  textFont("Georgia");
  textSize(64);
}

function draw() {
  background('lavender');

  text(woorden[nummer], 50, 100);
  nummer++;

  if (nummer == aantalBeeldjes) {
    nummer = 0;
  }
}