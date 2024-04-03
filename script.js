const weatherDiv = document.querySelector(".weatherData")
const weatherForm = document.querySelector("form")
const weatherInput = document.querySelector(".weatherSearch")



function handleForm (event) {  
event.preventDefault();

const searchValue = weatherInput.value;
weatherInput.value = '';

if (!searchValue) {
    weatherDiv.textContent = 'Please select a city!';
    weatherDiv.style.color = 'red';
    return
}


axios.get(`https://api.api-ninjas.com/v1/weather?city=${searchValue}`, {
    headers: {
        'X-Api-Key': 'EECScCOXhR8nxF19K2ElnA==RYF3uhKbpK4QkvOz'
    }
}).then ((res) => {
    console.log(res.data) 

    weatherDiv.innerHTML = `
    <div class="resultsContainer">
      <p class="weatherResults">The current temperature is ${res.data.temp}C</p>
      <P class="weatherResults">Max temp is ${res.data.max_temp}C</p>
      <p class="weatherResults">Min temp is ${res.data.min_temp}C</p>
      <p class="weatherResults">Feels like ${res.data.feels_like}C</p>
    </div>
    `
}).catch ((err) => {
    console.log(err.message)
    weatherDiv.textContent = 'Something went wrong, please try again later!'
})

}



weatherForm.addEventListener('submit', handleForm)