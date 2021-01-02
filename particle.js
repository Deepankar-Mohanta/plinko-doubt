class particle{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':0.5,
            'density':1.0,
            'isStatic':false
        }
        this.body = Bodies.circle(x, y, radius/2, options);
        this.color=color(random(0,255), random(0,255), random(0,255));
        this.radius=radius
        this.x=x;
        this.y=y;
        World.add(world, this.body);
      }
      display(){
       
       
        push()
        var pos=this.body.position;
        ellipseMode(RADIUS);
        ellipse( pos.x, pos.y, this.radius, this.radius);
        pop();
      }
  }