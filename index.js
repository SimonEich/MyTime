document.getElementById("Date").addEventListener("click",dat);
document.getElementById("Time").addEventListener("click",tim);
document.getElementById("Timer").addEventListener("click",timer);
document.getElementById("Stopwatch").addEventListener("click",stopwatch);

//---Variablen
var state = "Start";
var wert = "startwert";
var timert ="";

function tim() {
  console.log("hi");
  state = "Time";
  show();
}

function dat() {
  state = "Datum";
  show();
}

function timer() {
  state = "Timer";
  timing();
  show();
}

function stopwatch() {
  state = "Stopwatch";
  show();
}

//

function myTimer() {
  const d = new Date();
  time = d.toLocaleTimeString();
  return time;
}


var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();


function timing(){

// Update the count down every 1 second
var x = setInterval(function(){

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display the result in the element with id="demo"
  timert = days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";
})

  return timert;
}

function show(){

  switch (state){
    case "Start":
    wert = "Ready to start!";
    break;

    case "Time":

    wert = myTimer();
    break;

    case "Datum"://
      const d = new Date();
      wert = d.getDate()+"."+ (d.getMonth() + 1) +"." + d.getFullYear();
    break;

    case "Timer":
    wert = timing();


  }

  document.getElementById("h1").innerHTML = state;
  document.getElementById("Zeit").innerHTML = wert;
  }

  const myInterval = setInterval(show, 1000);
