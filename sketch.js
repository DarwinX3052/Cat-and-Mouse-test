var c1, c2, c3;
var grdnImg;
var m1, m2, m3;
var mouse, cat;
var s1;
var awake = 0;
function preload() {
    c1 = loadImage("cat1.png");
    c2 = loadAnimation("cat2.png", "cat3.png");
    c3 = loadImage("cat4.png");

    m1 = loadImage("mouse1.png");
    m2 = loadAnimation("mouse2.png", "mouse3.png");
    m3 = loadImage("mouse4.png");

    s1 = loadSound(soi.mp3);

    grdnImg = loadImage("garden.png")
}

function setup(){
  createCanvas(1800, 400);
  cat = createSprite(1600, 300, 50, 50);

  cat.addImage("happy", c3);
  cat.addAnimation("walk", c2);
  cat.addImage("sleep", c1);

  mouse = createSprite(50, 300, 20, 20);

  mouse.addImage("happy", m1);
  mouse.addAnimation("tease", m2);
  mouse.addImage("idle", m3);
}

function draw() {

    background(grdnImg);

    keyPressed();
    if (mouse.isTouching(cat)){
      cat.velocityX = 0;
      cat.changeImage("happy", c3);
      mouse.changeImage("happy", c1);
    }
    drawSprites();
}


function keyPressed(){

  if (keyCode === LEFT_KEY){
    s1.play();
    mouse.changeAnimation("tease", m2);
    awake = Math.round(random(0, 10));
    if (awake === 10){
      cat.changeAnimation("walk", c2);
      cat.velocityX = -2;
    } else{
      cat.changeImage("sleep", c1);
      cat.velocityX = 0;
    }
  }

  if (keyCode === RIGHT_KEY){
    s1.play();
    mouse.changeImage("idle", m3);
    awake = Math.round(random(0, 10));
    if (awake === 10){
      cat.changeAnimation("walk", c2);
      cat.velocityX = -2;
    } else{
      cat.changeImage("sleep", c1);
      cat.velocityX = 0;
    }
  }
}
