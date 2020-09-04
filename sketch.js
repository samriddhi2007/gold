var bg
var pc
var w1,w2,w3
var r1,r1img
var a1,a2,a1I,a2I;
var gameState = "door1"
function preload(){
r1img = loadImage("que1.png")
bg = loadImage("floor.jpg");
a1I =loadImage("AS1.png");
a2I =loadImage("AS2.png")
loss =loadImage("LOSS.png")
r2img = loadImage("question2.png")
r3img = loadImage("question3.jpg")
r4img = loadImage("question4.png")
r5img = loadImage("question5.png")
r6img = loadImage("question6.png")
r7img = loadImage("question7.jpg")
r8img = loadImage("triangleriddles.jpg")
number12img = loadImage("12no.jpg")
number15img = loadImage("15no.jpeg")
no1 = loadImage("1n.jpg")
no9 = loadImage("9.png")
no48 = loadImage("48.png")
no51 = loadImage("51.png")
no18 = loadImage("18.jpg")
no27 = loadImage("27.jpg")
}
function setup() {
  createCanvas(800,600);
  bg1 = createSprite(400,300)
  bg1.addImage(bg)
  bg1.scale=2
  rand = Math.round(random(1,4))
  pc = createSprite(50,50,50,50);
  w1 = createSprite(90,130,10,400);
  //w2 = createSprite(135,330,100,10);
   w3 = createSprite(90,510,10,200);
  w4 = createSprite(135,465,100,10)
   w5 = createSprite(190,280,10,370)
  d1 = createSprite(92,370,10,80) 
  d1.shapeColor = "red"
  r1 = createSprite(400,300,50,50);
  
  r1.addImage("riddle1",r1img)
  r1.addImage("riddle2",r2img)
  r1.addImage("riddle3",r3img)
  r1.addImage("riddle4",r4img)
  r1.addImage("riddle5",r5img)
  r1.addImage("riddle6",r6img)
  r1.addImage("riddle7",r7img)
  r1.addImage("riddle8",r8img)
  r1.visible=false;
  a1 = createSprite(347,560,25,25);
  a1.addImage("r1",a1I);
  a1.addImage("r2", number12img)
  a1.addImage("r3",no1)
  a1.addImage("r4",no48)
  a1.addImage("r5",no18)
 a1.visible=false;
  a2 = createSprite(460,560,25,25);
  a2.addImage("r11",a2I);
  a2.addImage("r32",no9)
  a2.visible=false;
  a2.addImage("r21",number15img)
  a2.addImage("r42",no51)
  a2.addImage("r52",no27)
  d2 = createSprite(186,43,10,91)
  d2.shapeColor = "red"
  w7 = createSprite(280,210,10,500)
  w8 = createSprite(350,455,130,10)
  w9 = createSprite(420,294,10,330)
 // w10 = createSprite(470,130,90,10)
  w11 = createSprite(510,355,10,520)
  d3 = createSprite(279,528,10,130)
  d3.shapeColor = "red"
  d4 = createSprite(509,52,10,90)
  d4.shapeColor = "red"
  d5 = createSprite(417,65,10,120)
  d5.shapeColor = "red"
  w12 = createSprite(610,255,10,520)
  d6 = createSprite(556,508,100,10)
  d6.shapeColor = "red"
  
  loss1=createSprite(300,300,70,70)
  loss1.addImage(loss);
  loss1.visible=false;
}

