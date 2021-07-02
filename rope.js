class Rope 
{
  constructor(body1, body2, pointA, pointB) 
  {
    let options = {
      bodyA:body1,
      bodyB:body2,
      pointB:{x:this.pointA, y:this.pointB}
    };
    
    this.pointA = pointA;
    this.pointB = pointB;
    World.add(world, this.pointA);
    World.add(world, this.pointB);

    con = Matter.Constraint.create({
        pointA:{x:0,y:0},
        body2:ball,
        pointB:{x:0,y:0},
        length:100,
        stiffness:0.1
    });

  }

  
}