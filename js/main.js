console.log ("javascript is working!")
//jQuery ready function
$(document).ready(function(){

  //cycle through instruction screens
function instructionCycle1(){
  $("div.bottom-rules").html(`<img src= "./images/howtoplay2.png"></img> `);
};
function instructionCycle2(){
  $("div.bottom-rules").html(`<img src= "./images/howtoplay3.png"></img> `);
};
function instructionCycle3(){
  $("div.bottom-rules").html(`<img src= "./images/howtoplay4.png"></img> `);
};
function instructionCycle4(){
  $("div.bottom-rules").html(`<img src= "./images/howtoplay5.png"></img>`);
};
function instructionCycle5(){
  $("div.bottom-rules").html(`<img src= "./images/howtoplay1.png"></img> `);
};

$("button.next").on('click', function(){
instructionCycle1();
});
//close jQuery ready function
});
