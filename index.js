 window.addEventListener("load", () => {
     "use strict";
     const sounds = document.querySelectorAll(".sound");//return an array
     const pads = document.querySelectorAll(".pads div");
     const visual = document.querySelector(".visual");
     const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#73d360"
     ];

     //now for the sounds
     pads.forEach((pad, index) => {
         pad.addEventListener("click", function(){
            sounds[index].currentTime= 0;
            sounds[index].play();

            createBubbles(index);
         });
     });

     //function for make bubbles
     const createBubbles = index => {
         const bubble = document.createElement("div");
         visual.appendChild(bubble);
         bubble.style.backgroundColor = colors [index];
         bubble.style.animation = "jump 1s ease";
         bubble.addEventListener("animationend", function(){
             visual.removeChild(this);
         });
     };

 });
