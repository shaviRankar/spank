class Cloud {
  constructor(elem, startX, startY, targX, targY){
    this.pos = new p5.Vector(startX, startY);
    this.vel = new p5.Vector(0,0);
    this.acc = new p5.Vector(0,0);
    this.targ = new p5.Vector(targX, targY);
    this.elem = elem;
  }

  applyForce(force){
    this.acc.add(force);
  }

  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  display(){

  }
}
