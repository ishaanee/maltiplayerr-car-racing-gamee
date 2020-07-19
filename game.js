class Game {
    constructor(){}

     getstate ()
     {
         var gamestateref=database.ref('gamestate');
         gamestateref.on("value",function(data){
            gamestate=data.val()

         })
     }
     update(state)
     {
         database.ref ('/').update({
             gamestate:state
         })

         
     }
async start ()
{
    if (gamestate===0)
    {
        player=new Player();
        var playercountref=await database.ref('playercount').once("value");
    if (playercountref.exists()){
        count=playercountref.val();
        player.getcount();}
        form=new Form();
        form.display();
    }
    car1=createSprite(100,200)
    car1.addImage("car",car1img);
    car2=createSprite(300,200)
    car2.addImage("car",car2img);
    car3=createSprite(500,200)
    car3.addImage("car",car3img);
    car4=createSprite(700,200)
    car4.addImage("car",car4img);
    cars=[car1,car2,car3,car4];
}

play(){
    form.hide();
    //text("Game start", 120, 100);
    Player.getplayerinfo();
    if (allplayers!==undefined){
       // background("");
 image(track,0,displayHeight*2,displayWidth,displayHeight);
        var index=0;
        var x=0;
        var y;
       //var displayposition =130
        for(var plr in allplayers)
        {
            index=index+1;
            x=x+200
            y=displayHeight-allplayers[plr].distance;
            cars[index-1].x=x
            cars[index-1].y=y
            if(index===player.index)
            {
                cars[index-1].shapeColor="red";
                camera.position.x=displayWidth/2;
                camera.position.y=cars[index-1].y
            }


        /*    if (plr==="player"+player.index)
            {
                fill("red");
            }
            else{
                 fill("black");
            }


        displayposition+=20;
        textSize(20)
        text(allplayers[plr].name+":"+allplayers[plr].distance,120,displayposition)*/
    }
}
    if (keyIsDown (UP_ARROW)&&(player.index!=null)){
       player.distance+=50;

       player.update();
    }
drawSprites();
}}

