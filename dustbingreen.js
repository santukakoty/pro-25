class Dustbingreen {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      //this.x=x;
      //this.y=y;   
      this.image=loadImage("dustbingreen.png");  
      
      World.add(world, this.body);
    };
    display(){
      var dustbingreenpos = this.body.position;
    //  push();
      translate(dustbingreenpos.x,dustbingreenpos.y);
     // rectMode(CENTER);
      imageMode(CENTER);
      stroke("white");
      fill("white");
      image(this.image,0,-60,this.width,this.height);
      //pop();
      //rectMode(CENTER);
      //fill("green");
     // rect(pos.x, pos.y,this.width, this.height);
      //image(this.image,0,0,this.r,this.r);
    }
  };