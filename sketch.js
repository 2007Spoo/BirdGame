
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, groundImage;

var bird, birdImage;

var cherry,cherryGroup, cherryImage;

var score= 0;
function preload()
{
   groundImage= loadImage("ground1.jpg");

   birdImage= loadImage("birdside_02.png")

   cherryImage= loadImage("cherry.png");
}

function setup() {
	createCanvas(800, 750);



	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground = createSprite(200,180,400,20);
  ground.addImage(groundImage);
  ground.x = ground.width /2;

  bird= createSprite(100,200,1,1);
  bird.addImage(birdImage);
  bird.scale= 0.3;

  cherryGroup= createGroup();
	Engine.run(engine);
  
}


function draw() {
  rectMode(0);
  background(0);
  ground.velocityX =-4;

 
  console.log(score)

  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  spawnCherry();
  textSize(25);
  stroke("black")
  text("score : "+ score , 500, 500);
  if(cherryGroup.isTouching(bird))
  {
    cherryGroup.setLifetimeEach(-1);
    cherryGroup.setVelocityEach(0);
    bird.scale= bird.scale+0.1;
    score= score+1;
  }

  if(keyDown("Right_Arrow"))
  {
    bird.position.x= bird.position.x+ 20;
  }
  
  if(keyDown("Left_Arrow"))
  {
    bird.position.x= bird.position.x-20;
  }
  
  if(keyDown("space"))
  {
    bird.position.y= bird.position.y-20;
  }
  
  if(keyDown("y"))
  {
    bird.position.y= bird.position.y+ 20;
  }

  
  drawSprites();
 

  
}

function spawnCherry()
{
  if(frameCount%60 === 0)
  {
    var cherry= createSprite(random(500, 700), random(180,280),20,20);
    
    cherry.addImage(cherryImage);
    cherry.velocityX= -2;

    cherry.scale= 0.2;

    cherryGroup.add(cherry);
  }
}

