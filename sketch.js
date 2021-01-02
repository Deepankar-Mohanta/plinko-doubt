const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles=[];
var plinkos=[];
var divisions=[];

var divisionheight=300;

function setup() {
  
  var canvas=createCanvas(480, 800);
  engine=Engine.create();
  world=engine.world;

  for(var i=0; i<=width; i=i+80 ){
    divisions.push(new Division(i, height-divisionheight/2, 20, divisionheight))
  }

  for(var i=15; i<=width; i=i+50){
    plinkos.push(new plinko(i, 75, 20))
  }

  for(var i=40; i<=width; i=i+50){
    plinkos.push(new plinko(i, 175, 20))
  }

  for(var i=15; i<=width; i=i+50){
    plinkos.push(new plinko(i, 275, 20))
  }

  for(var i=40; i<=width; i=i+50){
    plinkos.push(new plinko(i, 375, 20))
  }


  if(frameCount%60===0){
    particles.push(new particle(random(15, 785), 10, 10))
  }


}

function draw() {
  background(0, 0, 0);  
  Engine.update(engine);

  for(var i=0; i<divisions.length; i++){
    divisions[i].display();
  }

  for(var i=0; i<plinkos.length; i++){
    plinkos[i].display();
  }

  for(var i=0; i<particles.length; i++){
    particles[i].display();
  }

 




  
}
 