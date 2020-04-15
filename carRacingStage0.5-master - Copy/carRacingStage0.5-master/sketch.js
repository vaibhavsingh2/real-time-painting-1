var car1,car2,car3,car4;
var cars;
var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;
var drawing=[];

var form, player, game;
var allPlayers;

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}


function draw(){
  background(220);
if(playerCount===1){
  game.update(1);

}
if(gameState===1){
clear();
game.play();
}

      if(mouseIsPressed){
        var locate={
          x:mouseX,
          y:mouseY
        }
        drawing.push(locate);
      }
      beginShape();
      stroke(0);
      strokeWeight(10);
      for(var i=0; i<drawing.length;i++){
        vertex(drawing[i].x,drawing[i].y)
      }
      endShape();
      
}



