





var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
tree = loadImage("tree.png")
boy = loadImage("boy.png")
} 

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	





	engine = Engine.create();
	world = engine.world;


	




  mango1 = new Mango(600,300,50)
  mango2 = new Mango(520,350,50)
	mango3 = new Mango(610,400,50)
	mango4 = new Mango(700,400,50)
	mango5 = new Mango(750,450,50)

  ground = new Box(550,670,3000,30)
  stone = new Stone(150,500,50)
  rope = new Rope(stone.body,{x:150,y:500})
  


	
  
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  drawSprites();

  ground.display()

  image(tree,400,270,400,400)
  image(boy,110,450,200,200)
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()

  rope.display()
  stone.display()


ground.body.isStatic = true
//   Matter.Body.setStatic(box1.body,true);
//   Matter.Body.setStatic(box1.body,true);
//   Matter.Body.setStatic(box1.body,true);
detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);


}


function mouseDragged(){
Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY})


}

function mouseReleased(){

  rope.fly()
}

function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=stone.body.position
var distance =dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false)
  }
}

function keyPressed(){
if(keyCode === 32){
  Matter.Body.setPosition(stone.body,{x:150,y:500})
  rope.attach(stone.body)
}
}



  













