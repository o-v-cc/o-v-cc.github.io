var inc = 1000;

clock();

function clock() {
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();

    const hour = document.getElementsByClassName("hour");
    const minute = document.getElementsByClassName("minute");

    if (hour.length != 0 && minute.length != 0) {
        hour[0].innerHTML = hours;
        minute[0].innerHTML = minutes;
    }
}

setInterval(clock, inc);