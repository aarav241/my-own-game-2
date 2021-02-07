var gameState=0;
let form;
var backgroundImg;
var database,player;

var wall33

function preload() {
button = loadImage("button.png");
backgroundImg = loadImage("background.png");
wallpaper = loadImage("OIP.jpg");
bj = loadImage("bj.jpg")
level1 = loadImage("level1.png")
level2 = loadImage("level2.png")
level3 = loadImage("level3.png")
level4 = loadImage("level4.png")
level5 = loadImage("level5.png")
level6 = loadImage("level6.jpg")
texti=loadImage("text.gif")
}
function setup() {
  canves = createCanvas(windowWidth,windowHeight);
  database = firebase.database();
 game= new Game();
  
 game.getState();

 wall2=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
wall2.addImage(backgroundImg);
wall2.scale=0.56;

  wall=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
wall.addImage(wallpaper);
wall.scale=3;



button1=createSprite(windowWidth/2,windowHeight/2+250,50,50);
button1.addImage(button);
button1.scale=0.15


form=new Form();


}

function draw() {
  
  
  background(bj); 
  //backgroundImg.scale=windowWidth,windowHeight;
  //form.show();
  if (gameState===1){
    form.show();
    game.update(1);
    
  }
  if(gameState===2){
    wall33=createSprite(windowWidth/2,windowHeight/2,100,100);
    wall33.addImage(texti);
  // if (gameState===3){
  //   wall33.visible=false;
  // } 
  }
    if(gameState ===3){

     

      level=createSprite(windowWidth/2-500,windowHeight/2-200,50,50);
      level.addImage(level1);
      //level.scale=0.5
      
      l2=createSprite(windowWidth/2-350,windowHeight/2-200,50,50);
      l2.addImage(level2);
      
      l3=createSprite(windowWidth/2-200,windowHeight/2-200,50,50);
      l3.addImage(level3);
      
      l4=createSprite(windowWidth/2-50,windowHeight/2-200,50,50);
      l4.addImage(level4);
      
      l5=createSprite(windowWidth/2+100,windowHeight/2-200,50,50);
      l5.addImage(level5);
      
      l6=createSprite(windowWidth/2-450,windowHeight/2+50,50,50);
      l6.addImage(level6);
      l6.scale=0.25
      
      

    }
 
 game.start();
 game.play();
 
 
 
drawSprites();
}
// function loadVideo(id)
// {
//     var video = document.getElementById('video');
    //var mp4 = document.getElementById('mp4');

  //  mp4.src = "vidz/" + id;

//     video.load();
//     video.play();
// }
