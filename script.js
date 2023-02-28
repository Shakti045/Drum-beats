let v1=document.getElementById("d1");
v1.addEventListener("click",function(){
  sound(v1.innerText);
  v1.classList="animation";
  setTimeout(function() {
    v1.classList.remove("animation");
  }, 100);
});

let v2=document.getElementById("d2");
v2.addEventListener("click",function(){
  sound(v2.innerText);
  v2.classList="animation";
  setTimeout(function() {
    v2.classList.remove("animation");
  }, 100);
});

let v3=document.getElementById("d3");
v3.addEventListener("click",function(){
  sound(v3.innerText);
  v3.classList="animation";
  setTimeout(function() {
    v3.classList.remove("animation");
  }, 100);
});

let v4=document.getElementById("d4");
v4.addEventListener("click",function(){
  sound(v4.innerText);
  v4.classList="animation";
  setTimeout(function() {
    v4.classList.remove("animation");
  }, 100);
});

let v5=document.getElementById("d5");
v5.addEventListener("click",function(){
  sound(v5.innerText);
  v5.classList="animation";
  setTimeout(function() {
    v5.classList.remove("animation");
  }, 100);
});

let v6=document.getElementById("d6");
v6.addEventListener("click",function(){
  sound(v6.innerText);
  v6.classList="animation";
  setTimeout(function() {
    v6.classList.remove("animation");
  }, 100);
});


function sound(x){
    if(x=="S"){
        let a1=new Audio("sounds/mixkit-achievement-win-drums-555.wav");
        a1.play();
    }else if(x=="H"){
        let a2=new Audio("sounds/mixkit-angelic-drum-roll-573.wav");
        a2.play();
    }else if(x=="A"){
        let a3=new Audio("sounds/mixkit-atmospheric-prelude-drum-roll-569.wav");
        a3.play();
    }else if(x=="K"){
        let a4=new Audio("sounds/mixkit-atmospheric-wind-drum-roll-swoosh-576.wav");
        a4.play();
    }else if(x=="T"){
        let a5=new Audio("sounds/mixkit-bad-joke-drums-2893.wav");
        a5.play();
    }else{
        let a6=new Audio("sounds/mixkit-cinematic-transition-swoosh-heartbeat-trailer-488.wav");
        a6.play();
    }
}
