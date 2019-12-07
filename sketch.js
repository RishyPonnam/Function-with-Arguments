var moving,fixed,object3,object4,object5;


function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
   moving = createSprite(50,200,50,50);
   object3 = createSprite(100,200,50,50);
   object4 = createSprite(200,200,50,50);
   object5 = createSprite(300,200,50,50);
   //moving.velocityX = 5;
   //fixed.velocityX = -5;
}

function draw() {
  background(100,0,200);  
  moving.x = mouseX;
  moving.y = mouseY;
  
  if(isTouching (moving,object3)){
    moving.shapeColor = "red";
      object3.shapeColor = "green";
  }
 else{
  //moving.shapeColor = "blue";
  object3.shapeColor = "blue";
 }

 if(isTouching (moving,object4)){
  moving.shapeColor = "red";
    object4.shapeColor = "green";
}
else{
//moving.shapeColor = "blue";
object4.shapeColor = "blue";
}
  
if(isTouching (moving,object5)){
  moving.shapeColor = "red";
    object5.shapeColor = "green";
}
else{
//moving.shapeColor = "blue";
object5.shapeColor = "blue";
}

  drawSprites();
}

function isTouching(object1,object2) {
  if(object1.x - object2.x  < object1.width/2 + object2.width/2
    && object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object1.height/2 + object2.height/2) {
    return true
    }
    else {
     return false
    }
}