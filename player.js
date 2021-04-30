class Player{

constructor(){

}
getCount(){
    var playcount=database.ref("playercount")
    playcount.on("value",function(data){
        playercount=data.val()
    })
    
}

updateCount(player1){
 database.ref("/").update({
playercount:player1

 })
}

update(name){
    var playerindex = "player"+playercount;
    database.ref(playerindex).set({
        name : name
    })
}

}