class Form{

    constructor(){

    }





display(){
var title = createElement('h1');
title.html("Car Racing Game");
title.position(500,100)
var input=createInput("name")
input.position(500,250)
var button=createButton("play")
button.position(600,400)
var greet=createElement("h3");

if(input.value()!==null){


button.mousePressed(function(){
    input.hide();
    button.hide();
    var name = input.value();
    playercount+=1
    player.update(name);
    player.updateCount(playercount);
    greet.html("Hello "+ name)
    greet.position(500,450);
})

}



}

}