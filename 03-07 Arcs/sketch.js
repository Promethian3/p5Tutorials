function setup() {
  // put setup code here
  let canv = createCanvas(480,120)
  canv.parent('canvas-box')
}

function draw() {
  // put drawing code here
  background(204)
  arc(90,60,80,80,0, HALF_PI)
  arc(190,60,80,80,0,PI+HALF_PI)
  arc(290,60,80,80,PI,TWO_PI+HALF_PI)
  arc(390,60,80,80,QUARTER_PI,PI+QUARTER_PI)
}