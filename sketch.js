var bg
var sleep, sleeping
var brush,brushing
var gym, gymming
var eat, eating
var drink,drinking
var move, moving

function preload() {
bg = loadImage ("iss.png");
sleep = loadAnimation ("sleep.png");
brush = loadAnimation ("brush.png");
gym = loadAnimation ("gym1.png");
eat = loadAnimation ("eat1");
drink = loadAnimation ("drink1.png");
move = loadAnimation ("move.png");
}
function setup() {
  createCanvas(800,400);
  
  astronaut = createSprite(300,230);
  astronaut.addAnimation ("sleeping", sleep);
  astronaut.scale = 0.1;
}
function draw() {
  background(bg); 

  //Up Arrow = Brushing
  ////Down Arrow = Gymming
  //Left Aroow = Eating
 // Right Arrow = Bathing
 // m key = Moving

 if(keyDown("UP_ARROW")) {
   astronaunt.addAnimation("brushing",brush);
   astronaunt.changeAnimation ("brushing");
   astronaunt.y = 350;
   astronaunt.velocityX = 0;
   astronaunt.velocityY = 0;} 

   if(keyDown("DOWN_ARROW")) {
    astronaunt.addAnimation("gymming",gym);
    astronaunt.changeAnimation ("gymming");
    astronaunt.y = 300;
    astronaunt.velocityX = 0;
    astronaunt.velocityY = 0;
   }

    if(keyDown("LEFT_ARROW")) {
      astronaunt.addAnimation("eating",eat);
      astronaunt.changeAnimation ("eating");
      astronaunt.y = 250;
      astronaunt.velocityX = 0;
      astronaunt.velocityY = 0;
    }


     if(keyDown("m")) {
      astronaunt.addAnimation("moving",move);
      astronaunt.changeAnimation ("moving");
      astronaunt.y = 100;
      astronaunt.velocityX = 0;
      astronaunt.velocityY = 0;
     }


   
  drawSprites();
}