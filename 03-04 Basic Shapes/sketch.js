function setup() {
  // put setup code here
  let canv = createCanvas(480,120)
  canv.parent('canvas-box')
}

function draw() {
  // put drawing code here
  background(204)
  quad(158, 55, 199, 14, 392, 66, 351, 107)
  triangle(347, 54, 392, 9, 392, 66)
  triangle(158, 55, 290, 91, 290, 112)
}