let timer;
let periodDuration = 10 * 60;

function startPeriod(period) {
    clearInterval(timer);
    const timerElement = document.getElementById("timer");

    const updateTimer = () => {
        const minutes = Math.floor(periodDuration / 60);
        const seconds = periodDuration % 60;
        timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;

        if (periodDuration === 0) {
            clearInterval(timer);
            alert(`Period ${period} ended`);
        } else {
            periodDuration--;
        }
    };

    updateTimer();
    timer = setInterval(updateTimer, 1000);
}

function resetPeriods() {
    periodDuration = 10 * 60;
    clearInterval(timer);
    document.getElementById("timer").textContent = "10:00";
}

document.addEventListener("DOMContentLoaded", () => {
    resetPeriods();
});
