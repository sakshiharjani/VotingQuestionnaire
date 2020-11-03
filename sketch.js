let inp;
let radio;
let slider;
let sel;
let button1;
let button2;
let button3;
let button4;
let img1;
let img2;
let img3;
let img4;
let submitButton;
let img5;
let stickerText;
let endTitle;
let endVote;

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
  radio.changed(myRadioAnswer);
  
  radio.style('width', '60px');
  textAlign(CENTER);
  fill(255, 0, 0);
  
  repositionRadio();
  
  slider = createSlider(0, 200, 100, 100);
  slider.changed(mySliderAnswer);
  slider.style('width', '200px');
  
  repositionSlider();

  textAlign(CENTER);
  background(200, 200, 100);
  sel = createSelect();
  sel.option('(choose)');
  sel.option('mail');
  sel.option('in person');
  sel.option('N/A');
  sel.changed(mySelectAnswer);
  sel.size(250, 20)
  
  repositionSelect();
  
  button1 = createButton('Enter');
  button2 = createButton('Enter');
  button3 = createButton('Enter');
  button4 = createButton('Enter');
  submitButton = createButton('Submit')
  button1.class('group-button')
  button2.class('group-button')
  button3.class('group-button')
  button4.class('group-button')
  submitButton.id('unique-button')
  
  button1.mousePressed(checkMark1);
  button2.mousePressed(checkMark2);
  button3.mousePressed(checkMark3);
  button4.mousePressed(checkMark4);
  submitButton.mousePressed(Submit);
  
  repositionButtons();
    

}

function Name() {
}


function mySliderAnswer() {
  let item = slider.value();
}

function myRadioAnswer() {
  let item = radio.value();
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

function Submit() {
  let choiceS = slider.value()
  let choiceR = radio.value()
 if (choiceS === 0 && choiceR === 'Yes') {
    stickerText = createDiv('Good Job! Here is your sticker!')
     stickerText.id('unique-sticker');
     repositionDiv1();
     
//image source: https://www.pngkey.com/maxpic/u2q8u2q8e6u2o0q8/
    img5 = createImg("https://www.pngkey.com/png/full/113-1133477_i-voted-sticker-png-clip-art-transparent-stock.png", '')
    
    
    img5.size(250, 250)
    repositionImg5();
   
} else if (choiceS === 200 && choiceR === 'No') {
   endTitle = createDiv('Thank you for your time. Encourage your friends to vote!')
   endTitle.id('unique-end');
  
  repositionDiv2();
  
} else if (choiceS === 200 && choiceR === 'Yes') {
   endVote = createDiv( "Vote if you can!")
   endVote.id('unique-vote');
  
    repositionDiv3();
}
    
  
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
  submitButton.position(windowWidth/2 + 150, windowHeight - 50)
  
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
  img1.position(windowWidth/2 + 150, windowHeight/2 - 160);
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

function repositionImg5() {
  img5.position(windowWidth/2 + 200, windowHeight/2)
}

function repositionDiv1() {
  stickerText.position(windowWidth/2 + 200, windowHeight - 600)
}

function repositionDiv2() {
  endTitle.position(windowWidth/2 + 200, windowHeight/2 - 100)
}
function repositionDiv3() {
  endVote.position(windowWidth/2 + 200, windowHeight - 600)
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
  repositionImg5();
  repositionDiv1();
  repositionDiv2();
  repositionDiv3();
}