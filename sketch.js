let inp;
let radio;
let slider;
let sel;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200, 100, 200)
  
  
  inp = createInput('');
  inp.input(Name);
  
  inp.size(250, 30);
  
  repositionInput();
  
  radio = createRadio();
  radio.option('Yes');
  radio.option('No');
  radio.position(350, 270)
  radio.style('width', '60px');
  textAlign(CENTER);
  fill(255, 0, 0);
  
  slider = createSlider(0, 200, 100, 100);
  slider.position(300, 415);
  slider.style('width', '200px');

  textAlign(CENTER);
  background(200, 200, 100);
  sel = createSelect();
  sel.position(400, 545);
  sel.option('(choose)');
  sel.option('mail');
  sel.option('in person');
  sel.changed(mySelectAnswer);
  sel.size(250, 20)
  
  
 

}

function Name() {
  
}

function mySelectAnswer(){
  let item = sel.value();
  background(100, 200, 100);
}

function draw() {
  background(200, 100, 200)  
  
  
  fill(0, 0, 0)
  textSize(48);
  textAlign(CENTER);
  text('Voting Questionnaire', windowWidth/2 + 50, windowHeight/2 - 300)
  
  fill(0, 0, 0)
  textSize(24);
  textAlign(CENTER);
  text('What is your name?', 150, 170)
  
  fill(0, 0, 0)
  textSize(24);
  textAlign(CENTER);
  text('Are you elligible to vote?', 150, 300)
  
  fill(0, 0, 0)
  textSize(24);
  textAlign(CENTER);
  text('Have you voted?', 150, 430)
  fill(200, 0, 0)
  text('No', 500, 455)
  fill(0, 200, 0)
  text('Yes', 300, 455)
  
  fill(0, 0, 0)
  textSize(24);
  textAlign(CENTER);
  text('Did you vote by mail or in person?', 200, 560)
}

function repositionInput() {
  inp.position(290, 150, 170);
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  repositionInput();
  
}