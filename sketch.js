
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,box1,box2,box3;
var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(2000, 1800);
	
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 
	shapeColor="red";
	box1=createSprite(2000,1500,50,500);
	fill="red";
	box2=createSprite(1200,1500,50,500);
	fill="red";
	box3=createSprite(1600,1750,750,50);

	fill="cyan";
    paper  =  new Paper(1000,900,20);

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
   box1.display();
   box2.display();
   box3.display();

   paper.display();
   
   console.log(paper.position);





  drawSprites();
}

function keydown(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
		
	}
}
