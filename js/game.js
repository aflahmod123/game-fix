let backgroundImage;
let playerShip,playerShipImage;
let enemyShip1,enemyship2,enemyShip1Image,enemyShip2Image;
let enemyShipDeath;
let enemyShipGroup;
globalThis.leftWall
globalThis.rightWall;
let leftWallGroup,rightWallGroup;
let playerBulletGroup;


function preload(){
playerShipImage = loadImage("Images/playerShip.png");
 playerShipBulletImage = loadImage("Images/playerBullet.png");
enemyShip1Image = loadImage("Images/enemyship1.png");
enemyShip2Image = loadImage("Images/enemyship2.png");
enemyShipDeath = loadImage("Images/normalExplosion.gif")


    
}
function setup(){
    var gameCanvas = createCanvas(1850,930);

    rightWallGroup = new Group();
    leftWallGroup = new Group();

    enemyShipGroup = new Group();

    playerBulletGroup = new Group();

    playerShip = createSprite(925,855,50,50);
    playerShip.addImage(playerShipImage);
    playerShip.scale = 2;
    playerShip.friction = 0.95;

     
     

     leftWall = createSprite(0,50,90,50)
     leftWall.visble = false;
     leftWallGroup.add(leftWall);

     rightWall = createSprite(1850,50,90,50);
     rightWall.visble = false;
     rightWallGroup.add(rightWall);
     
    }

function draw(){
    background("black");
    
playerShip.x = mouseX;

if(enemyShipGroup.collide(leftWall)){
  enemyShipGroup.setVelocityXEach(4);
}

if(enemyShipGroup.collide(rightWall)){
  enemyShipGroup.setVelocityXEach(-4);
}


 
if(playerBulletGroup.isTouching(enemyShipGroup)){

enemy.remove();
enemy

}


  if(frameCount%180 ===0){
     enemySpawner();

  }
    
drawSprites();

}



function shootBullet(){

 globalThis.playerBullet;

 playerBullet = createSprite(0,playerShip.y,50,50);
playerBullet.addImage(playerShipBulletImage);
playerBullet.x = playerShip.x


playerBullet.depth = playerShip.depth;
playerShip.depth = playerShip.depth+1;

playerBullet.lifetime = 100

 
playerBullet.velocityY = -20;


playerBulletGroup.add(playerBullet);

}

function mouseClicked() {
  shootBullet();


  }

function enemySpawner(){
  globalThis.enemy;

 enemy = createSprite(900,50,50,50)
 enemyShipGroup.add(enemy);
 enemy.addImage(enemyShip1Image);
 enemy.scale = 2.1;
 enemy.debug = true;
 enemy.lifetime = 600;



 

 var rand;
 var rand1;

 rand = random(1,2);
 rand1 = Math.round(rand);

if(rand1 === 1){
  enemy.velocityX = 4;
}
else{
  enemy.velocityX = -4;
}




}


