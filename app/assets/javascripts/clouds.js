let clouds = [];

function setup(){
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('background-holder');

  let cloudNum = $('.cloud').length;

  for(let i=0; i<cloudNum; i++){
     let c = select('cloud'+i, 'cloud-holder'); //dom cloud image
     let cloud = new Cloud(c, 0,0,0,0); //cloud class for moving clouds
     clouds.push(cloud);
  }
}

function draw(){

  background(0);
}
