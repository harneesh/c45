var player;
var track;
var car1, car2, car3;



function preload()
{
	trackimg = loadImage("track.jpg");
	playerimg = loadImage("player.png");
	car1img = loadImage("car1.png");
	car2img = loadImage("car2.png");
	car3img = loadImage("car 3.png");
}

function setup() {
	createCanvas(1200, 700);

	track = createSprite(600, 350, 1200, 700);
	track.addImage("track", trackimg);
	track.scale =4;
	track.velocityY = -5;

	player = createSprite(600, 500, 50, 50);
	player.addImage("player", playerimg);
	player.scale = 0.2;

	car1 = createSprite(350, -50, 50, 50);
	car1.velocityY = 3;
	car1.addImage("car1", car1img);
	car1.scale = 0.3;

	car2 = createSprite(600, -500, 50, 50);
	car2.velocityY = 3;
	car2.addImage("car2", car2img);
	car2.scale = 0.6;

	car3 = createSprite(850, -50, 50 ,50);
	car3.velocityY = 3;
	car3.addImage("car 3", car3img);
	car3.scale = 0.6;

	

	
	//Create the Bodies Here.



  
}


function draw() {
  rectMode(CENTER);
  background("green");

  if (track.y<0) {
	  track.y = 350;
  }

  if (car1.y>700) {
	  car1.y = -50;
	  car1.velocityY = 3;
  }

  if (car2.y>850) {
	  car2.y = -200;
	  car2.velocityY = 3;
  }

  if (car3.y>1000) {
	  car3.y = -250;
	  car3.velocityY = 3;
  }

  
  if(keyIsDown(LEFT_ARROW)) {
	if(player.x = 850) {
		player.x = 600;
		}
		else if(player.x = 600) {
			player.x = 350;
		}
		
  }

  

	

  if(keyIsDown(RIGHT_ARROW)) {
	 
	  player.x = 850;
  }

  
  
  drawSprites();
 
}



