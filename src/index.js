function refreshWeather(response){//4. response von refreshWeather
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature); // temperstur runden
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

searchCity("Berlin");