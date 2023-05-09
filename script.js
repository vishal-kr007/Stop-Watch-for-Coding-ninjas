

var image = document.querySelector('.image');   /*store address to change the image on play/pause */
let mark = true;    /*bool variable to check stopwatch is running or not */

let [milliSeconds, seconds, minutes] = [0, 0, 0];
let displayTime = document.getElementById("timer");
let timer = null;


/*Function that have logic what going inside */

function stopwatch(){
    milliSeconds++;
    if(milliSeconds == 100){
        milliSeconds = 0 ;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
        }
    }

    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliSeconds < 10 ? "0" + milliSeconds : milliSeconds;

    displayTime.innerHTML = m + "m" + ":" + s + "s" + ":" + ms + "ms";
}

/*onClick function that uses stopwatch function to play/pause */

function watch_on_off(){

    if(mark){
        image.src = 'images/pause.png';
        if(timer != null){
            clearInterval(timer);
        }
        timer = setInterval(stopwatch,10);
        mark = !mark;
    }else{
        image.src = 'images/right-arrow.png';
        clearInterval(timer);
        mark = !mark;
    }    
}

/*function which uses to clear the interval set the stop watch to default mode  */

function watch_Reset(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00m:00s:00ms";
    image.src = 'images/right-arrow.png';
    mark = !mark;
}