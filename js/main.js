console.log ("javascript is working!")
//jQuery ready function
$(document).ready(function(){

  //cycle through instruction screens
function instructionCycle1(){
  $("div.bottom-rules").html(`<img src= "./images/howtoplay2.png"></img> `);
  console.log("cycle one completed");
};
function instructionCycle2(){
  $("div.bottom-rules").html(`<img src= "./images/howtoplay3.png"></img> `);
  console.log("cycle two completed");
};
function instructionCycle3(){
  $("div.bottom-rules").html(`<img src= "./images/howtoplay4.png"></img> `);
  console.log("cycle three completed");
};
function instructionCycle4(){
  $("div.bottom-rules").html(`<img src= "./images/howtoplay5.png"></img>`);
  console.log("cycle four completed");
};
function instructionCycle5(){
  $("div.bottom-rules").html(`<img src= "./images/howtoplay1.png"></img> `);
  console.log("cycle five completed");
};

function cycleThroughInstructions(){
setTimeout(instructionCycle1, 5000);
setTimeout(instructionCycle2, 10000);
setTimeout(instructionCycle3, 15000);
setTimeout(instructionCycle4, 20000);
setTimeout(instructionCycle5, 25000);
}

cycleThroughInstructions();

// $("button.next").on('click', function(){
// instructionCycle1();
// });
//close jQuery ready function
});
