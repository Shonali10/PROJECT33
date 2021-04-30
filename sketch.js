const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg, kids, kidsImg, snow;

function preload() {
  backgroundImg = loadImage("snow1.jpg");
  kidsImg = loadImage("kids.png")
}

function setup() {
  createCanvas(1350,620);
  engine = Engine.create();
  world = engine.world;

  kids = createSprite(1000,430);
  kids.addImage(kidsImg);
  kids.scale= 0.175;

  snow = new Drop(random(0,width),0)
  snow1= new Drop(random(0,width),0)
  snow2= new Drop(random(0,width),0)
  snow3= new Drop(random(0,width),0)
  snow4= new Drop(random(0,width),0)
  snow5= new Drop(random(0,width),0)
  snow6= new Drop(random(0,width),0)
  snow7= new Drop(random(0,width),0)
  snow8= new Drop(random(0,width),0)
  snow9= new Drop(random(0,width),0)
  snow10= new Drop(random(0,width),0)
  snow11= new Drop(random(0,width),0)
  snow12= new Drop(random(0,width),0)
  snow13= new Drop(random(0,width),0)
  snow14= new Drop(random(0,width),0)

}

function draw() {
  background(backgroundImg);
    Engine.update(engine);
   snow.display();
snow1.display();
snow2.display();
snow3.display();
snow4.display();
snow5.display();
snow6.display();
snow7.display();
snow8.display();
snow9.display();
snow10.display();
snow11.display();
snow12.display();
snow13.display();
snow14.display();
  drawSprites();
}
