
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boyImg = loadImage("images/boy.png")
}

function setup() {
	createCanvas(800, 700);
	boy =createSprite(200,500,20,30);
	boy.addImage("image",boyImg)
    boy.scale=0.1;
	engine = Engine.create();
	world = engine.world;

	tree = new Tree (200,100);
    ground = new Ground(400,690,800,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  tree.display();
  ground.display();
}



