      class Tree {
        constructor(x, y) {
          
          this.x=x;
          this.y=y;
          this.treeWidth =450;
          this.treeHeight = 600;
          this.treeThickness=10;
          this.image=loadImage("sprites/tree.png")
          this.bottomBody = Bodies.rectangle(this.x,this.y, this.treeWidth, this.treeThickness,{isStatic:true});
          World.add(world, this.bottomBody);
        }
      
        display() {
          push();
          translate(this.bottomBody.position.x, this.bottomBody.position.y+10);
          image(this.image,0, -this.treeHeight/2, this.treeWidth, this.treeHeight);
          pop();
        }
      }