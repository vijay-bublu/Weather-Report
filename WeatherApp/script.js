let input = document.getElementById("location")
let btn = document.getElementById("btn")
let temperature = document.getElementById("temp_num")
let humidity = document.getElementById("humid_num")
let description = document.getElementById("weather_description")
let img = document.getElementById("img")
let form = document.getElementById("search")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
})
console.log(input)
console.log(btn)
console.log(temperature)
console.log(humidity)

let checkWeatherDetails = async (city)=>{
    let key = "5396dc24488bdf9745431426bbecfcda"
     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    let weather1 = await fetch(url)
    let weather2 = await weather1.json()
    // console.log(weather2)
    // console.log(weather2.main.temp)
    // console.log(weather2.main.humidity)
    console.log(weather2.weather[0].main)
    description.innerHTML=`${weather2.weather[0].main}`
   let celsius = Math.round(weather2.main.temp-273)
    temperature.innerHTML=`${celsius} <sup>o</sup> C`
    humidity.innerHTML=`${weather2.main.humidity}%`
    console.log(description)
    switch (weather2.weather[0].main) {
        case 'Haze':
            img.src='./Haze.png'
            break;
        case 'Snow':
            img.src='./Snow.png'
            break;
        case "Clouds":
            img.src='./clouds.png'
            break;
        case "Clear":
            img.src='./clear.png'
            break;
        default:
            img.src="./Haze.png"
            break;
    }
}

btn.addEventListener("click",()=>{
    checkWeatherDetails(input.value)
})