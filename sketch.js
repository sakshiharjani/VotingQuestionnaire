let inp;
let radio;
let slider;
let sel;
let button1;
let button2;
let button3;
let button4;
let img;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200, 100, 200)
  
  
  inp = createInput('');
  inp.input(Name);
  inp.id('unique-input')
  
  inp.size(250, 30);
  
  repositionInput();
  
  radio = createRadio();
  radio.option('Yes');
  radio.option('No');
  
  radio.style('width', '60px');
  textAlign(CENTER);
  fill(255, 0, 0);
  
  repositionRadio();
  
  slider = createSlider(0, 200, 100, 100);
  slider.style('width', '200px');
  
  repositionSlider();

  textAlign(CENTER);
  background(200, 200, 100);
  sel = createSelect();
  sel.option('(choose)');
  sel.option('mail');
  sel.option('in person');
  sel.changed(mySelectAnswer);
  sel.size(250, 20)
  
  repositionSelect();
  
  button1 = createButton('Enter');
  button2 = createButton('Enter');
  button3 = createButton('Enter');
  button4 = createButton('Enter');
  button1.class('group-button')
  button2.class('group-button')
  button3.class('group-button')
  button4.class('group-button')
  
  button1.mousePressed(checkMark1);
  button2.mousePressed(checkMark2);
  button3.mousePressed(checkMark3);
  button4.mousePressed(checkMark4);
  
  repositionButtons();
    

}

function Name() {
  
}

function mySelectAnswer(){
  let item = sel.value();
  background(100, 200, 100);
}

function checkMark1() {
  
//image source: <a href="https://www.freeiconspng.com/img/5385">Green Check Mark</a>
  img1 = createImg("https://www.freeiconspng.com/uploads/green-check-mark-16.jpg", '')
  
  img1.size(50, 50)

  repositionImg1();
}
function checkMark2() {
  
//image source: <a href="https://www.freeiconspng.com/img/5385">Green Check Mark</a>
  img2 = createImg("https://www.freeiconspng.com/uploads/green-check-mark-16.jpg", '')
  
  img2.size(50, 50)

  repositionImg2();
}
function checkMark3() {
  
//image source: <a href="https://www.freeiconspng.com/img/5385">Green Check Mark</a>
  img3 = createImg("https://www.freeiconspng.com/uploads/green-check-mark-16.jpg", '')
  
  img3.size(50, 50)

  repositionImg3();
}
function checkMark4() {
  
//image source: <a href="https://www.freeiconspng.com/img/5385">Green Check Mark</a>
  img4 = createImg("https://www.freeiconspng.com/uploads/green-check-mark-16.jpg", '')
  
  img4.size(50, 50)

  repositionImg4();
}

function draw() {
  background(200, 100, 200)  
  
  
  fill(255, 255, 255)
  textSize(48);
  textAlign(CENTER);
  textFont('Georgia')
  text('Voting Questionnaire', windowWidth/2 + 50, windowHeight/2 - 300)
  
  fill(100, 0, 0)
  textSize(24);
  textAlign(CENTER);
  text('What is your name?', windowWidth/2 - 250, windowHeight/2 -200)
  
  fill(100, 0, 0)
  textSize(24);
  textAlign(CENTER);
  text('Are you elligible to vote?', windowWidth/2 - 250, windowHeight/2 -50)
  
  fill(100, 0, 0)
  textSize(24);
  textAlign(CENTER);
  text('Have you voted?', windowWidth/2 - 250, windowHeight/2 + 70)
  fill(200, 0, 0)
  text('No', windowWidth/2 - 90, windowHeight/2 + 135)
  fill(0, 200, 0)
  text('Yes', windowWidth/2 - 260, windowHeight/2 + 135)
  
  fill(100, 0, 0)
  textSize(24);
  textAlign(CENTER);
  text('Did you vote by mail or in person?', windowWidth/2 - 200, windowHeight/2 + 220)
}



function repositionButtons() {
  button1.position(windowWidth/2 + 10, windowHeight/2 - 160)
  button2.position(windowWidth/2 - 40, windowHeight/2 - 40)
  button3.position(windowWidth/2 - 20, windowHeight/2 + 90)
  button4.position(windowWidth/2 + 30, windowHeight/2 + 230)
  
}

function repositionInput() {
  inp.position(windowWidth/2 - 300, windowHeight/2 - 150);
  
}

function repositionRadio() {
  radio.position(windowWidth/2 - 190, windowHeight/2 - 30)
}

function repositionSlider() {
  slider.position(windowWidth/2 - 280, windowHeight/2 + 100);
}

function repositionSelect() {
  sel.position(windowWidth/2 - 250, windowHeight/2 + 250);
}

function repositionImg1() {
  img1.position(windowWidth/2 + 150, windowHeight/2 - 160)
}
function repositionImg2() {
  img2.position(windowWidth/2 + 150, windowHeight/2 - 40)
}

function repositionImg3() {
  img3.position(windowWidth/2 + 100, windowHeight/2 + 90)
}

function repositionImg4() {
  img4.position(windowWidth/2 + 150, windowHeight/2 + 230)
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  repositionButtons();
  repositionInput();
  repositionRadio();
  repositionSlider();
  repositionSelect();
  repositionImg1();
  repositionImg2();
  repositionImg3();
  repositionImg4();
  
}