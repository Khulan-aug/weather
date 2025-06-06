const apiKey = "dfe2aa556109ea704928dec09dfc1283" 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const CityName = document.querySelector(".CityName")
const searchBtn = document.querySelector(".search button")
const hotiinNer = document.querySelector(".city")
const degree = document.querySelector(".Temperature")
const weatherIcon = document.querySelector(".weather-icon")

console.log(degree)
async function checkweather(city) {
    const response = await fetch(apiUrl +city + `&appid=${apiKey} `)

    const data = await response.json ()
    hotiinNer.innerHTML = data.name
    degree.innerHTML = data.main.temp + "℃"

    if (data.weather[0].main === "Rain") {
        weatherIcon.src = "images/rain.png"
    } else if (data.weather[0].main === "Snow") {
        weatherIcon.src = "images/snow.png"
    } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "images/clear.png"
    } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "images/drizzle.png"
     } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "images/mist.png"
    }

    console.log()

    console.log(data)
}

searchBtn.addEventListener("click", ()=> {
    checkweather(CityName.value)
    console.log(CityName.value)
})