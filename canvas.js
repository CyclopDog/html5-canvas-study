function draw() {
  let smiley = makeCanvas()
  smiley.arc(75, 75, 70, 0, Math.PI * 2)
  smiley.moveTo(120, 80)
  smiley.arc(75, 80, 45, 0, Math.PI)
  smiley.fillStyle = "yellow"
  smiley.fill()
  smiley.stroke()
  smiley.beginPath()
  smiley.moveTo(55, 50)
  smiley.arc(50, 50, 5, 0, Math.PI * 2)
  smiley.moveTo(105, 50)
  smiley.arc(100, 50, 5, 0, Math.PI * 2)
  smiley.fillStyle = "black"
  smiley.fill()

  let heart = makeCanvas()
  heart.moveTo(75, 50)
  heart.bezierCurveTo(75, 10, 15, 10, 15, 50)
  heart.bezierCurveTo(10, 90, 75, 135, 75, 135)
  heart.bezierCurveTo(75, 135, 140, 90, 135, 50)
  heart.bezierCurveTo(135, 10, 75, 10, 75, 50)
  heart.fillStyle = "red"
  heart.fill()

  let pacman = makeCanvas()
  pacman.arc(75, 75, 70, Math.PI / 6, Math.PI * 1.80)
  pacman.lineTo(60, 75)
  pacman.fillStyle = "yellow"
  pacman.closePath()
  pacman.fill()
  pacman.stroke()

  let ghost = makeCanvas()
  ghost.arc(75, 65, 60, 0, Math.PI, true)
  ghost.lineTo(15, 145)
  ghost.lineTo(35, 125)
  ghost.lineTo(55, 145)
  ghost.lineTo(75, 125)
  ghost.lineTo(95, 145)
  ghost.lineTo(115, 125)
  ghost.lineTo(135, 145)
  ghost.lineTo(135, 65)
  ghost.fillStyle = "blue"
  ghost.fill()
  ghost.stroke()
  ghost.beginPath()
  ghost.moveTo(40, 65)
  ghost.bezierCurveTo(40, 40, 60, 40, 60, 65)
  ghost.bezierCurveTo(60, 90, 40, 90, 40, 65)
  ghost.moveTo(90, 65)
  ghost.bezierCurveTo(90, 40, 110, 40, 110, 65)
  ghost.bezierCurveTo(110, 90, 90, 90, 90, 65)
  ghost.fillStyle = "white"
  ghost.fill()
  ghost.beginPath()
  ghost.arc(45, 65, 5, 0, Math.PI * 2)
  ghost.arc(95, 65, 5, 0, Math.PI * 2)
  ghost.fillStyle = "black"
  ghost.fill()
}

function makeCanvas() {
  let canvas = document.createElement("canvas")
  document.body.appendChild(canvas)
  canvas.style.border = "1px solid black"
  canvas.setAttribute("width", "148")
  canvas.setAttribute("height", "148")
  canvas.style.margin = "1px"
  let ctx = canvas.getContext('2d')

  return ctx
}