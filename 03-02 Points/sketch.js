let canv = null;

function setup() {
  // put setup code here
  canv = createCanvas(480, 120)
  canv.parent('canvas-box')
}

function draw() {
  // put drawing code here

  // setting up variables
  let [h, w] = [canv.elt.height-1, canv.elt.width-1];
  let [ch, cw] = [ (h/2), (w/2) ];
  background(204)

  // starting example point
  point(240,60)

  // example putting it in the corners
  point(0,0)
  point(0, h)
  point(w, h)
  point(w, 0)

  // example putting it in the center
  point(cw, ch)

  // example putting it in a horizontal, vertical, and diagonal line
  const [w3,h3] = [(w/4)*3, (h/4)*3];
  const m = (h3-ch)/(w3-cw)

  for(let x=cw; x <= w3; x++) {
    point(x,ch);
  }
  for(let y=ch; y <= h3; y++) {
    point(cw,y);
  }
  for(let x=cw; x <= w3; x++) {
    point(x,m*x)
  }
}