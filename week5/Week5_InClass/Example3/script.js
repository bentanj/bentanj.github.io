// OpenWeatherMaps API key - Key in your own below
// NEVER SAVE API keys this way - you must save them securely (e.g. environment variable)
const weather_api_key = 'b1495ca3d87ce8cffec898fcd71e0c16';

function get_temperature() {

    console.log("[START] get_temperature()");


    let city = 'Pyongyang';
    let units = 'metric';

    // Task 1
    // Retrieve the user-supplied city from HTML and replace Pyongyang with it
    let doc_info = document.getElementById("info");

    let p1 = document.createElement('p')
    let city_text = document.createTextNode(`City: ${city}\n\n`)
    p1.appendChild(city_text);
    doc_info.appendChild(p1)

    console.log(doc_info);
    


    let api_endpoint_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_api_key}&units=${units}}`;
    
    axios.get(api_endpoint_url) //making a GET request and sending it to the url
    .then(response => {
        //Inspect the response in JS Console
        console.log(response.data);

        // Task 2
        // Retrieve Temperature (Celsius) and display in the HTML page
        let data = response.data

        let p2 = document.createElement('p')
        let temperature_text = document.createTextNode(`Temperature: ${data.main.temp} Farenheit\n\n`)
        p2.appendChild(temperature_text);
        doc_info.appendChild(p2);

        // Task 3
        // Retrieve Humidity (%) and display in the HTML page
        let p3 = document.createElement('p')
        let humidity_text = document.createTextNode(`Humidity: ${data.main.humidity}\n\n`)
        p3.appendChild(humidity_text);
        doc_info.appendChild(p3);
    }) 
    .catch((error) => {
        console.log(error.message);
    })
    
    
    
    console.log("[END] get_temperature()");
}