function draw() {
  background(0); 
  text(mouseX+","+mouseY,mouseX,mouseY)
  if(keyDown(UP_ARROW)){
    pc.y = pc.y-5
  }
  if(keyDown(DOWN_ARROW)){
    pc.y = pc.y+5
  }
  if(keyDown(LEFT_ARROW)){
    pc.x = pc.x-5
  }
  if(keyDown(RIGHT_ARROW)){
    pc.x = pc.x+5
  }
  if(pc.isTouching(d1)&&gameState==="door1"){
    
      r1.addImage("riddle1",r1img)
    
   
    r1.depth = 300
    r1.visible=true;
    a1.visible=true;
    a2.visible=true;
    r1.scale = 0.5
    pc.bounce(d1)

  }
  if(mousePressedOver(a1)&&gameState==="door1"){
   //loss1.visible=true;
    a2.visible=false;
    a1.visible=false;
    r1.destroy();
    
    
    pc.x = 50
    pc.y = 50
  }
  if(mousePressedOver(a2)&&gameState==="door1"){
    d1.destroy();
    d1.visible = false;
    r1.visible = false;
    a1.visible=false;
    loss1.visible = false
    a2.visible=false;
gameState = "door2"
    
  }
  if(pc.isTouching(d2)&&gameState==="door2"){
    r1.depth = 300
    r1.visible = true;
    r1.scale = 2;
    a1.visible = true
    a2.visible = true
    a1.scale = 0.1
    a2.scale = 0.1
    pc.bounce(d2)
r1.changeImage("riddle2",r2img)
a1.changeImage("r2",number12img)
a2.changeImage("r21",number15img)
  }
  console.log(gameState)
  if(mousePressedOver(a1)&&gameState==="door2"){
    d2.destroy();
    a1.visible = false
    a2.visible = false
    r1.visible = false
    loss1.visible = false
    gameState = "door3"
  }
  if(mousePressedOver(a2)&&gameState==="door2"){
    loss1.visible=true;
     a2.visible=false;
     a1.visible=false;
     pc.x = 50
     pc.y = 50
     
  }
  if(pc.isTouching(d3)&&gameState==="door3"){
    pc.bounceOff(d3)
    r1.depth = 300
    r1.visible = true;
    r1.scale = 0.5;
r1.changeImage("riddle3",r3img)
a1.visible = true 
a2.visible = true
a1.scale = 0.05
a2.scale = 0.05
a1.changeImage("r3",no1)
a2.changeImage("r32",no9)
  }
  
  if(mousePressedOver(a1)&&gameState==="door3"){
    d3.destroy();
    a1.visible = false
    a2.visible = false
    r1.visible = false
    loss1.visible = false
    gameState = "door4"
  }
  if(mousePressedOver(a2)&&gameState==="door3"){
    loss1.visible=true;
     a2.visible=false;
     a1.visible=false;
     pc.x = 50
     pc.y = 50
  }
  if(pc.isTouching(d4)&&gameState==="door4"){
    r1.depth = 300
    r1.visible = true;
    pc.bounceOff(d4)
    r1.scale = 0.5;
r1.changeImage("riddle4",r4img)
a1.visible = true 
a2.visible = true
a1.scale = 0.05
a2.scale = 0.05
a1.changeImage("r4",no48)
a2.changeImage("r42",no51)
  
  }
  if(mousePressedOver(a1)&&gameState==="door4"){
    d4.destroy();
    a1.visible = false
    a2.visible = false
    r1.visible = false
    loss1.visible = false
    gameState = "door5"
  }
  if(mousePressedOver(a2)&&gameState==="door4"){
    loss1.visible=true;
     a2.visible=false;
     a1.visible=false;
     pc.x = 50
     pc.y = 50
  }
  
    if(pc.isTouching(d5)&&gameState==="door5"){
      r1.depth = 300
      r1.visible = true;
      pc.bounceOff(d5)
      r1.scale = 0.5;
  r1.changeImage("riddle8",r8img)
  a1.visible = true 
  a2.visible = true
  a1.scale = 0.05
  a2.scale = 0.05
  a1.changeImage("r5",no18)
  a2.changeImage("r52",no27)
    
    }
    if(mousePressedOver(a1)&&gameState==="door5"){
      d5.destroy();
      a1.visible = false
      a2.visible = false
      r1.visible = false
      loss1.visible = false
      gameState = "door6"
    }
    if(mousePressedOver(a2)&&gameState==="door5"){
      loss1.visible=true;
       a2.visible=false;
       a1.visible=false;
       pc.x = 50
       pc.y = 50
    
  }
  if(pc.isTouching(d6)){

  }
  
 
  createEdgeSprites();
  pc.bounceOff(w1);
 
  pc.bounceOff(w3)
  pc.bounceOff(w4)
  pc.bounceOff(w5)

  pc.bounceOff(w7)
  
  drawSprites();
}