const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var raindrops = [];

var img;

var backgroundImg;

var thunder1, thunder2 , thunder3, thunderImg1 , thunderImg2 , thunderImg3;
function preload(){
  
    thunder1 = loadImage("Image/1.png");
    thunder2 = loadImage("Image/2.png");
    thunder3 = loadImage("Image/3.png");
}

function setup(){
  // create canvas
var canvas = createCanvas(displayWidth,displayHeight-100);
  // crate engine + world
    engine = Engine.create();
    world = engine.world;
  // make sprites of thunderImages 1 , 2 , 3 
  //  give positions to the sprites
thunderImg1 = createSprite(displayWidth/2,5,10,40);
thunderImg2 = createSprite(200,5,10,40);
thunderImg3 = createSprite(1100,5,10,40);
// give the positions to img of umbrella
    img = new Umbrella(displayWidth/2,500);
}

function draw(){
  // add image to the background
  background(0,0,0);
  // update Engine
    Engine.update(engine);
   // create raindrops by frame count
    if(frameCount % 1 === 0){
      var raindrop = new Drop(random(0, windowWidth), -100,10);
      raindrops.push(raindrop);
    }
// display umbrella img
    img.display();
// display raindrops
    for(var i = 0; i < raindrops.length; i++){
      raindrops[i].fall(20);
      raindrops[i].display();
    } 
// add random img to the thunder images 1
  // By Using Switch case method
    if(frameCount % 10 === 0) {
    var rand = Math.round(random(1,2));
      switch(rand) {
        case 1:thunderImg1.addImage(thunder1);
                break;
        case 2: thunderImg1.addImage(thunder2);
                break;
        default: break;
      }
    }   
  // add random img to the thunder images 2
  // By Using Switch case method
    if(frameCount % 10 === 0) {
      var rand = Math.round(random(1,2));
        switch(rand) {
          case 1:thunderImg2.addImage(thunder1);
                  break;
          case 2: thunderImg2.addImage(thunder2);
                  break;
          default: break;
        }
      }   
  // add random img to the thunder images 3
  // By Using Switch case method
      if(frameCount % 10 === 0) {
        var rand = Math.round(random(1,2));
          switch(rand) {
            case 1:thunderImg3.addImage(thunder1);
                    break;
            case 2: thunderImg3.addImage(thunder2);
                    break;
            default: break;
          }
        } 
  // for drawing the sprites write drawSprites at the end 
    drawSprites();
}   

