class Drop {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':0.1,
          'density':1.0
      }
      this.body = Bodies.circle(x,y,0.5,options)
      this.radius = 0.5;
      this.image = loadImage("snow.png")
      this.image.scale=0.1
      this.trajectory =[];
      World.add(world, this.body);
    }
  
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
      
      if(this.body.velocity.x > 10 && this.body.position.x > 200){
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
      }
     if(this.body.position.y > height +20){
        Matter.Body.setPosition(this.body, {x:random(0,width), y:random(0,height)})
      }
  
      for(var i=0; i<this.trajectory.length; i++){
        image(this.image, this.trajectory[i][0], this.trajectory[i][1]);
      }
    }
  }