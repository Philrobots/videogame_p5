


// définition des variables

var axeX= 0;
var axeY = 0;
var speed = 0;
var speed2 = 0;

function setup() {
  createCanvas(700, 600);
  print("Hello guys!")
  print('The game over here is pretty simple, you guys need to stay',
        'alive for the more time possible,if the ball touches one of',
        'the red rectangle, it goes away and the game is over when',
        'there is no longuer red rectangle')
  
  
   var inp = createInput('Le jeux vidéo');
  inp.input(myInputEvent);
}

function myInputEvent() {
  console.log('you are typing my friend: ', this.value());

}
function mousePressed() {
  if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}


function draw() {
  background(0);
  
  // pour pas que la balle sorte 
  
  if (axeX >= 685 || axeY >= 585){
    speed2 = -random(0, 10);
    speed = -random(0, 10);
  }
   if (axeX < 0 || axeY < 0){
    speed2 =  random(0, 10);
     speed = random(0, 10);
   }
  
  
  // pour que la balle rebondissent quand elle touche au paddle
  if (axeX >= mouseX && axeY >= mouseY ){
    speed2= random(-10, 10);
    speed = random(-10, 10);
  }
  // la balle
  fill(random(150), random(200), random(300));
  var ball = rect(axeX, axeY, 25, 25, 10);
  
  
  // the paddle 
  fill(20, 430, 2);
  if (mouseY > 300){
    fill(255, 0, 200)
  }
  var paddle = rect(mouseX, mouseY, 70, 5, 20);


  
  // les variables
  axeX = axeX + speed;
  axeY = axeY+ speed2;
  strokeWeight(3);
  
  // barrière
  if (barriere != ball){
    fill(240, 0, 0)
  }
   else if (barriere == ball){
  fill(0, 0, 0)}
  var z = 0;
  var barriere = rect(0, 0, 10, 100, 0) ;
  var barriere = rect(0, 110, 10, 100, 0);
  var barriere = rect(0, 220, 10, 100, 0);
  var barriere = rect(0, 330, 10, 100, 0);
  var barriere = rect(0, 440, 10, 100, 0);
  var barriere = rect(690, 0, 10, 100, 0);
  var barriere = rect(690, 0, 10, 100, 0) ;
  var barriere = rect(690, 110, 10, 100, 0);
  var barriere = rect(690, 220, 10, 100, 0);
  var barriere = rect(690, 330, 10, 100, 0);
  var barriere = rect(690, 440, 10, 100, 0);
  var barriere = rect(40, 0, 100, 10, 0);
  var barriere = rect(160, 0, 100, 10, 0);
  var barriere = rect(280, 0, 100, 10, 0);
  var barriere = rect(400, 0, 100, 10, 0);
  var barriere = rect(520, 0, 100, 10, 0);
  var barriere = rect(20, 590, 100, 10, 0);
  var barriere = rect(140, 590, 100, 10, 0);
  var barriere = rect(280, 590, 100, 10, 0);
  var barriere = rect(400, 590, 100, 10, 0);
  var barriere = rect(520, 590, 100, 10, 0);


  }

