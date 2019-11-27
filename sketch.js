let globe;
let sigla;
let t1;
let t2;
var button;
var op = 0;
var opText = 255;
var opImg = 0;

function preload(){
  sigla = loadSound('assets/TG1_bumper.mp3')
  map = loadImage('assets/map.jpg')
  tg = loadImage('assets/tg1_logo_wh.png')
  font = loadFont('assets/pcsenior.ttf');

}

function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL)

  analyzer = new p5.Amplitude();
  analyzer.setInput(sigla);

  pixelDensity(0.9)

  //vhs()



  //button to let the intro (and also sound) play
    button = createButton("LET'S GET IT STARTED");
    button.style('background-color', 'black');
    button.style('color', 'gold')
    button.style('padding', '15px');
    button.style('font-family', font)
    button.style('border', '5px solid gold');
    button.position(windowWidth / 2-80, windowHeight / 2 + windowHeight / 10);
    button.mousePressed(playAll);
}

function draw() {
  background('black')
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

  imageMode(CENTER)
  tint(255,opImg)
  image(tg,0,0,400,400/1.42)


  noFill();
  stroke(255,255,255,op);
  strokeWeight(1)
  push()
  translate(windowWidth*0.5, height * 0.45, -200);
  rotateX(frameCount*0.001)
  rotateY(frameCount*0.001)
  rotateZ(frameCount*0.001)
  sphere(600);
  pop();
}

function vhs() {
  loadPixels(); //
    for (var y=0; y< height; y++) {
      for (var x=0; x< width; x++) {
        var index = (x+y*width)*4;
        pixels[index+0] = random()*200;
        pixels[index+1] = random()*200;
        pixels[index+2] = random()*200;
        pixels[index+3] = random()*200;
      }
    }
  updatePixels() //
}

function playAll() {


  button.hide()

  if (sigla.isPlaying()) {
    sigla.pause();
  } else {
    sigla.loop();
  }

  op = 50;
  opText = 0;
  opImg = 255




}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
