let circles = [];
let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index', '-1'); // 將畫布放在最底層
  background('#d6ccc2');

  // 產生40個圓
  for (let i = 0; i < 40; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(50, 100),
      color: color(random(255), random(255), random(255)),
    });
  }
}

function draw() {
  background('#d6ccc2');
  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    let newSize = map(mouseX, 0, width, 10, 120);
    ellipse(circle.x, circle.y, newSize, newSize);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
