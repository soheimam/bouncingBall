
let position
let speed

let radius
let sound

function preload(){

  sound = loadSound('drop.mp3')
}


function setup() {
  createCanvas(windowWidth, windowHeight)
  //vectors take co-ords such as x and y
  position = createVector(100,50)
  speed = createVector(5,5)

  radius = 50

}

function draw() {
  background("#ffffff55")
  fill('#2727e6')
  noStroke()
  circle(position.x, position.y, radius * 2)


  // positionX = positionX + speedX
  // positionY = positionY + speedY

  position.add(speed)
  //add physics to the ball adding friction when it falls
  //or increase on each tiime it hit the walls
  // position.mult(1.01)

if (position.y > windowHeight - radius || position.y < radius) {
  speed.y = speed.y * -1

  // sound.play()

}

if (position.x > windowWidth - radius || position.x < radius) {
  speed.x = speed.x * -1

  // sound.play()
}
position.x = constrain(position.x, radius, windowWidth - radius)
position.y = constrain(position.y, radius, windowHeight - radius)

}




// take the speed and when i click it it moves a different way
// angle of rotation between 0 and two pi
function mouseClicked() {
  let angle = random(TWO_PI)
  speed.rotate(angle)
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight)
// }



