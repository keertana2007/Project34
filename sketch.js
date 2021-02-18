//Open source code dev on 28/1/2021\
//avail on github

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//Vars

var Background;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var superhero;
var monster;

function preload() {
  Background=loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(3000, 680);

  //world and engine
  engine=Engine.create();
  world=engine.world;

 
  //Ground
  ground = new Ground(500,600,1300,20);
  
  //Blocks
  box1=new Box(900,100,70,70);
  box2=new Box(900,100,70,70);
  box3=new Box(900,100,70,70);
  box4=new Box(900,100,70,70);
  box5=new Box(900,100,70,70);
  box6=new Box(900,100,70,70);
  box7=new Box(800,100,70,70);
  box8=new Box(800,100,70,70);
  box9=new Box(800,100,70,70);
  box10=new Box(800,100,70,70);
  box11=new Box(800,100,70,70);
  box12=new Box(800,100,70,70);
  box13=new Box(700,100,70,70);
  box14=new Box(700,100,70,70);
  box15=new Box(700,100,70,70);
  box16=new Box(700,100,70,70);
  box17=new Box(700,100,70,70);
  box18=new Box(700,100,70,70);
  box19=new Box(700,100,70,70);
  box20=new Box(700,100,70,70);
  
  //superhero
  superhero=new Superhero(500,350,200);

  //rope
  rope=new Rope(superhero.body,{x:500,y:100});

  //evil
  monster=new Monster(1100,100,100);
}

function draw() {
  background(Background);

  Engine.update(engine);

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  superhero.display();
  monster.display();
}
function mouseDragged(){
  Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY});
}




