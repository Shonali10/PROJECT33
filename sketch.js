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

  snow = new Drop((random(0,1350)),0,0.5)

}

function draw() {
  background(backgroundImg);
    Engine.update(engine);
   snow.display();
  drawSprites();
}
