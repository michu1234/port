// PURPLE RAIN
var canvas;
var numbers = {
  w: 0,
  x: 0,
  y: 0,
  z: 0
}
var spotcol = {
  r: 250,
  g: 0,
  b: 6
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  background(37, 38, 39);
  fill(100, 38, 39, 1);
}

function draw() {
  ellipse(mouseX, mouseY, 300, 300);
  stroke(spotcol.r, spotcol.g, spotcol.b, numbers.w);
  spotcol.b = random(0, 160);
  // stroke(50);
  ellipse(numbers.x, numbers.y, numbers.z);
  ellipse(numbers.x * random(5), numbers.y * random(5), numbers.z);
  ellipse(numbers.x * random(5), numbers.y * random(5), numbers.z);
  ellipse(numbers.x * random(5), numbers.y * random(5), numbers.z);
  ellipse(numbers.x * random(5), numbers.y * random(5), numbers.z);
  ellipse(numbers.x * random(5), numbers.y * random(5), numbers.z);
  ellipse(numbers.x * random(5), numbers.y * random(5), numbers.z);
  ellipse(numbers.x * random(5), numbers.y * random(5), numbers.z);
  ellipse(numbers.x * random(5), numbers.y * random(5), numbers.z);
  numbers.w = random(100, 255);
  numbers.x = random(0, width);
  numbers.y = random(0, height);
  numbers.z = random(10, 50);

}

function mousePressed() {
  background(37, 38, 39);
  fill(spotcol.r, spotcol.g, spotcol.b, numbers.w);
  spotcol.r = 255;
  spotcol.g = 0;
  spotcol.b = 50;
  // stroke(50);
  ellipse(numbers.x, numbers.y, numbers.z);
  numbers.w = random(10, 20);
  numbers.x = random(0, width);
  numbers.y = random(0, height);
  numbers.z = random(10, 50);
}
