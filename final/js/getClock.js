const clock=document.querySelector('#clockSpan')

function getClock() {
    const getTime = new Date();
    const hours = String(getTime.getHours()).padStart(2,'0');
    const minutes = String(getTime.getMinutes()).padStart(2,'0');
    const seconds = String(getTime.getSeconds()).padStart(2,'0');

    clock.innerText=`${hours}:${minutes}:${seconds}`

}

setInterval(getClock, 1000);
