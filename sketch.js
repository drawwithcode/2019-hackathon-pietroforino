let globe;
let sigla;
let t1;
let t2;
var button;
var op = 0;
var opText = 255;
var opImg = 0;
var i = 0;

function preload() {
  sigla = loadSound('assets/TG1_bumper.mp3')
  tg = loadImage('assets/tg1_logo_wh.png')
  // tv = loadImage('assets/tv.png')
  font = loadFont('assets/pcsenior.ttf');

}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)

  analyzer = new p5.Amplitude();
  analyzer.setInput(sigla);


  //button to let the intro (and also sound) play
  button = createButton("LET'S GET IT STARTED");
  button.style('background-color', 'black');
  button.style('color', 'gold')
  button.style('padding', '15px');
  button.style('font-family', 'retro')
  button.style('border', '5px solid gold');
  button.style('cursor', 'pointer')
  button.position(windowWidth / 2 - 130, windowHeight / 2 + windowHeight / 10);
  button.mousePressed(playAll);

  restart = createButton("RESTART");
  restart.hide()
  restart.style('background-color', 'black');
  restart.style('color', 'gold')
  restart.style('padding', '15px');
  restart.style('font-family', 'retro')
  restart.style('cursor', 'pointer')
  restart.style('border', '5px solid gold');
  restart.position(windowWidth / 2 - 50, windowHeight / 10 * 9);
  restart.mousePressed(ricomincia);

}

function draw() {
  background('black');
  imageMode(CENTER)

  // image(tv,0,0,windowWidth,windowHeight)

  // text settigs and display
  textFont(font);
  textAlign(CENTER, CENTER);
  textSize(40)
  fill(color(255, 208, 0, opText))
  t1 = "THE OLD IS NEW"
  text(t1, 0, -80)
  textSize(20)
  t2 = "TRIBUTE TO TG1 BUMPER"
  text(t2, 0, 20)

  var incr = analyzer.getLevel();

  push()
  rotateX(incr);
  rotateZ(incr);
  rotateY(incr);
  translate(0, 0, 100 + incr * 500)
  imageMode(CENTER)
  tint(255, opImg)
  image(tg, 0, 0, 400 + incr, 400 / 1.42 + incr)
  pop()

  noFill();
  stroke(255, 255, 255, op);
  strokeWeight(1)
  push()
  translate(windowWidth * 0.5, height * 0.45, -200);
  rotateX(frameCount * 0.001)
  rotateY(frameCount * 0.001)
  rotateZ(frameCount * 0.001)
  sphere(600);
  pop();
}

function playAll() {
  button.hide()
  restart.show()

  if (sigla.isPlaying()) {
    sigla.pause();
  } else {
    sigla.loop();
  }

  t1 = " "
  t2 = " "
  op = 50;
  opText = 0;
  opImg = 255;
}

function ricomincia() {
  op = 0;
  opText = 255;
  opImg = 0;
  sigla.pause();
  button.show()
  restart.hide()
  i++

  if (i >= 5) {
    console.log("I don't understand if you like me so much that you restarted me more than 5 times or it's because I suck at you");
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
