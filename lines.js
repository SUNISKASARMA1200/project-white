
class lines {
    constructor(x, y) {
      this.body = Bodies.rectangle(x, y, 20, 20);
      this.width = 20;
      this.height = 20;
      
    display();{
      var pos =this.body.position;
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(3);
      stroke("black");
      fill(255);
      rect(0, 0, this.width, this.height);
    }
  }
}