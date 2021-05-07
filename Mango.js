class Mango {
    constructor(x, y, r) {
      var options = { 
        isStatic: true,
        restitution:0,
        friction:1
      };
  
      this.x = x;
      this.y = y;
      this.r=r;
      this.body = Bodies.circle(this.x,this.y,this.r, options);
      this.image=loadImage("sprites/mango.png")
      World.add(world, this.body);
    }
  
    display() {
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(this.body.angle);
      imageMode(CENTER);
      ellipseMode(CENTER);
      image(this.image,0, 0, this.r*2, this.r*2);
      pop();
    }
  }