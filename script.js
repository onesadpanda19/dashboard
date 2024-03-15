const div = document.querySelector("#weather")


function getData () {
axios.get('https://api.api-ninjas.com/v1/weather?city=pocatello', {
    headers: {
        'X-Api-Key': 'EECScCOXhR8nxF19K2ElnA==RYF3uhKbpK4QkvOz'
    }
}).then ((res) => {
    
    console.log(res.data)
    
    
}).catch ((err) => {
    console.log(err.message)
})

}

getData()