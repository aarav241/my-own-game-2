class Form{
    constructor(){
       // if(gamestate ===1){
this.input=createInput("");
this.button=createButton('Tap to continue');
this.button2=createButton('Tap to continue');
this.button3=createButton('Tap to continue');
this.reset=createButton('reset');
this.title=createElement('h1');
this.greeting=createElement('h4');
this.name=createElement('h4'); 

}


    hide(){
        this.input.hide();
this.button.hide();
this.title.hide();
this.greeting.hide();
    }

    show(){
        this.title.html("Covert operation");
        this.title.position(windowWidth/2-100,50);

        this.name.html("Enter your name");
        this.name.position(windowWidth/2-50,windowHeight/2-100);
//if(gamestate===1){
        this.input.position(windowWidth/2-60,windowHeight/2);
        this.button.position(windowWidth/2-30,windowHeight/2+100);
        this.reset.position(displayWidth/2 - 300, 10);

this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.name.hide();

player.name=this.input.value();
            player.update();

            this.greeting.style.font= "italic bold 20px arial,serif"
            this.greeting.html("Hii Soldier, let's save some lives in syria");
            this.greeting.position(windowWidth/2+200,windowHeight-80);
          // this.greeting= document.getElementById("demo").style.font = "italic bold 20px arial,serif";
            this.button2.position(windowWidth/2+280,windowHeight-30);
           
        })

this.button2.mousePressed(()=>{ 

wall2.velocityY=-5
if(wall2.y<=100){
    wall2.destroy();
this.title.hide();
    this.button2.hide();
this.greeting.hide();
gameState=2;

game.update(2);

this.button3.position(windowWidth/2-100,windowHeight/2+100);

}
})
this.button3.mousePressed(()=>{
    gameState=3;
    game.update(3);
    this.button3.hide();
    wall33.destroy();
})
this.reset.mousePressed(()=>{
game.update(0);
})    
}
}