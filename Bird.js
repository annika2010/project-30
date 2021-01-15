class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':2.0
  }
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
  }
}
