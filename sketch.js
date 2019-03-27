


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
  fill(0, 40, 200);
  if (mouseY > 300){
    fill(400, 0, 200)
  }
  var paddle = rect(mouseX, mouseY, 70, 5, 20);


  
  // les variables
  axeX = axeX + speed;
  axeY = axeY+ speed2;
  strokeWeight(3);
  

  
  // barrière gauche
var w = 0;
  for (var w = 0; w < 500; w = w + 120) {
    fill (300, 100, 100)
    rect(0, w, 10, 100, 0)
  }
    

  // barriere droite 
  var p = 0
  for (var p = 0; p < 500; p = p + 120) {
    fill(0, 0, 30)
    rect(690, p, 10, 100, 0);
  }
  // barriere haut
  var k = 0
  for (var k = 0;k < width; k = k + 120){
    fill (20, 200, 20)
    rect(k, 0, 100, 10, 0)

  }

  // barriere bas 
  var i  = random(0, 300)
  var e = random(20, 500)
  var z = 0
    for (var z = 0;z < width; z = z + 120) {
    fill(i, e, e)
    rect(z, 590, 100, 10, 0)
    }



  }

