var cue, ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10;
var pocket1, pocket2, pocket3, pocket4, pocket5, pocket6;

function preload(){}

function setup(){
    createCanvas(400, 700)

    cue = createSprite(200, 500, 30, 30)
}

function draw(){
    background('#1C6108');

    drawSprites();

    if(keyIsDown(38)){
        cue.velocityY = -5;
    } else  {
        cue.velociyY = 0;
    }
}
