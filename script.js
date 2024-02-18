

const key = "732b71c14678b290aaa6e8a73245275b"

function dataScreen(data) {
    console.log(data)
    document.querySelector(".city").innerHTML = "Tempo em " + data.name 
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "ºC"
    document.querySelector(".prevision-text").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = "Humidade " + data.main.humidity + "%"
    document.querySelector(".img-climate").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}



async function seachCity(city) {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    
    dataScreen(data) 

}


function clickButton() {
    const city = document.querySelector(".input-city").value;

    seachCity(city);
}