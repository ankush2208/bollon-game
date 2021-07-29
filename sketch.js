var bow , arrow,  background ,red ,blue ,green ,pink  , score;
var bowImage, arrowImage , RBI , BBI , GBI , PBI ,redB ,blueB ,pinkB ,greenB , arrowB;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  RBI = loadImage("red_balloon0.png");
  BBI = loadImage("blue_balloon0.png");
  GBI = loadImage("green_balloon0.png");
  PBI = loadImage("pink_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  redB   = new Group();
  greenB = new Group();
  pinkB  = new Group();
  blueB  = new Group();
  arrowG = new Group();

  score = 0 ;

   
 
}


function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")  ) {
    createArrow();
  }    
 //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 === 0) {
    if (select_balloon === 1) {
    redBalloon();
    }else if(select_balloon === 2){
    blueBalloon();
    }else if(select_balloon === 3){
    greenBalloon();
    }else if(select_balloon === 4){
    pinkBalloon();
    }
  }

  if(arrowG.isTouching(redB)){
    arrowG.destroyEach();
    redB.destroyEach();
    score = score + 3

  }
  if(arrowG.isTouching(blueB)){
    arrowG.destroyEach();
    blueB.destroyEach();
    score = score + 2

  }
  if(arrowG.isTouching(greenB)){
    arrowG.destroyEach();
    greenB.destroyEach();
    score = score + 4

  }
  if(arrowG.isTouching(pinkB)){
    arrowG.destroyEach();
    pinkB.destroyEach();
    score = score + 2

  }
  
  drawSprites();
  fill(0)
  textSize(25)
  text("SCORE = "+score,50,50)
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowG.add(arrow)
}


function redBalloon() {
  red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(RBI);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red)

}

function blueBalloon() {
 blue = createSprite(0,Math.round(random(20,370), 10 ,10)) 
 blue.addImage(BBI)
 blue.velocityX = 3
 blue.lifetime = 150
 blue.scale = 0.1
 blueB.add(blue)

}

function greenBalloon() {
green = createSprite(0,Math.round(random(20,370),10,10))
green.addImage(GBI)
green.velocityX = 4
green.lifetime =150
green.scale = 0.1
greenB.add(green);

}

function pinkBalloon() {
 pink = createSprite(0,Math.round(random(20,380),10,10)) 
 pink.addImage(PBI)
 pink.velocityX = 2
 pink.lifetime = 200
 pink.scale = 1.2
 pinkB.add(pink);
}
