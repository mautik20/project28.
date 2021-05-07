const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var launchingForce=100;
var boy;
var distance;
var mangoBodyPosition;
var stoneBodyPosition;

var engine, world;

function preload(){
  boy=loadImage("sprites/boy.png")
}

function setup() {
  createCanvas(1300,600);
  engine = Engine.create();
  world = engine.world;

  stone = new Stone(235,420,30);
  tree = new Tree(815,300);
  mango1 = new Mango(1100,100,30);
  mango2 = new Mango(1170,130,30);
  mango3 = new Mango(1010,140,30);
  mango4 = new Mango(1000,70,30);
  mango5 = new Mango(1100,70,30);
  mango6 = new Mango(1000,230,30);
  launcherobj = new launcher(stone.body, { x: 235, y: 420});
  ground = new Ground(width/2,600,width,20);
  Engine.run(engine);
}
function draw() {
  background("white");
  Engine.update(engine);
  textSize(20);
  text("Press space to get second chance.",30,30)
  image(boy,200,340,200,300);

  stone.display();
  launcherobj.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  ground.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
}

function mouseDragged() {
  Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}


function mouseReleased(){
  launcherobj.fly();
}

 
function keyPressed(){
  if(keyCode==32){
  //  Matter.Body.setPosition(stone.Body,{x:235,y:420});
    launcherobj.attach(stone.body)
  }
}

function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;
  distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  } 
}
