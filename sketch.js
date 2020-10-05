
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,ground;
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400);  
monkey=createSprite(50,350,10,10);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.2;  
  
ground=createSprite(200,390,800,20);  
ground.velocityX=-5;

FoodGroup=new Group();
obstaclesGroup=new Group();



}


function draw() {
background("lightgreen")
console.log(monkey.y)  
if(keyDown("space") && monkey.y>318){
monkey.velocityY=-15;   
  
}

if(ground.x<0){
 ground.x=ground.width/2; 
}  
  
score=frameCount; 
text(" score "+score,300,50);  

monkey.velocityY=monkey.velocityY+0.8;  

monkey.collide(ground);   

spawnbanana();  
  
spawnobstacles();
  
drawSprites();
}


function spawnbanana() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
     banana = createSprite(400,100,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.15;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adding cloud to the group
   FoodGroup.add(banana);
    }
}

function spawnobstacles() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
     obstacles = createSprite(400,350,40,10);
    obstacles.addImage(obstacleImage);
    obstacles.scale = 0.2;
    obstacles.velocityX = -3;
    
     //assign lifetime to the variable
    obstacles.lifetime =200;
    
    //adding cloud to the group
   obstaclesGroup.add(obstacles);
    }
}





