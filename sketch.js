
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground ;
var stone1;
var boy,boyImg;
var tree;
var sling1;
function preload()
{
boyImg=loadImage("boy.png")
}
	

function setup() {
	createCanvas(1200,400);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	stone1=new Stone(400, 300,40,40);
	 boy=createSprite(450,330,50,50);
	 sling1 = new Sling(boy.body,stone1.body);
	tree=new Tree(1000,200,500,500)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  stone1.display();

boy.addImage(boyImg);
boy.scale=0.1;

sling1.display();
  tree.display();
  drawSprites();
 
}



