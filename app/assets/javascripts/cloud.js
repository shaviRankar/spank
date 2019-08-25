// class Cloud {
//   constructor(elem, startX, startY, targX, targY){
//     this.pos = new p5.Vector(startX, startY);
//     this.vel = new p5.Vector(0,0);
//     this.acc = new p5.Vector(0,0);
//     this.targ = new p5.Vector(targX, targY);
//     this.elem = elem;
//     this.maxSpeed = 5;
//     this.maxForce = 0.1;
//   }
//
//   applyForce(force){
//     this.acc.add(force);
//   }
//
//   update(){
//     this.vel.add(this.acc);
//     this.vel.limit(this.maxSpeed);
//     this.pos.add(this.vel);
//     this.acc.mult(0);
//   }
//
//   shift(){
//     let targ = new p5.Vector(random(this.pos.x - 200, this.pos.x + 20), random(this.pos.y - 20, this.pos.y + 20));
//
//     console.log(targ);
//
//     this.seek(targ);
//   }
//
//   seek(target){
//     let desired = target.sub(this.pos);
//     desired.normalize();
//     desired.mult(this.maxForce);
//     let steer = desired.sub(this.vel);
//     steer.limit(this.maxForce);
//
//     this.applyForce(steer);
//   }
// }
