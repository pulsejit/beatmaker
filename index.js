 window.addEventListener("load", ()=>{
     const sounds = document.querySelectorAll(".sound");//return an array
     const pads = document.querySelectorAll(".pads div");

     //now for the sounds
     pads.forEach((pad, index) =>{
         pad.addEventListener('click', function(){
            sounds[index].currentTime= 0;
            sounds[index].play();
         });
     });
 });
