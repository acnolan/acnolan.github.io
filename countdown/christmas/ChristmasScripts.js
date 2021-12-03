// A little script to set up the wonder Christmas countdown

let now = new Date();
let month = now.getMonth();
let day = now.getDate();

if(month === 11){
    document.getElementById("finalLine").innerHTML="<h3>Come back tomorrow for more!</h3>";
    if(day >= 25){
        document.getElementById("openingLine").innerHTML="<p>On the 12th day of Cutesmas my true love gave to me...</p>";
        document.getElementById("finalLine").innerHTML="<h1 id='MerryChristmas'>Merry Christmas Maddi! I'll see you in a few days!!!</h1>";
        displayImages(["twelve","eleven","ten","nine","eight","seven","six","five","four","three","two","one"]);
    }else if(day >= 24){
        document.getElementById("openingLine").innerHTML="<p>On the 11th day of Cutesmas my true love gave to me...</p>";
        displayImages(["eleven","ten","nine","eight","seven","six","five","four","three","two","one"]);
    }else if(day >= 23){
        document.getElementById("openingLine").innerHTML="<p>On the 10th day of Cutesmas my true love gave to me...</p>";
        displayImages(["ten","nine","eight","seven","six","five","four","three","two","one"]);
    }else if(day >= 22){
        document.getElementById("openingLine").innerHTML="<p>On the 9th day of Cutesmas my true love gave to me...</p>";
        displayImages(["nine","eight","seven","six","five","four","three","two","one"]);
    }else if(day >= 21){
        document.getElementById("openingLine").innerHTML="<p>On the 8th day of Cutesmas my true love gave to me...</p>";
        displayImages(["eight","seven","six","five","four","three","two","one"]);
    }else if(day >= 20){
        document.getElementById("openingLine").innerHTML="<p>On the 7th day of Cutesmas my true love gave to me...</p>";
        displayImages(["seven","six","five","four","three","two","one"]);
    }else if(day >= 19){
        document.getElementById("openingLine").innerHTML="<p>On the 6th day of Cutesmas my true love gave to me...</p>";
        displayImages(["six","five","four","three","two","one"]);
    }else if(day >= 18){
        document.getElementById("openingLine").innerHTML="<p>On the 5th day of Cutesmas my true love gave to me...</p>";
        displayImages(["five","four","three","two","one"]);
    }else if(day >= 17){
        document.getElementById("openingLine").innerHTML="<p>On the 4th day of Cutesmas my true love gave to me...</p>";
        displayImages(["four","three","two","one"]);
    }else if(day >= 16){
        document.getElementById("openingLine").innerHTML="<p>On the 3rd day of Cutesmas my true love gave to me...</p>";
        displayImages(["three","two","one"]);
    }else if(day >= 15){
        document.getElementById("openingLine").innerHTML="<p>On the 2nd day of Cutesmas my true love gave to me...</p>";
        displayImages(["two","one"]);
    }else if(day >= 14){
        document.getElementById("openingLine").innerHTML="<p>On the 1st day of Cutesmas my true love gave to me...</p>";
        displayImages(["oneS"]);
    }else{
        document.getElementById("openingLine").innerHTML="<p>The 12 Days of Cutesmas begins on December 14th! Come back then!</p>";
        document.getElementById("finalLine").innerHTML="";
    }

}else{
    document.getElementById("openingLine").innerHTML="<p>Come back in December to experience the magic!!</p>";
}

// Alternate the title colors
let original = true;
const interval = setInterval(function() {
    let reds = document.getElementsByClassName("r");
    let greens = document.getElementsByClassName("g");
    Array.from(reds).forEach(el=>{
        if(original){
            el.style.color="green";
        }else{
            el.style.color="red";
        }
    });
    Array.from(greens).forEach(el=>{
        if(original){
            el.style.color="red";
        }else{
            el.style.color="green";
        }
    });
    original = !original;
  }, 1000);

/** Display the different days **/
function displayImages(idArray){
    idArray.forEach(id => {
        document.getElementById(id).style.display="block";
    });

    // Show the catsmas stuff
    document.getElementById("sprout1").style.display="block";
    document.getElementById("sprout2").style.display="block";
    document.getElementById("bean1").style.display="block";
    document.getElementById("bean2").style.display="block";
    document.getElementById("catsmasTitle").style.display="block";
    document.getElementById("cataudio").style.display="inline";
    document.getElementById("audio").style.display="none";
    document.getElementById("crossedTitle").style.display="block";
    document.getElementById("normalTitle").style.display="none";
    document.title = "The 12 Days of C̵u̵t̵e̵s̵m̵a̵s̵ Catsmas";
}

/** Play Music **/
function playMusicNote(e, soundByte){
    new Audio(soundByte).play();
    for(i=0;i<15;i++){
        let note = document.createElement('img');
        let noteType = Math.floor((Math.random() * 3)+1);
        if (noteType === 1){
            note.src="./images/note1.png";
        }else if(noteType===2){
            note.src="./images/note2.png";
        }else{
            note.src="./images/note3.png";
        }
        note.style.width = "32px";
        note.style.height = "32px";
        note.style.position = "absolute";
        let randomX = Math.floor(Math.random() * 270 - 135);
        let randomY = Math.floor(Math.random() * 270 - 135);
        note.style.left = e.clientX + randomX + "px";
        note.style.top = e.clientY + randomY +  "px";
        note.style.pointerEvents = "none";
        let randomFade = (Math.random() * 2 + 1);
        note.style.animation = "fadeout "+randomFade+"s linear forwards";
        document.body.appendChild(note);
    }
}
