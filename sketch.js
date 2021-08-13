var ship, ship_sailing;
var seaImage, sea;

function preload(){
ship_sailing = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200, 180, 400, 20);
  sea.addImage("background", seaImage);
  sea.x = sea.width/2;
  sea.velocityX = -4;

 ship = createSprite(150, 270, 20, 30);
 ship.addAnimation("moving", ship_sailing);
 ship.scale = 0.30;
}

function draw() {
  background("blue");
  if(sea.x < 0) {
    sea.x = sea.width/2;
  }
 
  drawSprites();
}
