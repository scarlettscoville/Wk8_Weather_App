const apiKey = "2381faaf419a7518890f7f324b6a3d32"

const locationWeather = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    let zip = e.target.zip.value
    const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apiKey}&units=imperial`, {
        method: 'GET',
    })
    const result = await response.json()
    console.log(result)

    // document.getElementById('city').innerHTML = result.weather[0].name
    document.getElementById('high_temp').innerHTML = Math.round(result.main.temp_max) + "°";
    document.getElementById('low_temp').innerHTML = Math.round(result.main.temp_min) + "°" ;
    document.getElementById('forecast').innerHTML = result.weather[0].main
    document.getElementById('humidity').innerHTML = result.main.humidity + "%"
};

document.getElementById('search').addEventListener('submit', locationWeather)


