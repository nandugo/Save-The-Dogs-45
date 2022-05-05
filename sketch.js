var dog, dogImg;
var bg,bgImg;
var car , carImg;
var house,houseImg;


function preload()
{
dogImg=loadAnimation("Assets/dog1.png","Assets/dog2.png","Assets/dog3.png");
bgImg=loadImage("Assets/bg.PNG");
carImg=loadImage("Assets/car.png");
houseImg=loadImage("Assets/house.png");
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	

	bg=createSprite(400,100,400,20);
	bg.addImage("bg",bgImg);
	bg.scale=0.3;
	bg.velocityX=-3;
	jungle.x = width /2;
}

function draw() {
  background(255);

if(bg.x < 100){
   bg.x = 400;
  }

  
  
  drawSprites();
 
}
