function refreshWeather(response){//4. response von refreshWeather
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement=document.querySelector("#description");//für Beschreibung des Wetters
    let humidityElement=document.querySelector("#humidity");
    let windSpeedElement=document.querySelector("#wind-speed");
    let timeElement=document.querySelector("#time");
    let date = new Date(response.data.time *1000);
    

    cityElement.innerHTML = response.data.city;// so vermeide ich, dass Schreibfehler in der Stadt, also nur Groß und Kleinschreibung angezeigt werden, weil so wird immer die in der API city Data Stadt angegeben
    timeElement.innerHTML = formatDate(date);
    descriptionElement.innerHTML=response.data.condition.description;
    humidityElement.innerHTML=`${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML=`${response.data.wind.speed}km/h`;
    temperatureElement.innerHTML = Math.round(temperature); // temperstur runden
    }

    function formatDate(date) {
        let minutes = date.getMinutes();
        let hours = date.getHours();
        let days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        let day = days[date.getDay()];
      
        if (minutes < 10) {
          minutes = `0${minutes}`;//if minutes are less than 10, add a 0
    }
    return `${day}, ${hours}:${minutes}, `;
}

function searchCity(city){    //1. make api call and update interface
    let apiKey = "o1b51294bd100044e1tab17f08833d34";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);// 3. hier bekommen wir die URL über axios und dann für refreshWeather eine function machen
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    
    searchCity(searchInput.value); //2. someone searches on my website the city it is going to call the handleSearchSubmit function and submit it, und dann der value of search input is going to the searchCity function, that search City funtion is getting a call now, what does it with it?
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Berlin");//default city am Anfang wird jetzt immer Berlin sein
