const weather_type_images = {
    "Clear": "images/clear.jpg",
    "Clouds": "images/clouds.jpg",
    "Haze": "images/haze.jpg",
    "Mist": "images/mist.jpg",
    "Rain": "images/rain.jpg",
    "Smoke": "images/smoke.jpg",
    "Snow": "images/snow.jpg",
    "Thunderstorm": "images/thunderstorm.jpg"
};

const temp_images = {
    "Hot": "images/hot.jpg",   // Celsius > 25
    "Okay": "images/okay.jpg", // Celsius 5-25
    "Cold": "images/cold.jpg"  // Celsius < 5
};


// DO NOT CHANGE THE FUNCTION SIGNATURE
function check_weather() {

    console.log("=== [START] check_weather() ===");

    //============================================================================
    // Task 1
    // Key in your own OpenWeatherMap.org API key (DO NOT SHARE IT WITH OTHERS)
    //============================================================================
    const weather_api_key = 'b1495ca3d87ce8cffec898fcd71e0c16';


    //============================================================================
    // Task 2
    // Retrieve the user input (city name) from <input>
    //============================================================================
    let city = document.getElementById("city").value;


    // DO NOT MODIFY THIS
    let api_endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_api_key}&units=metric`;


    axios.get(api_endpoint)
    .then(response => {
        // Inspect what's in the API response
        console.log(response.data);


        //============================================================================
        // Task 3
        // Retrieve the weather info (e.g. Rain, Clouds, etc.)
        //============================================================================
        
        // YOUR CODE GOES HERE
        // Make use of const weather_type_images (at the top)
        let weather_arr = response.data.weather // array
        let temperature = response.data.main.temp

        console.log(weather_arr)

        //======================================================================================
        // Task 4
        // Perform JavaScript DOM to reflect weather info and temperature info in the HTML page.
        //======================================================================================

        // YOUR CODE GOES HERE
        // Make use of const temp_images (at the top)
        let weather_div = document.getElementById("weather_images")
        weather_div.innerHTML = "";
        for (weather of weather_arr) {
            state = weather.main
            let p = document.createElement('p')
            let img = document.createElement('img')
            img.src = weather_type_images[state]
            p.appendChild(img)
            weather_div.appendChild(p)
        }
        
        let temperature_el = document.getElementById("temperature_image")
        let condition = "";

        if (temperature > 25) {
            condition = "Hot";
        }
        else if (temperature < 5) {
            condition = "Cold";
        }
        else {
            condition = "Okay";
        }

        temperature_el.src = temp_images[condition];

    })
    .catch(error => {
        console.log(error.message);
    })
    
    console.log("=== [END] check_weather() ===");
}
