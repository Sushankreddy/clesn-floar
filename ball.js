class Ball {
    constructor(x, y, width, height) {
      var options = {
         // isStatic: false
          restitution: 0.3
          
      }
      this.body = Bodies.circle(x, y,radius, options);
      this.width = radius;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(255);
      rect(pos.x, pos.y, this.radius);
      pop();
    }
  };