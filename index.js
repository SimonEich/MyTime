document.getElementById("Date").addEventListener("click",dat);
document.getElementById("Time").addEventListener("click",tim);
document.getElementById("Timer").addEventListener("click",timer);
document.getElementById("Stopwatch").addEventListener("click",stopwatch);
document.getElementById("start").addEventListener("click",timer);

//---Variablen
var state = "Start";
var wert = "startwert";
var timert ="";
var [ milseconds, seconds, minutes, hours ] = [0,0,0,0];
var display = document.querySelector('.display')
var stopwatch = null;
var [ milseconds, seconds, minutes, hours ] = [0,0,0,0];
var display = document.querySelector('.display')
var stopwatch = null;

const start = document.querySelector('.start')
const pause = document.querySelector('.pause')
const reset = document.querySelector('.reset')

start.addEventListener('click', () => {
    if(stopwatch!==null){
        clearInterval(stopwatch)
    }
    stopwatch = setInterval(startButton, 10);
})

pause.addEventListener('click', () => {
    clearInterval(stopwatch)
})

reset.addEventListener('click', () => {
    [ seconds, minutes, hours ] = [0, 0, 0]
    document.querySelector('.display').innerHTML = '00 : 00 : 00 : 00'
    clearInterval(stopwatch)
})

function startButton(){
    milseconds+=1
    if (milseconds == 100) {
        milseconds = 0
        seconds++

        if(seconds == 60){
            seconds = 0
            minutes++

            if(minutes == 60){
                minutes = 0
                hours++
            }
        }
    }

    var h = hours < 10 ? "0" + hours : hours
    var m = minutes < 10 ? "0" + minutes : minutes
    var s = seconds < 10 ? "0" + seconds : seconds
    var ms = milseconds < 10 ? "0" + milseconds : milseconds

    display.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`
}

showdatenot();
showstopnot();
show();

function tim() {
  show();
  showdatenot();
  showzeit();
  showstopnot();
  state = "Time";
}

function dat() {
  state = "Datum";
  showdatenot();
  showzeit();
  showstopnot();
  show();

}

function timer() {
  state = "Date Calculator";
  showdate();
  showstopnot();
  showzeit();
  show();
  timing();
}

function stopwatch() {
  state = "Stopwatch";
  showdatenot();
  showzeitnot();
  showstop();
  show();
}

//

function myTimer() {
  const d = new Date();
  time = d.toLocaleTimeString();
  return time;
}


function timing(){

// Update the count down every 1 second
var x = setInterval(function(){
  var countDownDate = new Date(document.getElementById("end").value).getTime();

  // Get today's date and time
  var now = new Date(document.getElementById("start").value).getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display the result in the element with id="demo"
  timert = days + "  day" ;
}, 1000)

  return timert;
}
function showdate() {
  var x = document.getElementById("div");
  x.style.display = "block";
}
function showdatenot() {
  var x = document.getElementById("div");
  x.style.display = "none";
}
function showstop() {
  var x = document.getElementById("divv");
  x.style.display = "block";
}
function showstopnot() {
  var x = document.getElementById("divv");
  x.style.display = "none";
}
function showzeit() {
  var x = document.getElementById("Zeit");
  x.style.display = "block";
}
function showzeitnot() {
  var x = document.getElementById("Zeit");
  x.style.display = "none";
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

    case "Date Calculator":
    wert = timing();
    break;

  }

  document.getElementById("h1").innerHTML = state;
  document.getElementById("Zeit").innerHTML = wert;
  }

  const myInterval = setInterval(show, 1000);
