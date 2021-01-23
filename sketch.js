var ironMan,ironManI;
var thor;
var hulk;
var blackPanther;

var villian1,villian2,villian3;
var loki;
var thanos;

function preload() {
ironManI = loadImage("iron man stand.png");

}

function setup() {
  createCanvas(1250,600);
 ironMan= createSprite(400, 200, 50, 50);

 ironMan.addImage(ironManI);

 ironMan.scale=0.3;

 //thor= createSprite(300,200,50,50);

// hulk= createSprite(200,200,50,50);
}

function draw() {
  background("gold");  

  // move right

  if(keyDown("RIGHT_ARROW")){
    ironMan.x=ironMan.x+1;
  }
  if(keyDown("LEFT_ARROW")){
    ironMan.x=ironMan.x-1;
  }
  drawSprites();
}