/*Timer Stuff*/

var countDownDate = new Date("Jan 13, 2020 18:00:00").getTime();

var x = setInterval(function(){
    var now = new Date().getTime();

    var difference = countDownDate - now;

    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    if(minutes < 10){
        minutes = "0"+minutes;
    }
    if(seconds < 10){
        seconds = "0"+seconds;
    }

    document.getElementById("timearea").innerHTML = days + " days " + hours + " hours " + minutes + " minutes and " + seconds + " seconds!";

    if (difference < 0){
        clearInterval(x);
        document.getElementById("timearea").innerHTML = "right now!";
        document.getElementById("message").style.display = "none";
    }
}, 1000);

/*Heart Moving Stuff*/
var heart1 = document.getElementById("heart1");
var heart2 = document.getElementById("heart2");
var heart3 = document.getElementById("heart3");
document.addEventListener("mousemove",getMouse);

heart1.style.position = "absolute";
var heart1x = 0;
var heart1y = 0;

heart2.style.position = "absolute";
var heart2x = 0;
var heart2y = 0;

heart3.style.position = "absolute";
var heart3x = 0;
var heart3y = 0;

setInterval(followMouse, 50);

var mouseX = 0;
var mouseY = 0;

function getMouse(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
}

function followMouse(){
    var distX1 = mouseX - heart1x;
    var distY1 = mouseY - heart1y;

    var distX2 = mouseX - heart2x;
    var distY2 = mouseY - heart2y;

    var distX3 = mouseX - heart3x;
    var distY3 = mouseY - heart3y;

    heart1x += distX1/5;
    heart1y += distY1/5;

    heart2x += distX2/3;
    heart2y += distY2/3;

    heart3x += distX3/1;
    heart3y += distY3/1;

    heart1.style.left = heart1x + "px";
    heart1.style.top = heart1y + "px";

    heart2.style.left = heart2x + "px";
    heart2.style.top = heart2y + "px";

    heart3.style.left = heart3x + "px";
    heart3.style.top = heart3y + "px";
}