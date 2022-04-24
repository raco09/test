
const loginForm=document.querySelector('#loginForm');
const loginInput=document.querySelector('#loginInput');
const greeting=document.querySelector('#greeting');
const savedUserNick = localStorage.getItem('userNick');

const weather_location=document.querySelector('#weather_location')
const weather_weather=document.querySelector('#weather_weather')
const API_KEY = 'd7dea7a37d8f19f0199168362e50687a';



function loginSubmit(event){
    event.preventDefault();
    const userNick = loginInput.value;
    localStorage.setItem('userNick', userNick);
    loginInput.classList.add('hidden');
    showGreeting(userNick)
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}

function showGreeting(userNick){
    greeting.innerText=`반갑습니다 . . . [${userNick}]님`
    greeting.classList.remove('hidden');
}



function onGeoOk(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data.name, data.weather[0].main, (data.main.temp-273.15).toFixed(1)); // 지역, 날씨, 온도

            weather_location.innerHTML=`<b>[${data.name}]</b>에 계시는군요 .`
            weather_weather.innerHTML=`날씨는 <b>[${data.weather[0].main}]</b>이며, 현재 온도는 <b>[${(data.main.temp-273.15).toFixed(1)}]</b>입니다!`
        })
}

function onGeoError() {
    alert("Location info loading error . . .")
}





if(savedUserNick != null) { // 있으면
    showGreeting(savedUserNick)
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
} else {  // 없으면
    loginInput.classList.remove('hidden');
    loginForm.addEventListener('submit', loginSubmit)
}
