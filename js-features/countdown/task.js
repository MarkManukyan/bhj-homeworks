let time = 59;

const timer = setInterval(() => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    document.getElementById("timer").innerHTML = formattedTime;

    time--;

    if (time < 0) {
        clearInterval(timer);
        alert('Время истекло! Нажмите ОК для перехода!');
        location.assign("https://en.wikipedia.org/wiki/Better_Call_Saul");
    }

}, 100);