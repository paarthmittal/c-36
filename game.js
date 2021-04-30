class Game{

constructor(){

}

getState(){
var refergame = database.ref("gamestate")
refergame.on("value",function(data){
    gamestate = data.val();
})
}

update(state){
database.ref("/").update({
    gamestate : state
})
}
start(){
    if(gamestate===0){
        player=new Player()
        player.getCount()
        form=new Form()
      
        form.display()
    }

}



}
