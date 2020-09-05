class Box {
    constructor(x, y, width, height) {
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;

    }
    display(){
      rectMode(CENTER);
      strokeWeight(3);
      stroke("green");
      fill(255);
      rect(0, 0, this.width, this.height);
    }
  };
  