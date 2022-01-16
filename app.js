const finish = new Date("2022-01-23"),
    spanTimer = document.getElementById("timer");

function refreshTimer() {
    let currentTime = Date.now(),
        diff = finish - Number(currentTime),

        days = Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes = Math.floor((diff % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60) / (1000 * 60)),
        seconds = Math.floor((diff % (1000 * 60 * 60 * 24)) % (1000 * 60 * 60) % (1000 * 60) / (1000) );

    spanTimer.innerHTML = `<p>${days} дней ${hours} часов ${minutes} минут ${seconds} секунд</p>`;
}
refreshTimer();
setInterval(refreshTimer, 1000);
