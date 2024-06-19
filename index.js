let workTitle = document.getElementById('work');
let breakTitle = document.getElementById('break');

let workTime = 25;
let breakTime = 5;

let seconds = "00";
let timerInterval;
let isPause = false;
let workminutes, breakminutes, breakCount;
let isStart = false;
window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;
    workTitle.classList.add('active');
}

let timerFunction = () => {};



function start() {
    if(!isStart){
    if (isPause === false) {
        seconds = 59;
        workminutes = workTime - 1;
        breakminutes = breakTime - 1;
        breakCount = 0;
    }

    timerFunction = () => {
        document.getElementById('minutes').innerHTML = workminutes;
        document.getElementById('seconds').innerHTML = seconds;

        seconds--;
        if (seconds === 0) {
            workminutes--;
            if (workminutes === -1) {
                if (breakCount % 2 === 0) {
                    workminutes = breakminutes;
                    breakTitle.classList.add('active');
                    workTitle.classList.remove('active');
                    // alert("Breaktime has started");
                    breakCount++;
                } else {
                    workminutes = workTime;
                    breakCount++;
                    breakTitle.classList.remove('active');
                    workTitle.classList.add('active');
                }
            }
            seconds = 59;
        }
    }

    timerInterval = setInterval(timerFunction, 1000);
    isPause = false
    isStart = true;
}
}

function pause() {
    clearInterval(timerInterval);
    isPause = true;
    isStart = false;
}