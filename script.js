// ===============================
// GOOGLE FORM
// ===============================

function sendAnswer(answer){

    let name = document.getElementById("guestName").value;

    if(name.trim()==""){
        alert("Атыңызды жазыңыз 🤍");
        return;
    }

    let url =
    "https://docs.google.com/forms/d/e/1FAIpQLSefdVfssikn6Xwv8GEgOVxNdrPP0BoK6_GeVzSO66DtGM8URQ/formResponse?" +
    "entry.539617390=" + encodeURIComponent(name) +
    "&entry.180167126=" + encodeURIComponent(answer);


    fetch(url,{
        method:"POST",
        mode:"no-cors"
    });


    alert("Рақмет 🤍\nЖауабыңыз қабылданды");


    document.getElementById("guestName").value="";

    document.querySelectorAll('input[name="answer"]').forEach(r=>{
        r.checked=false;
    });

}


// ===============================
// КНОПКА ЖІБЕРУ
// ===============================

function submitSurvey(){

    let selected=document.querySelector('input[name="answer"]:checked');


    if(!selected){
        alert("Жауапты таңдаңыз 🤍");
        return;
    }


    sendAnswer(selected.value);

}


// ===============================
// MUSIC
// ===============================

let music=new Audio("song.mp3");

music.loop=true;

let playing=false;


function playMusic(){

    let button=document.querySelector(".music-btn");


    if(!playing){

        music.play();

        button.innerHTML="❚❚";

        playing=true;

    } else {

        music.pause();

        button.innerHTML="♫";

        playing=false;

    }

}
