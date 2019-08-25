// let clouds = [];
// let cloudNum;
//
// function setup(){
//   let canvas = createCanvas(windowWidth, windowHeight);
//   canvas.parent('background-holder');
//
//   cloudNum = $('.cloud').length;
//
//   for(let i=0; i<cloudNum; i++){
//      let c = select('cloud'+i, 'cloud-holder'); //dom cloud image
//      let cloud = new Cloud(c, 0,0,0,0); //cloud class for moving clouds
//      clouds.push(cloud);
//   }
// }
//
// function draw(){
//
//   let x = random(1);
//   if(x<.005){
//     console.log("called");
//     for(let i=0; i<clouds.length-1; i++){
//       clouds[i].shift();
//       clouds[i].update();
//     }
//   }
//   background(0);
// }
