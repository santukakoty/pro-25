const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var rect1, rect2;
var ground,block1,paper;
var world;
//function preload()
//{
	//dustbinImage=loadImage("dustbingreen.png");
	//}

function setup() {
	createCanvas(1600, 500);
	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  rect1=createSprite(1100, 370, 25, 100);
	rect1.shapeColor="white";
	rect1.debug=true;

	rect2=createSprite(1300, 370, 25, 100);
	rect2.shapeColor="white";
	rect2.debug=true;

	//rect3=createSprite(630, 470, 120, 15);
	//rect3.addImage(dustbinImage);
	//rect3.scale=0.53;
	//rect3.shapeColor="white";
	//rect3.debug=true;

	Paper = new Paper(300,300,40);
	Ground = new Ground(800,485,1600,20);
	block1 = new Dustbingreen(1200,470,200,200);
	block2 = new Dustbingreen(1100,370,20,100);
	block3 = new Dustbingreen(1300,370,20,100);
 //   Dustbingreen = new Dustbingreen(1300,375,10,120);
	
 /*var render = Render.create({
	element: document.body,
	engine: engine,
	options: {
	  width: 1600,
	  height: 700,
	  wireframes: false
	}
  });

  //Engine.run(engine);
  Render.run(render);*/
}


function draw() {
  rectMode(CENTER);
  background("pink");
  Engine.update(engine);

  Paper.display();
  Ground.display();
 // dustbingreen.display();
  block1.display();
 
  
  //rect3.collide(paper);
  //drawSprites();
  

}


  function keyPressed() {
	  if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(Paper.body,Paper.body.position,{x:70,y:-70});
	  }
  }



 


