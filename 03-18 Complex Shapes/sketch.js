function setup() {
  // put setup code here
  let canv = createCanvas(480,120)
  canv.parent('canvas-box')
}

function draw() {
  // put drawing code here
  background(204)
  // const points = [
  //   [180, 82],
  //   [207, 36],
  //   [214, 63],
  //   [407, 11],
  //   [412, 30],
  //   [219, 82],
  //   [226, 109]
  // ]
  // beginShape()
  // points.map(coords => vertex(...coords))
  // endShape(CLOSE)
  const [left, right, left_eyes, right_eyes] = [
    [
      [50, 120], [100, 90], [110, 60],
      [80, 20], [210, 60], [160, 80], 
      [200,90], [140, 100], [130, 120]
    ],
    [
      [370, 120], [360, 90], [290, 80],
      [340, 70], [280, 50], [420, 10],
      [390, 50], [410, 90], [460, 120]
    ],
    [ 155, 60, 8, 8 ],
    [ 345, 50, 10, 10 ]
  ]
  fill(255)
  beginShape()
  left.map(coords => vertex(...coords))
  endShape()
  fill(0)
  ellipse(...left_eyes)

  fill(255)
  beginShape()
  right.map(coords => vertex(...coords))
  endShape()
  fill(0)
  ellipse(...right_eyes)
}