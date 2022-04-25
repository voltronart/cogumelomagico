
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var chao;


var parede

var parede2


var bola 

function preload()
{
	
}

function setup() {
	createCanvas(600, 400);


	engine = Engine.create();
	world = engine.world;

 var options = { 
	 isStatic: true,

 }

 var bola_options = {
	 isStatic:false,
	 restituion:0.3,
	 friction:0,
	 density:1.2,
 }

	//Create the Bodies Here.
 chao = Bodies.rectangle(300,400,600,10,options);
 World.add(world,chao);
	 
 parede = Bodies.rectangle(370,370,10,50,options);
 World.add(world,parede);

  parede2 = Bodies.rectangle(500,370,10,50,options);
  World.add(world,parede2);
 
  bola = Bodies.circle(100,200,18,bola_options);
  World.add(world,bola);
 
  
  Engine.run(engine);
  
}


function draw() {
  background('skyblue');
  rectMode(CENTER);
  fill('green');
  rect(chao.position.x,chao.position.y,600,10); 
  fill('brown');
  rect(parede.position.x,parede.position.y,10,50);
  rect(parede2.position.x,parede2.position.y,10,50);
 
  ellipseMode(RADIUS);
  fill('orange')
  ellipse(bola.position.x,bola.position.y,18);

  if(keyDown('space')){
      Matter.Body.applyForce(bola,bola.position,{x:10,y:-10})
      

  }
  
  
  drawSprites();
 



}



