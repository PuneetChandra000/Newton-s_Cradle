const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;
var ball1;
var ball2;
var ball3;
var ball4;
var ground;
var con;
var con1;
var con2;
var con3;
var con4;



function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  
  world = engine.world;

  var ball_options = {
    restitution: 0.8
  }

  var roof_options={
		isStatic:true	
  }

  roof = Bodies.rectangle(350,80,230,20,roof_options);
    World.add(world,roof);
  
  
  ball = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball);

  ball1 = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball1);

  ball2 = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball2);

  ball3 = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball3);

  ball4 = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball4);



  
  
  con = Matter.Constraint.create({
          pointA:{x:300,y:100},
          bodyB:ball,
          pointB:{x:0,y:0},
          length:150,
          stiffness:0.1
        });
  
      World.add(world,con);

  con1 = Matter.Constraint.create({
    pointA:{x:330,y:100},
    bodyB:ball1,
    pointB:{x:0,y:0},
    length:150,
    stiffness:0.1
    
  });

  World.add(world,con1);

  con2 = Matter.Constraint.create({
    pointA:{x:360,y:100},
    bodyB:ball2,
    pointB:{x:0,y:0},
    length:150,
    stiffness:0.1
  });

  World.add(world,con2);

  con3 = Matter.Constraint.create({
    pointA:{x:390,y:100},
    bodyB:ball3,
    pointB:{x:0,y:0},
    length:150,
    stiffness:0.1
  });

  World.add(world,con3);
      
  con4 = Matter.Constraint.create({
  pointA:{x:420,y:100},
  bodyB:ball4,
  pointB:{x:0,y:0},
  length:150,
  stiffness:0.1
});

World.add(world,con4);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background("#99004d");
  Engine.update(engine);

  rect(roof.position.x,roof.position.y,230,20);
  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball1.position.x,ball2.position.y,10);
  ellipse(ball2.position.x,ball1.position.y,10);
  ellipse(ball3.position.x,ball3.position.y,10);
  ellipse(ball4.position.x,ball4.position.y,10);
  

  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  line(con1.pointA.x,con1.pointA.y,ball1.position.x,ball1.position.y);
  line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y);
  line(con3.pointA.x,con3.pointA.y,ball3.position.x,ball3.position.y);
  line(con4.pointA.x,con4.pointA.y,ball4.position.x,ball4.position.y);
  
  pop();
  
}

function keyPressed()
{
  if(keyCode==LEFT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.05,y:0});
    }
}

