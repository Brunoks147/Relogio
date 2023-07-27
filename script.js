const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

const relogio = setInterval (function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours(); //horas
    let mn = dateToday.getMinutes(); //minutos
    let sc = dateToday.getSeconds(); //segundos

    if (hr < 10) hr = '0' + hr;

    if (mn < 10) mn = '0' + mn;

    if (sc < 10) sc = '0' + sc;

    hour.textContent = hr;
    min.textContent = mn;
    sec.textContent = sc;
});