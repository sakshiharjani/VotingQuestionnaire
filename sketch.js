let MENU = 0
let QUESTIONONE = 1
let QUESTIONTWO = 2
let QUESTIONTHREE = 3
let screen = 0
let startButton;
let nextButton;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(random(250), random(100), random(100))
  fill(255, 255, 255)
  textSize(48);
  textAlign(CENTER);
  text('Voting Questionnaire', windowWidth/2, windowHeight - 400)
  
  
  
//   startButton = createButton('Start');
//   startButton.position(windowWidth/2, windowHeight - 400)
  
//   startButton.mousePressed(screen0)
  
  nextButton = createButton('Next');
  
  nextButton.mousePressed(continueScreen);
  
  repositionButton();
}

// function draw() {
// if (screen === MENU && nextButton.mousePressed) {
//    screen0()
//  }else if (screen === QUESTIONONE && nextButton.mousePressed) {
//    screen1()
//  }else if (screen === QUESTIONTWO && nextButton.mousePressed) {
//    screen2()
//  }else if (screen === QUESTIONTHREE && nextButton.mousePressed) {
//    screen3()
//  }
// }

function continueScreen() {
  if (screen === MENU) {
   screen0()
 }else if (screen === QUESTIONONE) {
   screen1()
 }else if (screen === QUESTIONTWO) {
   screen2()
 }else if (screen === QUESTIONTHREE) {
   screen3()
 }
}


function screen0 () {
  background(200, 100, 200);
  fill(0, 0, 0)
  textSize(24);
  textAlign(CENTER);
  text('What is your name?', windowWidth/2, windowHeight - 400)
  if (nextButton.mousePressed) {
    screen += 1
  }
}

function screen1() {
  background(100, 100, 200);
  fill(0, 0, 0)
  textSize(24);
  textAlign(CENTER);
  text('Are you elligible to vote?', windowWidth/2, windowHeight - 400)
  if (nextButton.mousePressed) {
    screen += 1
  }
}

function screen2() {
  background(30, 150, 230);
  fill(0, 0, 0)
  textSize(24);
  textAlign(CENTER);
  text('Have you voted?', windowWidth/2, windowHeight - 400)
  if (nextButton.mousePressed) {
    screen += 1
  }
}

function screen3() {
  background(30, 250, 230);
  fill(0, 0, 0)
  textSize(24);
  textAlign(CENTER);
  text('Good Job!', windowWidth/2, windowHeight - 400)
  if (nextButton.mousePressed) {
  }
}

function repositionButton() {
  nextButton.position(windowWidth - 100, windowHeight - 100);
  
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  repositionButton();
}