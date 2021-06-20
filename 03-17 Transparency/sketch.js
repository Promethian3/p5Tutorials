function setup() {
  // put setup code here
  let canv = createCanvas(480,120)
  canv.parent('canvas-box')
  noStroke();
}

function draw() {
  // put drawing code here
  let v = {
    red: [255,0,0,160],
    green: [0,255,0,160],
    blue: [0,0,255,160]
  }
  background(204, 226,225)
  fill(...v.red) // that 4th param is the transparency AKA alpha value
  ellipse(132,82,200,200)
  fill(...v.green)
  ellipse(228,-16,200,200)
  fill(...v.blue)
  ellipse(268,118,200,200)
}