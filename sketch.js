var bgImg;
var iss,issImg;
var spacecraft,scImg1,scImg2,scImg3,scImg4;
var hasDocked;

function preload(){
    bgImg = loadImage("spacebg.jpg");
    issImg = loadImage("iss.png");
    scImg1 = loadImage("spacecraft1.png");
    scImg2 = loadImage("spacecraft2.png");
    scImg3 = loadImage("spacecraft3.png");
    scImg4 = loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  
  spacecraft = createSprite(290,300,20,20);
  spacecraft.x = Math.round(random(100,500));
  spacecraft.addImage(scImg1);
  spacecraft.scale = 0.15;
  
  iss = createSprite(300,180,20,20);
  iss.addImage(issImg);
  iss.scale = 0.6;

}

function draw() {
  background(bgImg); 

  hasDocked = false;
  
  if(!hasDocked){
     if(keyDown("up_arrow")){
        spacecraft.y-=2;
     } else if(keyDown("down_arrow")){
      spacecraft.addImage(scImg2);
     } else if(keyDown("left_arrow")){
      spacecraft.x-=2;
      spacecraft.addImage(scImg3);
     }else if(keyDown("right_arrow")){
      spacecraft.x+=2;
      spacecraft.addImage(scImg4);
     } 
     if(spacecraft.x >= 260 && spacecraft.x <= 270 &&
        spacecraft.y >= 245 && spacecraft.y <= 255){
        hasDocked = true;
     }
  }

  if(hasDocked){
    fill("white");
    textSize(30);
    text("Docking Successful!!",450,300);
  }

  drawSprites();
}
