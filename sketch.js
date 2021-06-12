var h, w;
var board = [
    ["", "", ""], ["", "", ""], ["", "", ""]
];
var player1 = "x",
    player2 = "o";

var currentPlayer = player1;

function setup() {
    canvas = createCanvas(500, 500);
    w = width / 3;
    h = height / 3;

}

function draw() {

    background("black");
    stroke("white")
    strokeWeight(5)
    line(w, 0, w, height);
    line(w * 2, 0, w * 2, height);
    line(0, h, width, h);
    line(0, h * 2, width, h * 2)

    for (var j = 0; j < 3; j++) {

        for (var i = 0; i < 3; i++) {

            var x = w * i + w / 2;
            var y = h * j + h / 2;
var r = w/4;
var spot = board[i][j];

if (spot == player1){

line(x-r,y-r,x+r,y+r);
line (x+r,y-r,x-r,y+r);

} else if (spot == player2){

noFill();    
ellipse(x,y,r*2)

}

        }


    }


}

function keyPressed(){

console.log("yes")    

if (keyCode == 88){

var i = floor(mouseX/w);
var j = floor(mouseY/h);


if (currentPlayer == player1 ){

if (board[i][j] == ""){

board[i][j]=player1;
console.log("yes");
currentPlayer = player2;

}

}

}

if (keyCode == 79){


    var i = floor(mouseX/w);
    var j = floor(mouseY/h);


if (currentPlayer == player2 ){

    if (board[i][j] == ""){
    
    board[i][j]=player2;
    console.log("yes");
    currentPlayer = player1;

    }
    
    }
}

}
