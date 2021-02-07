class Game{
    constructor(){}
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
          gameState = data.val();
        })
    
      }
    
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
 async start(){
    if(gameState===1){
 player =new Player();
 
 
 //form.show();
    }
   
}
play(){
    if(mousePressedOver(button1)){
        wall.velocityY=-5;
        if(wall.y<=10){
        gameState=1;
        button1.visible=false;
        wall.destroy();
       }
}
}
level1(){
  console.log('you are ready to go');
}

level2(){
  console.log('you are ready to go');
}

level3(){
  console.log('you are ready to go');
}

level4(){
  console.log('you are ready to go');
}

level5(){
  console.log('you are ready to go');
}

level6(){
  console.log('you are ready to go');
}
}