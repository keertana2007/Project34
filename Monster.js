class Monster {
  
    constructor(x,y,r,angle){
      var options={
        density:3,
        frictionAir:0.005,
      }
      this.body=Bodies.circle(x,y,r,options);
      this.image=loadImage("Monster-01.png");
      World.add(world,this.body);
      this.r=r;
     
    }
    display() {
     var angle=this.body.angle;
     var pos=this.body.position;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     fill("lightgreen");
     image(this.image,0,0,this.r,this.r);
     pop();
    }
  }
  