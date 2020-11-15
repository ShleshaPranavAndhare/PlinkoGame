var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Events = Matter.Events;

var particle = [];
var plinko = [];
var division = [];

var divisionHeight=300;

function setup() {
  createCanvas(800, 800);
	engine = Engine.create();
  world = engine.world;

  ground=new Ground(width/2,height,width,20);

  for(var k=0; k<=width; k=k+80) {
    division.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for (var j=75; j<=width; j=j+50) {
    plinko.push(new Plinko(j,75));
  }

  for (var j=50; j<=width-10; j=j+50) {
    plinko.push(new Plinko(j,175));
  }

  for (var j=75; j<=width; j=j+50) {
    plinko.push(new Plinko(j,275));
  }

  for (var j=50; j<=width-10; j=j+50) {
    plinko.push(new Plinko(j,375));
  }
}

function draw() {
  background(0);

  Engine.update(engine);

  ground.display();

  for (var i=0 ; i<plinko.length; i++) {
    plinko[i].display();
  }

  if (frameCount%60===0) {
      particle.push(new Particle(random(width/2-30,width/2+30),10,10));
  }

  for (var j=0; j<particle.length; j++) {
    particle[j].display();
  }

  for(var k=0; k<division.length; k++) {
    division[k].display();
  }
}