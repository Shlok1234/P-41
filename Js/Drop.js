class Drop {
    constructor(
      
    ){
      this.x = random(width);
      this.y = random(500, 50);
       this.z = random(0, 20);
      this.len = map(this.z, 0, 20, 10, 20);
      this.yspeed = map(this.z, 0, 20, 10, 40);
    
    }
    
    fall() {
      this.y = this.y + this.yspeed;
      var gravity = map(this.z, 0, 20, 0, 0.2);
      this.yspeed = this.yspeed + gravity;
  
      if (this.y > height) {
        this.y = random(-200, -100);
        this.yspeed = map(this.z, 0, 20, 4, 10);
      }
    }
  
    display () {
      var drizzles = map(this.z, 0, 20, 1, 3);
      strokeWeight(2);
      stroke(138, 83, 226);
      line(this.x, this.y, this.x, this.y + this.len);
    }
  }