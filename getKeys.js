var canvas = document.querySelector('canvas');
var brush = canvas.getContext('2d');
brush.fillStyle = 'lightgray';
brush.fillRect(0,0,600,400);
var x = 20;
var y = 20;

function drawCircle(x,y,radius){
    brush.fillStyle = 'blue';
    brush.beginPath();
    brush.arc(x,y,radius,0,2*Math.PI);
    brush.fill();
}

function cleanScreen(){
    brush.clearRect(0,0,600,400);
}

function updateScreen(){
    cleanScreen();
    drawCircle(x,y,10);
}

setInterval(updateScreen,20);
