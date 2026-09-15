const canvasSize = 450;

const waves = [
  {yMin: 160, yMax: 180, x: 10, y: 170, width: 200, direction: -1},
  {yMin: 170, yMax: 210, x: 50, y: 200, width: 400, direction: -1},
  {yMin: 190, yMax: 280, x: 20, y: 240, width: 120, direction: 1},
];

let sunY = 50;
const sunSpeed = 0.3;

function setup() {
  canvas = createCanvas(canvasSize,canvasSize);
  background('black');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  noStroke();

  let skyBlueLevel = 255 - ((sunY/canvasSize) * 255);
  
  fill([0, 0, skyBlueLevel]);
  rect(0, 0, canvasSize, 150);

  if (sunY < 500) {
    fill('orange');
    ellipse(canvasSize / 2, sunY, 50);

    sunY += sunSpeed;
  }
  
  fill('lightblue');
  rect(0, 150, canvasSize, 150);
  
  fill('yellow');
  rect(0, 300, canvasSize, 150);
  
  fill('white');
  waves.forEach(wave => {
    rect(wave.x, wave.y, wave.width, 5);

    wave.y += wave.direction;
    if (wave.y > wave.yMax || wave.y < wave.yMin) {
      wave.direction = -1 * wave.direction;
    }
  });
}