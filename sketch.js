


// définition des variables

var axeX= 0;
var axeY = 0;
var speed = 0;
var speed2 = 0;

function setup() {
  createCanvas(700, 600);
  print("Hello guys!")
  print("Lets play a game together") 
  
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
  rect(axeX, axeY, 25, 25, 10);
  
  
  // the paddle 
  fill(20, 430, 2);
  if (mouseY > 300){
    fill(255, 0, 200)
  }
  rect(mouseX, mouseY, 70, 5, 20);


  
  // les variables
  axeX = axeX + speed;
  axeY = axeY+ speed2;
  strokeWeight(3);
  
  // barrière
  fill(320, 7, 43)
  var barriere = rect(0, 0, 5, 100, 0) ;
  var barriere = rect(0, 110, 5, 100, 0);
  var barriere = rect(0, 220, 5, 100, 0);
  var barriere = rect(0, 330, 5, 100, 0);
  var barriere = rect(0, 440, 5, 100, 0);
  var barriere = rect(694, 0, 5, 100, 0);
  var barriere = rect(694, 0, 5, 100, 0) ;
  var barriere = rect(694, 110, 5, 100, 0);
  var barriere = rect(694, 220, 5, 100, 0);
  var barriere = rect(694, 330, 5, 100, 0);
  var barriere = rect(694, 440, 5, 100, 0);


  }
