var inc = 1000;

clock();

function clock() {
    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes.toString();
    }

    const hour = document.getElementsByClassName("hour");
    const minute = document.getElementsByClassName("minute");

    if (hour.length != 0 && minute.length != 0) {
        hour[0].innerHTML = hours;
        minute[0].innerHTML = minutes;
    }
}

setInterval(clock, inc);