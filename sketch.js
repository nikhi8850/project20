var garden,gardenImage
var cat,catImage,catRunning
var jerry,jerryImage

function preload() {
    //load the images here
gardenImage=loadImage("images/garden.png");
catImage=loadImage("images/tomOne.png");
catRunning=loadAnimation("images/tomThree.png","images/tomTwo.png")
jerryImage=loadImage("images/jerryOne.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  cat=createSprite(840,580,10,10);
  cat.addImage(catImage);
  cat.scale=0.2;

  jerry=createSprite(200,580,10,10);
  jerry.addImage(jerryImage);
  jerry.scale=0.2;
}

function draw() {
  background(gardenImage);
    //Write condition here to evalute if tom and jerry collide
    
    keyPressed();
     
    drawSprites();
}


function keyPressed(){

    //For moving and changing animation write code here
  if(cat.x - jerry.x < (cat.width-jerry.width)/2){
    if(keyCode === LEFT_ARROW){
        cat.velocityX=-5;
        cat.addAnimation("catRunning",catRunning);
        cat.changeAnimation("catRunning");
    }
  }
    
  
  }
