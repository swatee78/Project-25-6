
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,paper,ground,dustbin;


function setup() {
	createCanvas(800, 700);
  
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(400,500,800,20)
  dustbin = new Dustbin(500,290);
  paper = new Paper(100,450,70);
   
    
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.run(engine);

  ground.display();
  dustbin.display();
  paper.display();
 


  
 

}

function keyPressed(){
 if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
 }
}

