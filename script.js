let timer = document.getElementById("timer");

function clock() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let day = date.getDay()
    let mon = date.getMonth();
    let year = date.getFullYear()
    // console.log(h, m, s);
    // console.log(ampm);
    if (h==0) {
        timer.innerHTML = `${mon}/${day}/${year}, ${h+12}:${m}:${s} AM`;   
    }
    if (h > 0 && h < 12) {
        timer.innerHTML = `${mon}/${day}/${year}, ${h}:${m}:${s} AM`;   
    }
    if (h == 12) {
        timer.innerHTML = `${mon}/${day}/${year}, ${h}:${m}:${s} PM`;   
    }
    if (h>12 && h < 24) {
        timer.innerHTML = `${mon}/${day}/${year}, ${h-12}:${m}:${s} PM`;  
    }

    // setTimeout(clock, 1000)
}
// clock();

setInterval(() => {
    clock()
}, 1000);