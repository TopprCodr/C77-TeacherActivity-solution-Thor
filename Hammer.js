class Hammer {
  constructor(x, y, width, height) {
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    this.image = loadImage("./sprites/hammer.png");
    Composite.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    //to move hammer on mouse control
    //pos.x = mouseX;
    //pos.y = mouseY;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
