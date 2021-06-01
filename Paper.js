class Paper{
      constructor(x,y,radius){
        var options = {
            isStatic:false,
            'restitution':0.5,
            'friction':1,
            'density':1.0,  
             
      }
      this.radius = radius; 
      this.x = x;
      this.y = y;
     //this.width = 20;
    // this.height = 20;
     this.body = Matter.Bodies.circle(this.x,this.y, this.width, this.height ,this.radius,options);
     this.image = loadImage("paper.png");
     World.add(world, this.body);
}
display(){
     //var angle = this.body.angle;
      push();
      //rotate(angle);
      translate(this.body.position.x,this.body.position.y);
     imageMode(CENTER);
     image(this.image,0,0,this.width,this.height,this.radius,this.radius);
      pop();
    }
  }
