let hr = 0;
let min = 0;
let sec = 0;
let timer = null;

function start() {

    if (timer != null) {
        return; 
    }

    timer = setInterval(function () {

        sec++;

        if (sec == 60) {
            sec = 0;
            min++;
        }

        if (min == 60) {
            min = 0;
            hr++;
        }
        let seczero=sec<10? "0" :"";
        let minzero=min<10?"0":"";
        let hrzero=min<10?"0":"";

        document.getElementById("time").innerHTML =
           `${hrzero}${hr} : ${minzero}${min} :${seczero}${sec}`;

    }, 1000);
}

function pause() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    clearInterval(timer);
    timer = null;
    hr = 0;
    min = 0;
    sec = 0;
    document.getElementById("time").innerHTML = "00 : 00 : 00";
}