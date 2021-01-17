
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 // createCanvas(400,400);
  
  
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
  
ground=createSprite(400,350,900,10);
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x)
  
 obstaclesGroup = new Group();
  FoodGroup = new Group(); 
  
    
}


function draw() {

  background(255)
if(ground.x<0)  {                                                        
  ground.x=ground.width/2
}
  if (keyDown("space")){
    monkey.velocityY=-12
  }
  
  monkey.velocityY=monkey.velocityY+ 0.5
  
  monkey.collide(ground);
  
  
  spawnfood();
 spawnobstacles();

  
  var survivaltime=0
  
  stroke("white")
  textSize(20) 
  fill("white")
  text("Score: "+ score, 500, 50);
  
  stroke("black")
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime, 100,50);
  
  
  
 drawSprites();
}



function spawnfood(){
if (frameCount % 80 === 0){
  var food = createSprite( 200,150,20,20 );
  food.addImage("food",bananaImage)
  food.velocityX=-2
  food.lifetime = 200
  var rand = Math.round(random(120,200))
  food.scale=0.1
FoodGroup.add(food) 
}
}
function spawnobstacles(){
if (frameCount % 200 === 0){
  var obstacles = createSprite( 200,325,20,20 );
  obstacles.addImage("obstacles",obstacleImage)
  obstacles.velocityX=-2
  obstacles.lifetime = 200
  var rand = Math.round(random(120,200))
  obstacles.scale=0.1
  //obstacleGroup.add(obstacles) 
}
}




























