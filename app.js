const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");
const am_pm = document.querySelector("#am-pm");
const dateObj = new Date();
var sec = dateObj.getSeconds();
var min = dateObj.getMinutes();
var hour = dateObj.getHours();

window.addEventListener("DOMContentLoaded", timeFunc);

function timeFunc(){
    var time = setInterval(function(){
        sec++;
        if(sec>59){
           sec = 0;
           min++;
           if(min>59){
               min=0;
               hour++;
           }
        }
        showTime();
    }, 1000);
    if(hour>12){
        am_pm.innerHTML = "pm";
    }
    else {
        am_pm = "am";
    }
}

function showTime(){
    if(sec<=9){
        seconds.innerHTML = '0'+sec;
    } 
    else {
        seconds.innerHTML = sec;
    }
    if(min<=9){
        minutes.innerHTML = '0'+min;
    } 
    else {
        minutes.innerHTML = min;
    }
    hours.innerHTML = hour;
}