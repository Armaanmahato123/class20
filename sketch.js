var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400,200,70,50);
  fixedRect.shapeColor = "white";

  movingRect = createSprite(400,50,50,70);
  movingRect.shapeColor = "white";
}

function draw() {
  background("black"); 
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 && movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "yellow";
  }
  else{
    fixedRect.shapeColor = "white";
    movingRect.shapeColor = "white";
  }
  
  drawSprites();
}