var card1,card2,card3,card4;
var cardBack;
var cardImg1,cardImg2;
var score=0;
var timer=2;
var click1,click2;


function setup() {
  createCanvas(800,500);
cardImg1=loadImage("card1.jpg");
cardImg2=loadImage("card2.jpg");
cardBack=loadImage("back.jpg");

card1=createSprite(100,100);
card2=createSprite(250,100);
card3=createSprite(400,100);
card4=createSprite(550,100);

card1.addImage(cardBack);
card2.addImage(cardBack);
card3.addImage(cardBack);
card4.addImage(cardBack);

card1.addImage(cardImg1);
card2.addImage(cardImg2);
card3.addImage(cardImg2);
card4.addImage(cardImg1);




card1.scale=0.5;
card2.scale=0.5;
card3.scale=0.5;
card4.scale=0.5;
}


function draw() 
{
  background(51);

  if(frameCount%260==0){
    card1.addImage(cardBack);
    card1.scale=0.15;
    card2.addImage(cardBack);
    card2.scale=0.15;
    card3.addImage(cardBack);
    card3.scale=0.15;
    card4.addImage(cardBack);
    card4.scale=0.15;
  }
  
  drawSprites();
}


function detectLeftButton(evt) { 
   if (window.event == null) 
   {console.log("You lose"); 
    return (evt.button == 0) } 
    else {console.log("You Win")
       return (evt.button == 1); } }

function mousePressed(){
  if(keyPressed==leftClick&&World.mouseX==100){
    card1.addImage(cardImg1);
    card1.scale=0.5;
    click1="black";
  }
  if(keyPressed==leftClick&&World.mouseX==250){
    card2.addImage(cardImg2);
    card2.scale=0.5;
    click1="red";
  }
  if(keyPressed==leftClick&&World.mouseX==400){
    card3.addImage(cardImg3);
    card3.scale=0.5;
    click1="red";
  }
  if(keyPressed==leftClick&&World.mouseX==550){
    card4.addImage(cardImg4);
    card4.scale=0.5;
    click1="black";
  }
}